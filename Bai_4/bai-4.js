// B1: khởi tạo biến divs và lấy giá trị
var divs = document.getElementById("div");


function taoDiv() {
    // B2: tạo vòng lặp để tạo 10 div 
  for (var j = 1; j < 11; j++) {
    // tạo một thẻ <div> và gán cho biến div 
    var div = document.createElement("div");
    // Gán div con vào divs cha
    divs.appendChild(div);
    // Css để các dòng div
    div.style.height = "20px";
    div.style.padding = "20px";
    div.style.lineHeight = "4px";
    div.style.margin = "5px 0";
    div.style.color = "white"
    // Đặt trường hợp cho div là chẵn và div là lẽ
    if ((j % 2) == 0) {
      // Chẵn ==> Màu dỏ
      div.style.background = "red";
      // Tạo text và gán giá trị cho biến p rồi add vào biến div
        var p = document.createTextNode(`Đây là div chẵn thứ ${j}`);
        div.appendChild(p);
    } else {
      // Lẽ ==> Màu xanh 
      div.style.background = "blue";
       // Tạo text và gán giá trị cho biến p rồi add vào biến div
        var p = document.createTextNode(`Đây là div lẽ thứ ${j}`);
        div.appendChild(p);
    }
  }
}
// B3: xuất kết quả ra màng hình 
