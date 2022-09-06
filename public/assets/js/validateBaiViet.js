function kiemTraBaiViet() {
    var checkBoolean = true;

    var TenTieuDe = document.getElementById("TenTieuDe").value;
    if (TenTieuDe === '') {
        document.getElementById("error-TenTieuDe").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-TenTieuDe").style.display = "none";
    }
    var TomTat = document.getElementById("TomTat").value;
    if (TomTat === '') {
        document.getElementById("error-TomTat").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-TomTat").style.display = "none";
    }
    var AnhBaiViet = document.getElementById("AnhBaiViet").value;
    if (AnhBaiViet === '') {
        document.getElementById("error-AnhBaiViet").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-AnhBaiViet").style.display = "none";
    }
    var NoiDung = document.getElementById("NoiDung").value;
    if (NoiDung === '') {
        document.getElementById("error-NoiDung").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-NoiDung").style.display = "none";
    }
    return checkBoolean;
}
