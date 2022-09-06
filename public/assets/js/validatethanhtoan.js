function kiemTraThanhToan() {
    var checkBoolean = true;

    var tenKhachHang = document.getElementById("tenKhachHang").value;
    if (tenKhachHang === '') {
        document.getElementById("error-tenKhachHang").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-tenKhachHang").style.display = "none";
    }
    var sdt = document.getElementById("SDT").value;
    if (sdt === '') {
        document.getElementById("error-SDT").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-SDT").style.display = "none";
    }
    var ghichu = document.getElementById("ghichu").value;
    if (ghichu === '') {
        document.getElementById("error-ghichu").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-ghichu").style.display = "none";
    }
    return checkBoolean;
}
