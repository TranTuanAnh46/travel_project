function kiemTraNhanTin() {
    var checkBoolean = true;
    var nhantin = document.getElementById("nhantin").value;
    if (nhantin === '') {
        document.getElementById("error-nhantin").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-nhantin").style.display = "none";
    }
    return checkBoolean;
}
