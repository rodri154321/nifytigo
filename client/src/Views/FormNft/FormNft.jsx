import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNft } from "../../Redux/postNft";
import { getCategories } from "../../Redux/getCategories";
import style from "./FormNft.module.css";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;
const PRESET = import.meta.env.VITE_PRESET;

const reload = () => {
  window.location.reload(false);
};

const FormNft = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({

      iduser: "6c55d3ee-8d6d-42b7-862d-a5e76fc05fd3",
      image: [],
      name: "",
      description: "",
      price: "",
      categorie: [],
    });

  const [formErrors, setFormErrors] = useState({
    image: [],
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    dispatch(getCategories()); // Cargar las categorías al cargar el componente
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validaciones y actualización de errores
    const errors = validateField(name, value);
    setFormErrors({ ...formErrors, [name]: errors });
  };

  const validateField = (fieldName, value) => {
    let errors = "";
    switch (fieldName) {
     // case "image":
       // if (formData.image.length === 0) {
         // errors = "Please select an NFT";
       // }
        //break;
      case "name":
        if (!/^(?!^\s*$)[A-Za-z0-9\s]{3,25}$/.test(value)) {
          errors = "El nombre debe tener entre 3 y 25 letras o numeros y no debe contener espacios seguidos en blanco.";
        }
        break;
      case "description":
        if (value.length > 210) {
          errors = "La descripción no debe exceder los 210 caracteres.";
        }
        break;
      case "categories":
        if (!value || value.length === 0) {
          errors = "Please enter an category";
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    // Verificar si la categoría seleccionada ya está en la lista
    if (!formData.categorie.includes(selectedCategory)) {
      setFormData({
        ...formData,
        categorie: [...formData.categorie, selectedCategory]
      });
    }
  }

  const handleRemoveImage = (imageUrl) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: prevFormData.image.filter((url) => url !== imageUrl),
    }));
  };

  const handleImageUpload = (event) => {
    console.log("Starting image upload...");
    const files = event.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", PRESET);

      console.log("Sending upload request...");
      fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Image upload successful:", data);

          // Actualizar el estado del formulario solo con la URL de la imagen subida
          setFormData((prevFormData) => ({
            ...prevFormData,
            image: [...prevFormData.image, data.secure_url],
          }));

          // Validar el campo "image" y asignar los errores correspondientes
          const errors = validateField("image", formData.image);
          setFormErrors({ ...formErrors, image: errors });
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  const handleRemoveCategory = (categoryToRemove) => {
    const updatedCategories = formData.categorie.filter(category => category !== categoryToRemove);

    setFormData({
      ...formData,
      categorie: updatedCategories
    });
  }

  const handleSubmit = async (event) => {
    console.log("Submit button clicked");
    event.preventDefault();

    // Validar que todos los campos estén llenos
    if (
      formData.image.length === 0 ||
      formData.name === "" ||
      formData.description === "" ||
      formData.price === "" ||
      formData.categorie.length === 0
    ) {
      console.log("Missing fields detected");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please complete all the fields to create the NFT.",
        background: '#000000',
        confirmButtonColor: '#5CE1E6',
      });
      return;
    }

    // Validar campos específicos
    if (formData.image.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Image Missing",
        text: "Please select an image for your NFT.",
      });
      return;
    }

    if (formData.categorie.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Category Missing",
        text: "Please select at least one category for your NFT.",
      });
      return;
    }

    try {
      // Convertir el arreglo de imágenes en una cadena separada por comas
      const imageString = formData.image.join(',');

      // Crear una copia del formData con el arreglo convertido en cadena
      const formDataToSend = {
        ...formData,
        image: imageString,
      };

      // Llamar a la acción para enviar los datos al servidor
      const response = await dispatch(postNft(formDataToSend));

      // Resto del código para mostrar la alerta de éxito y redireccionar
      Swal.fire({
        icon: "success",
        title: "Your NFT has been successfully created",
        text: "What would you like to do?",
        showCancelButton: true,
        confirmButtonText: "Profile",
        cancelButtonText: "Home",
        reverseButtons: true,
        background: '#000000', // Color de fondo negro
        confirmButtonColor: '#5CE1E6', // Color del botón de confirmación
        cancelButtonColor: '#FF914D', // Color del botón de cancelación
       // 
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/Profile");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate("/");
        }
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  return (
    <div className={style.containerFormNft}>
      <div className={style.containerMainFormNft}>
        <form onSubmit={handleSubmit} className={style.FormNft}>
          <div className={style.inputContainerFormNft}>
            <h2 htmlFor="imageUrl" className={style.titleFormNft}>Enter a Nft:</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={formData.image.length === 1}
              className={style.input}
            />
            <div className={style.imagepreview}>
              {formData.image?.map((imageUrl) => (
                <div key={imageUrl} className={style.imageContainerFormNft}>
                  <Image publicId={imageUrl} cloudName={CLOUD_NAME}className={style.nftImage}>
                    <Transformation width="100" height="100" crop="thumb" />
                  </Image>
                  <button
                    className={style.removebuttonFormNft}
                    onClick={() => handleRemoveImage(imageUrl)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            {formErrors.image && <p className={style.error}>{formErrors.image}</p>}
          </div>


          <div className={style.inputContainerFormNft}>
            {/*<h3 htmlFor="name">NFT name:</h3>*/}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="NFT name"
            />
            {formErrors.name && <p className={style.error}>{formErrors.name}</p>}
          </div>

          <div className={style.inputContainerFormNft}>
            {/*<h3 htmlFor="description"></h3>*/}
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              required
              placeholder="Description"
              
            ></textarea>
            {formErrors.description && <p className={style.error}>{formErrors.description}</p>}
          </div>

          <div  className={style.inputContainerFormNft}>
            {/*<h3 htmlFor="price">Price:</h3>*/}
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              step="0.01"
              required
              placeholder="Price"
            />
            {formErrors.price && <p className={style.error}>{formErrors.price}</p>}
          </div>

          <div className={style.inputContainerFormNft}>
            <h2 htmlFor="categories" className={style.titleFormNft}>Categories:</h2>
            <select
              multiple
              id="categories"
              onChange={handleCategoryChange}
              required
            >
              {categories.map((category) => (
                <option key={category.name} value={category.name} className={style.optionFormNft}>
                  {category.name} 
                </option>
              ))}
            </select>
            <div>
              <p>Selected Categories:</p>
              {formData.categorie.map((cat) => (
                <div key={cat} className={style.categoriesFormNft}>
                  <span className={style.titleTwoFormNft}>{cat}</span>
                  <button onClick={() => handleRemoveCategory(cat)} className={style.removebuttonFormNft}> x </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button type="submit" className={style.buttonFormNft}>
              Create NFT
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default FormNft;



