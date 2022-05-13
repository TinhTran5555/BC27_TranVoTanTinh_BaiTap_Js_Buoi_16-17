// B1 Viết hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(n) {
    //    Đặt biến soNguyenTo = 1 là số nguyên tố,
    //    soNguyenTo = 0 không phải số nguyên tố;
    var soNguyenTo = 1;
    // Bỏ qua số bé hơn 2 vì không phải số nguyên tố
    if (n < 2)
        return (soNguyenTo = 0);

    //   Viết vòng lặp kiểm tra có phải số nguyên tố không 
    var i = 3;
    while (i < n) {
        if (n % i == 0) {
            soNguyenTo = 0;
            break;
        }
        i++;
    }
    return soNguyenTo;
}
function timSo() {
    // B2 :Tạo biến n và lấy giá trị từ input
    var n = +document.getElementById("soN").value;
    // Loại trừ các trường hợp n bé hơn 2, là 2 và là 3.
    if (n < 2) {
        alert("Không có số nguyên tố nào tìm dược!")
    } else if (n == 2) {
        alert("Số 2 là số nguyên tố!")
    } else if (n == 3) {
        document.getElementById("hienKetQua").style.display = "block"
        document.getElementById("xuatKetQua").innerHTML = "Những số nguyên tố tìm được là 2 3" } 
  else {
            var i = 0,
                kiemTra = 0,
                ketQua = "";
            while (i < n) {
                kiemTra = kiemTraSoNguyenTo(i);
                if (kiemTra == 1)
                    ketQua += i + " ";
                ++i;
            }
            // B3: Xuất ra màn hình kết quả
            document.getElementById("hienKetQua").style.display = "block"
            document.getElementById("xuatKetQua").innerHTML = "Những số nguyên tố tìm được là: " + ketQua
        }
    }
