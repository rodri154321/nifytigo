import React from "react";
import style from '../UpdateUser/UpdateUser.module.css';
import { useState } from "react";
import { useEffect } from "react";
import { updateUser } from "../../Redux/updateUser";
import { useSelector, useDispatch } from "react-redux";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";


const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;
const PRESET = import.meta.env.VITE_PRESET;

const UpdateUser = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const userDetail = useSelector((state) => state.userDetail);
    const [imagePreviewUrl, setImagePreviewUrl] = useState("")
    const dispatch = useDispatch();
    let url = imagePreviewUrl

    const [form, setForm] = useState({
        image: '',
        username: userDetail?.username || "",
        name: userDetail?.name || "",
        lastName: userDetail?.lastName || "",
        country: userDetail?.country || "",
        cellPhone: userDetail?.cellPhone || "",
        email: userDetail?.email || "",
        password: userDetail?.password || "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const reload = () => {
        window.location.reload(false);
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        setErrors(
            validate({
                ...form,
                [event.target.name]: event.target.value
            })
        );
    };

    const validate = (form) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = {};

        if (!form.email) {
            errors.email = "Complete the field please";
        } else if (!regexEmail.test(form.email)) {
            errors.email = "The email is not valid";
        } else if (form.email.length > 50) {
            errors.email = "The email must not exceed 50 characters";
        }

        if (!form.name) {
            errors.name = "Complete the field please";
        } else if (form.name.length > 35) {
            errors.name = "The name must not exceed 35 characters";
        }

        if (!form.password) {
            errors.password = "Complete the field please";
        } else if (!form.password.match(/\d/)) {
            errors.password = "Password must have at least one number";
        } else if (form.password.length < 6 || form.password.length > 15) {
            errors.password = "Password must be between 6 and 15 characters";
        }
        if (!form.cellPhone) {
            errors.cellPhone = "Complete the field please";
        } else if (!regexNumeric.test(form.cellPhone)) {
            errors.cellPhone = "Cell phone must be numeric";
        } else if (form.cellPhone.length !== 10) {
            errors.cellPhone = "Cell phone must be 10 digits long";
        }

        if (!form.country) {
            errors.country = "Complete the field please";
        }
        return errors;
    };








    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", PRESET);
            console.log(files);
            fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())

                .then((data) => {
                    setImagePreviewUrl(data.secure_url);
                    setForm((prevForm) => ({
                        ...prevForm,
                        image: data.secure_url,
                    }));
                })

                .catch((error) => {
                    console.error("Error al subir la imagen a Cloudinary:", error);
                });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setForm({
            ...form,
            image: url
        }
        );

        setErrors(validate(form));
        const error = validate(form);
        if (Object.values(error).length !== 0) {
            alert("Debe rellenar el campo obligatorio");
        } else {
            console.log(form)
            dispatch(updateUser(form));
            setTimeout(reload, 1500)
        }
    };


    useEffect(() => {
        const requiredFields = ["name", "password"];
        const allFieldsHaveValue = requiredFields.every((field) => form[field]);
        setButtonDisabled(!allFieldsHaveValue);
    }, [form]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRemoveImage = () => {
        event.preventDefault();
        setForm((prevForm) => ({
            ...prevForm,
            image: "",
        }));
        setImagePreviewUrl("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.containerUpdateUser}>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.name} name="username" placeholder="Username" onChange={handleChange} />
                    {errors.username && <p className={style.error}>{errors.username}</p>}
                </div>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.name} name="name" placeholder="Name" onChange={handleChange} />
                    {errors.name && <p className={style.error}>{errors.name}</p>}
                </div>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.name} name="lastName" placeholder="Last name" onChange={handleChange} />
                    {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
                </div>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.name} name="country" placeholder="Country" onChange={handleChange} />
                    {errors.country && <p className={style.error}>{errors.country}</p>}
                </div>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.phone} name="cellPhone" placeholder="Cell phone" onChange={handleChange} />
                    {errors.cellPhone && <p className={style.error}>{errors.cellPhone}</p>}
                </div>
                {(userDetail?.password)?.length > 10 ? undefined :
                    <div className={style.divInputUpdateUser}>
                        <input className={style.inputPassUpdateUser} type={showPassword ? "text" : "password"} value={form.password} name="password" placeholder="Password" onChange={handleChange} />
                        {errors.password && <p className={style.error}>{errors.password}</p>}
                        <button type="button" className={style.toggleButton} onClick={togglePasswordVisibility}>
                            {showPassword ? "•" : "👁️‍🗨️"}
                        </button>
                    </div>}

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="file" accept="image/*" name="image" title="Subir Imagen" onChange={handleImageUpload} />
                    {errors.image && <p className={style.error}>{errors.image}</p>}
                </div>
                {imagePreviewUrl && (
                    <div className={style.imagepreview}>
                        <div className={style.imagecontainer}>
                            <button
                                className={style.removebutton}
                                onClick={() => handleRemoveImage()}
                            >X</button>
                            <img src={imagePreviewUrl} alt="Preview" />
                        </div>
                    </div>
                )}
                <button className={style.buttonUpdateUser} type="submit" disabled={buttonDisabled}>
                    Save
                </button>
            </div>
        </form>
    );
};

export default UpdateUser;
