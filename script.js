document.addEventListener("DOMContentLoaded", function() {
    let colorBox = document.getElementById("color-box");
    let changeColorBtn = document.getElementById("change-color-btn");

  changeColorBtn.addEventListener("click", function() {
      colorBox.style.backgroundColor = getRandomColorGen();
    });

//HEX COLOR CODES
// 0-9: decimal values 0-9
// A-F:  decimal values 10-15
    function getRandomColorGen() {
      let letters = "0123456789ABCDEF";//for hexadecimal color codes(digits vary..3 or 6 or 8)
      let color = "#";
      for (let i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)]; //strings are ARRAYS of characters, eg.#CB4528
      }
      return color;
    }
  
    
  });