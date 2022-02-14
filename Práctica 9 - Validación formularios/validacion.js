function validacion(){

    var name = document.getElementById('ipt_name').value;
    if (name==""){
        alert("No has introducido tu nombre");
        return false;
    }
    var surname = document.getElementById('ipt_surname').value;
    if (surname == "") {
         alert("No has introducido tus apellidos");
        return false;
    }
    var email = document.getElementById('ipt_email').value;
    if (emai == "") {
        alert("No has introducido su email");
       return false;
    }
    var email2 = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!email2.test(email)) {
        alert("Formato del email erroneo");
        return false;
    }
    var texto = document.getElementById('txt_area').value;
    if (texto.length == 0) {
        alert ("No hay texto introducido");
        return false;
    }
    var publi = document.getElementById('chk_publi');
    if (publi == 0) {
        alert("Debes de aceptar la condición");
        return false;
    }
    var paises = document.getElementById('slct_procedencia');
    if (paises == null || paises == 0) {
        alert("Debes seleccionar una procedencia");
        return false;
    }
    let file = document.getElementById("fl_archivo").value;
    if (file == 0) {
        alert("No hay introducido ningún archivo adjunto");
        return false;
    }

}

