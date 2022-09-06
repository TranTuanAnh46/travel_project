function kiemTraMayBay() {
    var checkBoolean = true;
    var tenMayBay = document.getElementById("tenMayBay").value;
    if (tenMayBay === '') {
        document.getElementById("error-tenMayBay").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-tenMayBay").style.display = "none";
    }
    var gioithieumaybay = document.getElementById("gioiThieuMayBay").value;
    if (gioithieumaybay === '') {
        document.getElementById("error-gioiThieuMayBay").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-gioiThieuMayBay").style.display = "none";
    }
    var chonMayBay = document.getElementById("chonMayBay").value;
    if (chonMayBay === '') {
        document.getElementById("error-chonMayBay").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-chonMayBay").style.display = "none";
    }
    var AnhMayBay = document.getElementById("AnhMayBay").value;
    if (AnhMayBay === '') {
        document.getElementById("error-AnhMayBay").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-AnhMayBay").style.display = "none";
    }
    return checkBoolean;
}
