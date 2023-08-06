const validar = (form) => {
    let errores = {};

    if (form.image.length === 0) {
        errores.image = "Debes cargar un NFT";
   /* }

    if (!form.name || !/^(?!^\s*$)[A-Za-z0-9\s]{3,25}$/.test(form.name)) {
        errores.name = "Asegúrate de que el nombre tenga entre 3 y 25 caracteres y consista solo en letras y números";*/
    }

    if (!form.price || form.price < 1 || !/^[0-9]+$/.test(form.price)) {
        errores.price = "Debes proporcionar un precio válido";
    }

    if (!form.description) {
        errores.description = "Debes proporcionar una breve descripción";
    }

    return errores;
}

export default validar;
