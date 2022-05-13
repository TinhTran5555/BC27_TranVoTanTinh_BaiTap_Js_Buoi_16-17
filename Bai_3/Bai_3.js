function tinhGiaiThua() {
    // B1: lấy giá trị của n từ  ô input 

    var n = +document.getElementById("soN").value;
    // Tạo biến tổng S 
   
    var s = 1;
    // tạo biến bước nhảy i = 1 
    var i = 1; 
    // B2: Khởi tạo vòng lặp while với điều kiện i <= n

    while (i <= n) {
        s *= i;
        i++;
    }
    document.getElementById("hienKetQua").style.display = "block"
    document.getElementById("xuatKetQua").innerHTML= ` Kết quả của bài toán là: ${s}`
}