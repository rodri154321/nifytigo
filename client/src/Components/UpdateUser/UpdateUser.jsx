import React, { useState, useEffect } from "react";
import style from '../UpdateUser/UpdateUser.module.css';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/updateUser";
import { useNavigate } from 'react-router-dom';


const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;
const PRESET = import.meta.env.VITE_PRESET;

const UpdateUser = () => {
    const navigate = useNavigate();
    const loger = localStorage.getItem('loger');
    //console.log(loger)

    const id = localStorage.getItem("clientId");
    console.log(id)

    const userDetail = useSelector((state) => state.userDetail);
    console.log(userDetail)

    const [imagePreviewUrl, setImagePreviewUrl] = useState("")
    const dispatch = useDispatch();
    let url = imagePreviewUrl;
    const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);
    const [isUpdateError, setIsUpdateError] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    //useEffect(() => {
      //  storedUserId(localStorage.getItem("clientId"));
        //console.log(clientId)
    //}, []);

    const [form, setForm] = useState({
        image: '',
        username: userDetail.username || "",
        name: userDetail.name || "",
        lastName: userDetail.lastName || "",
        country: userDetail.country || "",
        cellPhone: userDetail.cellPhone || "",
        password: userDetail.password || "",
        admin:false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const reload = () => {
        window.location.reload(false);
    };

    //console.log("userDetail:", userDetail);

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

    const handleSave = (e) => {
        e.preventDefault();
        navigate('/Profile');
    };

    const handleClose = (e) => {
        e.preventDefault();
        navigate('/Profile');
    };

    const validate = (form) => {
        const regexNumeric = /^\d+$/;
        let errors = {};

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

    console.log("Formulario al cargar:", form);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setForm({
            ...form,
            image: url,
        });

        setErrors(validate(form));
        const error = validate(form);
        if (Object.values(error).length !== 0) {
            alert("Debe rellenar el campo obligatorio");
        } else {
            try {
                //console.log(response)
                const response = await dispatch(updateUser(form));
                setIsUpdateSuccessful(true);
                setIsUpdateError(false);
                setTimeout(reload, 1500);
            } catch (error) {
                setIsUpdateSuccessful(false);
                setIsUpdateError(true);
                console.error("Error al actualizar el usuario:", error);
            }
        }
    };

    useEffect(() => {
        const requiredFields = ["username", "name", "lastName", "country", "cellPhone", "password", "image"];
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
                <button className={style.removebuttoncancel} onClick={handleClose}>x</button>
                <h1 className={style.titleUpdateUser}> Update your data</h1>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.username} name="username" placeholder="Username" onChange={handleChange} />
                    {errors.username && <p className={style.error}>{errors.username}</p>}
                </div>
                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.name} name="name" placeholder="Name" onChange={handleChange} />
                    {errors.name && <p className={style.error}>{errors.name}</p>}
                </div>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.lastName} name="lastName" placeholder="Last name" onChange={handleChange} />
                    {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
                </div>

                <div className={style.divInputUpdateUser}>
                    <input className={style.inputUpdateUser} type="text" value={form.country} name="country" placeholder="Country" onChange={handleChange} />
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
                {isUpdateSuccessful && (
                    <p style={{ color: "green" }}>Actualización exitosa.</p>
                )}
                {isUpdateError && (
                    <p style={{ color: "red" }}>Error al actualizar el usuario.</p>
                )}
            </div>
        </form>
    );
};

export default UpdateUser;
