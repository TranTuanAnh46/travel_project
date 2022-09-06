function kiemTraBinhLuan() {
    var checkBoolean = true;

    var BinhLuan = document.getElementById("comment").value;
    if (BinhLuan === '') {
        document.getElementById("error-comment").style.display = "block";
        return checkBoolean = false;
    } else {
        document.getElementById("error-comment").style.display = "none";
    }

    return checkBoolean;
}
