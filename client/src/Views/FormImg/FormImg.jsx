import React from "react";
import style from "../../Views/FormImg/FormImg.module.css";
import { useState, useEffect } from "react";
import validate from "./validate";
import { useNavigate } from "react-router-dom";

export default function FormImg() {

    const [form, setForm] = useState({
        name: "",
        description: "",
        content: [],
        price: undefined,
      });

  const [errors, setErrors] = useState({});

  const [selectedCategory, setSelectedCategory] = useState("");

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
    const repet = form[event.target.name].includes(event.target.value);
    console.log(selectedCategory);
    if (!repet) {
      setForm({
        ...form,
        [event.target.name]: [...form[event.target.name], event.target.value],
      });
      setErrors(
        validate({
          ...form,
          [event.target.name]: [...form[event.target.name], event.target.value],
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorSave = validate(form);
    const existName = allContent.find(
        (content) =>
        content.name.toLowerCase() === form.name.toLocaleLowerCase()
    )
    ? 1
    : 0;
  if (existName === 1){
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
  else if (Object.values(errorSave).length !== 0){
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
      confirmButtonText: 'Add new content', 
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
      name: "",
      description: "",
      content: [],
      price: undefined,
      category: [],
    });
  }
};

  return (
    <form className={style.containerFormImg}>
      <h2>Create your content:</h2>
      <div className={style.inputs}>
        <div className={style.content}>
          {/*Upload the content*/}
          {/* Cambiar `value` a `defaultValue` y agregar el controlador `onChange` */}
          <input
            type="file"
            accept="image/*"
            disabled={form.content.length === 1}
            className={style.inputForm}
          />
          <div className={style.imagepreview}>
            {form.content?.map((contentUrl) => (
              <div key={contentUrl} className={style.contentContainer}>
                <img src={contentUrl} alt="Content" className={style.imgPreview} />
                <button className={style.removebutton}>{/* X */}</button>
              </div>
            ))}
          </div>
          {errors.picture && <p>{errors.picture}</p>}
        </div>

        <div className={style.content}>
          {/*Category*/}
          <select
            type="text"
            name="category"
            value={selectedCategory}
            onChange={handleSelect}
            className={style.inputForm}

          >
            <option value="" disabled selected>
              Category
            </option>
            <option value="Image">Image</option>
            <option value="Photoshop">Photoshop</option>
            <option value="Vectors">Vectors</option>
            <option value="Icons">Icons</option>
            <option value="Videos">Videos</option>
          </select>
          {errors.players && <p>{errors.players}</p>}
          <div >
            <div className={style.inputDelete}>
              {form?.category?.length > 0 ? (
                form?.category?.map((category) => (
                  <div className={style.inputDel} key={player}>
                    <button onClick={() => handleRemove("categories", category)}>
                      X
                    </button>
                    <h3>{category} Categories</h3>
                  </div>
                ))
              ) : (
                <p>Please select a category</p>
              )}
            </div>
          </div>
        </div>


        <div className={style.content}>
          {/*Name*/}
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

        <div className={style.content}>
          {/*Price:*/}
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

        <div className={style.content}>
          {/* Descripción:*/}
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
    
  );
}
