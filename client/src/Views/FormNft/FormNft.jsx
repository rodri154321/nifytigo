import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNft } from "../../Redux/postNft"; // Asegúrate de importar las acciones correctas
import { getCategories } from "../../Redux/getCategories";
import style from "./FormNft.module.css"; // Importa los estilos CSS correspondientes
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
    iduser: "214891cc-6378-475b-98a7-67cf1fbb2ffd",//214891cc-6378-475b-98a7-67cf1fbb2ffd
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
      case "image":
        // Validar la URL de la imagen con una expresión regular
        if (!formData.image.length) {
          errors = "Por favor, ingrese un NFT";
        }
        break;
      case "name":
        // Validar el nombre con una expresión regular
        if (!/^(?!^\s*$)[A-Za-z0-9\s]{3,25}$/.test(value)) {
          errors = "El nombre debe tener entre 3 y 25 caracteres y no debe contener espacios en blanco.";
        }
        break;
      case "description":
        // Validar la descripción con la longitud máxima
        if (value.length > 210) {
          errors = "La descripción no debe exceder los 210 caracteres.";
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleCategoryChange = (event) => {
   // console.log(formData)
    setFormData({
      ...formData,
      categorie: [...formData.categorie, event.target.value]//...formData.categorie.push(event.target.value)
    })
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
          const errors = validateField("image", prevFormData.image);
          setFormErrors({ ...formErrors, image: errors });
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      console.log("Server response:", response);
      Swal.fire({
        icon: "success",
        title: "Your NFT has been successfully created",
        text: "Now you can see your NFTs in your profile.",
        showConfirmButton: true,
      }).then(() => {
        navigate("/Profile"); // Redireccionar a la página de perfil
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className={style.containerFormNft}>
      <div className={style.containerMain}>

        <h1>Crear NFT</h1>
        <form onSubmit={handleSubmit}>
          <h3 htmlFor="imageUrl">URL de la Imagen:</h3>
          <input
            type="file"
            accept="image/*"
            //value={formData.image}
            onChange={handleImageUpload}
            disabled={formData.image.length === 1}
            className={style.input}
          />
          <div className={style.imagepreview}>
            {formData.image?.map((imageUrl) => (
              <div key={imageUrl} className={style.imagecontainer}>
                <Image publicId={imageUrl} cloudName={CLOUD_NAME}>
                  <Transformation width="100" height="100" crop="thumb" />
                </Image>
                <button
                  className={style.removebutton}
                  onClick={() => handleRemoveImage(imageUrl)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {formErrors.image && <p className={style.error}>{formErrors.image}</p>}

          <h3 htmlFor="name">Nombre:</h3>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {formErrors.name && <p className={style.error}>{formErrors.name}</p>}

          <h3 htmlFor="description">Descripción:</h3>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
          {formErrors.description && <p className={style.error}>{formErrors.description}</p>}


          <h3 htmlFor="price">Precio:</h3>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            step="0.01"
            required
          />
          {formErrors.price && <p className={style.error}>{formErrors.price}</p>}

          <h3 htmlFor="categories">Categorías:</h3>
          <select
            multiple
            id="categories"
            onChange={handleCategoryChange}
            required
          >
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {formData.categorie.map((cat) => <p> Categorias Seleccionadas:{cat}</p>)}
          <button type="submit" className={style.button}>
            Create NFT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormNft;



