import React from "react";
import style from "./FormNft.module.css";
import { useState, useEffect } from "react";
import validate from "./validate";
import { useNavigate } from "react-router-dom";

export default function FormNft() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: [],
    price: undefined,
    category: [],
  });

  const [errors, setErrors] = useState({});

  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    const selectedCategory = event.target.value;
    const repet = form.category.includes(selectedCategory);
    if (!repet) {
      setForm({
        ...form,
        category: [...form.category, selectedCategory],
      });
      setErrors({
        ...errors,
        category: "", // Limpiar el error de categoría al seleccionar una nueva categoría
      });
    }
  };


  const handleRemove = (name, value) => {
    setForm({
      ...form,
      [name]: form[name].filter((category) => category !== value),
    });
    setErrors({
      ...errors,
      category: "",
    });
  };

  const handleAddImage = () => {
    if (imageUrl) {
      setForm({
        ...form,
        image: [...form.image, imageUrl], // Agregar la URL ingresada al array de contenido
      });
      setImageUrl(""); // Limpiar el campo de la URL después de agregarlo
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImage = [...form.image];
    updatedImage.splice(index, 1);
    setForm({
      ...form,
      image: updatedImage,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorSave = validate(form);
    const existName = allImagen.find(
      (imagen) =>
      imagen.name.toLowerCase() === form.name.toLocaleLowerCase()
    )
      ? 1
      : 0;
    if (existName === 1) {
      Swal.fire({
        text: `The file already exists"${form.name}"`,
        icon: 'error',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        background: "#666",
        color: "#FFFFFF"
      });
    }
    else if (Object.values(errorSave).length !== 0) {
      Swal.fire({
        text: 'You must complete all the required information',
        icon: "warning",
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 3000,
        background: "#666",
        color: "#FFFFFF"
      })
    }
    else {
      dispatch(postActivity(form));
      Swal.fire({
        text: 'Actividad Creada!',
        icon: 'success',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Add new NFT',
        cancelButtonText: 'Back to Homepage',
        background: "#666",
        color: "#FFFFFF"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/post')
          setTimeout(reload, 3000);  // Espera 3 segundos antes de llamar a reload()
        } else {
          navigate('/home');
        }
      })
      setForm({
        image: [],
        category: [],
        name: "",
        price: undefined,
        description: "",
      });
    }
  };

  return (
    <div className={style.containerPage}>
      <form className={style.containerFormImg}>
        <h2>Create your NFT:</h2>
        <div className={style.inputs}>

          <div className={style.image}>
            {/************* Image *************/}
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter URL"
              className={style.inputForm}
            />
            <button type="button" onClick={handleAddImage}>
              Add
            </button>
            <div className={style.imagepreview}>
              {form.image?.map((imageUrl, index) => (
                <div key={index} className={style.imageContainer}>
                  <img src={imageUrl} alt="NFT" className={style.imgPreview} />
                  <button onClick={() => handleRemoveImage(index)} className={style.removebutton}>
                    X
                  </button>
                </div>
              ))}
            </div>

            {errors.image && <p>{errors.image}</p>}
          </div>


          {/* <div className={style.image}>
            {/*Upload the image*/}
          {/* Cambiar `value` a `defaultValue` y agregar el controlador `onChange` */}
          {/*  <input
              type="file"
              accept="image/*"
              disabled={form.image.length === 1}
              className={style.inputForm}
            />
            <div className={style.imagepreview}>
              {form.image?.map((imageUrl) => (
                <div key={imageUrl} className={style.imageContainer}>
                  <img src={imageUrl} alt="image" className={style.imgPreview} />
                  <button className={style.removebutton}>{/* X */}{/*</button>
                </div>
              ))}
            </div>
            {errors.image && <p>{errors.image}</p>}
          </div>*/}

          <div className={style.image}>
            {/*************Category*************/}
            <select
              type="text"
              name="category"
              value={selectedCategory} // Utiliza la prop `value` para establecer la opción seleccionada
              onChange={handleSelect}
              className={`${style.inputForm} ${style.categorySelect}`}
            >
              <option value="" disabled> {/* No necesitas usar `selected` en la opción predeterminada */}
                Select Category
              </option>
              <option value="Art">Art</option>
              <option value="Gaming">Gaming</option>
              <option value="PFPs">PFPs</option>
              <option value="Photography">Photography</option>
              <option value="Music">Music</option>
            </select>
            {errors.players && <p>{errors.players}</p>}
            <div >
              <div className={style.inputDelete}>
                {form?.category?.length > 0 ? (
                  form?.category?.map((category) => (
                    <div className={style.inputDel} key={category}>
                      <button onClick={() => handleRemove("category", category)}>
                        X
                      </button>
                      <h5>{category} Categories</h5>
                    </div>
                  ))
                ) : (
                  <p>{errors.category ? errors.category : "Please select a category"}</p> // Verificar si hay un error de categoría
                )}
              </div>

            </div>
          </div>


          <div className={style.image}>
            {/*************Name*************/}
            {/* Cambiar `value` a `defaultValue` y agregar el controlador `onChange` */}
            <input
              type="text"
              defaultValue={form.name}
              name="name"
              onChange={handleChange}
              placeholder="Name"
              className={style.inputForm}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className={style.image}>
            {/************Price:*************/}
            {/* Cambiar `value` a `defaultValue` y agregar el controlador `onChange` */}
            <input
              type="number"
              min="0"
              defaultValue={form.price}
              name="price"
              onChange={handleChange}
              placeholder="Price"
              className={style.inputForm}
            />
            {errors.price && <p>{errors.price}</p>}
          </div>

          <div className={style.image}>
            {/************* Descripción:*************/}
            {/* Cambiar `value` a `defaultValue` y agregar el controlador `onChange` */}
            <textarea
              defaultValue={form.description}
              name="description"
              onChange={handleChange}
              placeholder="Description"
              className={style.textAreaForm}
            />
            {errors.description && <p>{errors.description}</p>}
          </div>

          <div className={style.btnContainer}>

            <button className={style.btn} type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
