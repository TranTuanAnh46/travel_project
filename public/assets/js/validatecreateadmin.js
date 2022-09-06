function kiemTraThemAdmin() {
    var checkBoolean = true;

    var nameAdmin = document.getElementById("nameAdmin").value;



    if (nameAdmin === '') {
        document.getElementById("error-nameAdmin").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-nameAdmin").style.display = "none";
    }

    var emailAdmin = document.getElementById("emailAdmin").value;
    if (emailAdmin === '') {
        document.getElementById("error-emailAdmin").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-emailAdmin").style.display = "none";
    }

    var passAdmin = document.getElementById("passAdmin").value;
    if (passAdmin === '') {
        document.getElementById("error-passAdmin").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-passAdmin").style.display = "none";
    }

    var quyenAdmin = document.getElementById("quyenAdmin").value;
    if (quyenAdmin === '') {
        document.getElementById("error-quyenAdmin").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-quyenAdmin").style.display = "none";
    }

    return checkBoolean;
}
