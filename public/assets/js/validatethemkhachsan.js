function kiemTraKhachSan() {
    var checkBoolean = true;

    var tenKhachSan = document.getElementById("tenKhachSan").value;
    if (tenKhachSan === '') {
        document.getElementById("error-tenKhachSan").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-tenKhachSan").style.display = "none";
    }
    var MTkhachSan = document.getElementById("MTkhachSan").value;
    if (MTkhachSan === '') {
        document.getElementById("error-MTkhachSan").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-MTkhachSan").style.display = "none";
    }
    var AnhKhachSan = document.getElementById("AnhKhachSan").value;
    if (AnhKhachSan === '') {
        document.getElementById("error-AnhKhachSan").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-AnhKhachSan").style.display = "none";
    }
    return checkBoolean;
}
