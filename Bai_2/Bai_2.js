function tinhTong() {
    // B1: lấy giá trị của x và n từ 2 ô input 
    var x = +document.getElementById("soX").value;
    var n = +document.getElementById("soN").value;
    // Tạo biến tổng S 
   
    var s = 0;
    // tạo biến bước nhảy i = 1 
    var i = 1; 
    // B2: Khởi tạo vòng lặp while với điều kiện x <= n

    while (i <= n) {
        s += x ** i;
        i++;
    }
    document.getElementById("hienKetQua").style.display = "block"
    document.getElementById("xuatKetQua").innerHTML= ` Kết quả của bài toán là: ${s}`
}