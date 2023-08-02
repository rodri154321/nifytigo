const validate=(form)=>{
    let errors={};
    if (!form.name || !/^(?!^\s*$)[A-Za-z0-9\s]{3,25}$/.test(form.name)) {errors.name = "Make sure the name is 3-25 characters long and consists of only letters and numbers";}
    if(!form.description)errors.description ="A brief description must be provided";
    if(!form.content.length)errors.content="You must upload a file";
    if(!form.price || form.price<1 || !/^[0-9]+$/.test(form.price))errors.price="A valid price must be provided";
    return errors;
}
export default validate;