import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./FormNft.module.css";
import validate from "./validate";
import axios from "axios"
import {getCategories} from '../../Redux/getCategories';
//import { postNft } from "../../Redux/postNft";

export default function FormNft() {

  const [form, setForm] = useState({
    name: "",
    categories: [],
    description: "",
    image: "",
    price: "",
    iduser: "b6274428-dbde-4bba-8019-ed45841a8a49",
  });

  const [errors, setErrors] = useState({
    name: "",
    categories: [],
    description: "",
    image: "",
    price: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/nft/create`, form)
      .then((res) => alert('you have created your nft'))
      .catch((err) => alert('you have not created your nft'))
    setForm(
      {
        name: "",
        categories: [],
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


  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);


  const handleCategories = (event) => {
    if (!form.categories.includes(event.target.value)) {
      setForm({
        ...form,
        categories: [...form.categories, event.target.value],
      });
      setErrors({
        ...form,
        categories: [...form.categories, event.target.value],
      });
    }
  };




  return (
    <div className={style.containerPage}>
      <form className={style.containerFormImg} onSubmit={handleSubmit}>
        <h2>Create your NFT:</h2>
        <div className={style.inputs}>

          <div className={style.image}>
            {/************* Image *************/}
            <input
              type="url"
              defaultvalue={form.image}
              onChange={handleChange}
              placeholder="Enter URL"
              className={style.inputForm}
            />
            {errors.image && <p>{errors.image}</p>}
          </div>

          <div className={style.image}>
            {/*************Name*************/}
            {/* Cambiar `value` a `defaultValue` y agregar el controlador `onChange` */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className={style.inputForm}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>


          <div className={style.image}>
            <select
              name="categories"
              value={categories}
              onChange={handleCategories}
              className={style.inputForm}
            >
              <option value="" disabled>
                Categorías
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>

            {/*   <option value="Art">Art</option>
              <option value="Gaming">Gaming</option>
              <option value="PFPs">PFPs</option>
              <option value="Photography">Photography</option>
  <option value="Music">Music</option> */}

            {form.categories.length > 0 && (
              <div className={style.selectedCategories}>
                {form.categories.map((category, index) => (
                  <div key={index} className={style.categoryTag}>
                    {category}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(category)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
            {errors.categories && <p>{errors.categories}</p>}
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
      </form >
    </div >
  );
}



