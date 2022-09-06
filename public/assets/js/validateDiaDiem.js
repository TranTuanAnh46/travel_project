function kiemTraDiaDiem() {
    var checkBoolean = true;

    var tenDiaDiem = document.getElementById("tenDiaDiem").value;
    if (tenDiaDiem === '') {
        document.getElementById("error-tenDiaDiem").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-tenDiaDiem").style.display = "none";
    }
    var AnhDiaDiem = document.getElementById("AnhDiaDiem").value;
    if (AnhDiaDiem === '') {
        document.getElementById("error-AnhDiaDiem").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-AnhDiaDiem").style.display = "none";
    }
    return checkBoolean;
}
