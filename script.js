    let colorBox = document.getElementById("color-box");
    let textBox = document.getElementById("text-box");
    let changeColorBtn = document.getElementById("change-color-btn");

  changeColorBtn.addEventListener("click", function() {
      let newColor = getRandomColorGen();
      colorBox.style.backgroundColor = newColor;
      textBox.textContent = newColor.toUpperCase();
    });


//HEX COLOR CODES
// 0-9 & A-F:  for hexadecimal color codes
    function getRandomColorGen() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)]; //* 16 for all the characters in letters
      }
      return color;
      
    }
  
    
