let canvas = document.querySelector(".canvas");
let button = document.querySelector(".button");
let input = document.querySelector('.input');
let ctx = canvas.getContext('2d');
window.onload = () => {
        ctx.fillStyle = "red";
        ctx.fillRect(300, 0, 1, 500);
        ctx.fillRect(0, 250, 600, 1);
}
  
button.addEventListener('click', () => {
    ctx.clearRect(0, 0, 600, 500);
    ctx.fillStyle = "red";
    ctx.fillRect(300, 0, 1, 500);
    ctx.fillRect(0, 250, 600, 1);
    let value = input.value;
  let lastx = 0;
  let lastvalue = value.replaceAll("x", 0);
  let lasty = -eval(lastvalue) + 250;
    for (let i = -300; i < 300; i++){
        let x = i + 300;
        let value2 = value.replaceAll("x", i);
        
        if (!value2) {
            continue;
        }
        let y = -eval(value2) + 250;
        ctx.beginPath();
        console.log(x, y);
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(x, y);
        ctx.strokeStyle='red';
        
        ctx.stroke();
        ctx.closePath();
        lastx = i +300;
        lastvalue = value.replaceAll("x", i);
        lasty = -eval(lastvalue) + 250;
    }
})



