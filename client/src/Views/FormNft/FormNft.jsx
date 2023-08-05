import React, { useState } from "react";
import style from "./FormNft.module.css";
import validate from "./validate";
import { useDispatch } from "react-redux";
import axios from "axios"


export default function FormNft() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    iduser: "e975a13b-058f-4239-a807-0c6713ad019c"
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });


  //const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(`http://localhost:3001/nft/create`, form)
      .then((res) => alert('you have created your nft'))
      .catch((err) => alert('you have not created your nft'))
    setForm(
      {
        name: "",
        description: "",
        image: "",
        price: "",
      }
    )
  }

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

  const handleAddImage = () => {
    if (image) {
      setForm({
        ...form,
        image: [...form.image, image],
      });
      setImageUrl("");
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

  return (
    <div className={style.containerPage}>
      <form className={style.containerFormImg} onSubmit={handleSubmit}>
        <h2>Create your NFT:</h2>
        <div className={style.inputs}>

          <div className={style.image}>
            {/************* Image *************/}
            <input
              type="text"
              defaultValue={form.image}
              onChange={handleChange}
              placeholder="Enter URL"
              className={style.inputForm}
            />
            {errors.image && <p>{errors.image}</p>}
          </div>
            {/*<button type="button" onClick={handleAddImage}>
              Add
            </button>
            <div className={style.imagepreview}>
              {form.image && form.image.map((image, index) => (
                <div key={index} className={style.imageContainer}>
                  <img src={image} alt="NFT" className={style.imgPreview} />
                  <button onClick={() => handleRemoveImage(index)} className={style.removebutton}>
                    X
                  </button>
                </div>
              ))}
            </div>*/}

          <div className={style.image}>
            {/*************Name*************/}
            {/* Cambiar `value` a `defaultValue` y agregar el controlador `onChange` */}
            <input
              type="url"
              name="name"
              value={form.name}
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
              name="price"
              value={form.price}
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
              //defaultValue={form.description}
              name="description"
              value={form.description}
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
