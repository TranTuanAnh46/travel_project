function kiemTraThemTour() {
    var checkBoolean = true;

    var nameTour = document.getElementById("NameTour").value;



    if (nameTour === '') {
        document.getElementById("error-NameTour").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-NameTour").style.display = "none";
    }

    var TieuDe = document.getElementById("TieuDe").value;
    if (TieuDe === '') {
        document.getElementById("error-TieuDe").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-TieuDe").style.display = "none";
    }

    var Anh = document.getElementById("Anh").value;
    if (Anh === '') {
        document.getElementById("error-Anh").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-Anh").style.display = "none";
    }
    var gioithieu = document.getElementById("gioithieu").value;
    if (gioithieu === '') {
        document.getElementById("error-gioithieu").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-gioithieu").style.display = "none";
    }
    var DiemXuatPhat = document.getElementById("DiemXuatPhat").value;
    if (DiemXuatPhat === '') {
        document.getElementById("error-DiemXuatPhat").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-DiemXuatPhat").style.display = "none";
    }
    var DiemDen = document.getElementById("DiemDen").value;
    if (DiemDen === '') {
        document.getElementById("error-DiemDen").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-DiemDen").style.display = "none";
    }
    var MayBay = document.getElementById("MayBay").value;
    if (MayBay === '') {
        document.getElementById("error-MayBay").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-MayBay").style.display = "none";
    }
    var KhachSan = document.getElementById("KhachSan").value;
    if (KhachSan === '') {
        document.getElementById("error-KhachSan").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-KhachSan").style.display = "none";
    }
    var ngayXuatPhat = document.getElementById("ngayXuatPhat").value;
    if (ngayXuatPhat === '') {
        document.getElementById("error-ngayXuatPhat").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-ngayXuatPhat").style.display = "none";
    }
    var ngayKetThuc = document.getElementById("ngayKetThuc").value;
    if (ngayKetThuc === '') {
        document.getElementById("error-ngayKetThuc").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-ngayKetThuc").style.display = "none";
    }
    var SLnguoilon = document.getElementById("SLnguoi").value;
    if (SLnguoilon === '') {
        document.getElementById("error-SLnguoi").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-SLnguoi").style.display = "none";
    }
    var giaNguoiLon = document.getElementById("giaNguoiLon").value;
    if (giaNguoiLon === '') {
        document.getElementById("error-giaNguoiLon").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-giaNguoiLon").style.display = "none";
    }
    var giaTreEm = document.getElementById("giaTreEm").value;
    if (giaTreEm === '') {
        document.getElementById("error-giaTreEm").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-giaTreEm").style.display = "none";
    }
    return checkBoolean;
}
