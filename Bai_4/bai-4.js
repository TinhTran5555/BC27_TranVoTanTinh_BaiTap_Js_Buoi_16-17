// B1: khởi tạo biến divs và lấy giá trị
var divs = document.getElementById("div");


function taoDiv() {
    // B2: tạo vòng lặp để tạo 10 div 
  for (var j = 1; j < 11; j++) {
    var div = document.createElement("div");
    divs.appendChild(div);
    // Css để các dòng div hiện rõ ra 
    div.style.padding = "10px";
    div.style.margin = "5px 0";
    // Đặt trường hợp cho div là chẵn và div là lẽ
    if ((j % 2) == 0) {
        var p = document.createTextNode(`Đây là div chẵn thứ ${j}`);
        div.style.background = "red";
        div.appendChild(p);
    } else {
        var p = document.createTextNode(`Đây là div lẽ thứ ${j}`);
        div.style.background = "blue";
        div.appendChild(p);
    }
  }
}
// B3: xuất kết quả ra màng hình 
