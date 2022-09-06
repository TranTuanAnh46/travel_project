function kiemTraSoLuongNguoi(){
  
    var soLuongNguoiConLai =parseInt(document.getElementById("soLuongNguoiConLai").value) ;
    var soLuongNguoiLon =parseInt(document.getElementById("soLuongNguoiLon").value);
    var soLuongTreEm =parseInt(document.getElementById("soLuongTreEm").value) ;

    var soLuongNguoiLonVaTreEm = soLuongNguoiLon + soLuongTreEm;
    var checkError = document.getElementById("thongBaoLoi");
    var booleanCheck = true;

    if(soLuongNguoiLonVaTreEm > soLuongNguoiConLai){
        checkError.style.display = "block";
        booleanCheck = false;
    }else{
        checkError.style.display = "none";
    }
    return booleanCheck;

    // alert(soLuongNguoiLonVaTreEm);
    // alert("hello");
}