let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext('2d');
let colr = document.querySelector(".black");
let firstx, firsty;
let available = false;
let sizing = document.querySelector(".sizing");
let is = false;
let xs = 0;
let len = 0;
let strokelen = 1;
let color = "black";
document.querySelectorAll(".color").forEach((element) => {
    element.addEventListener('click', () => {
        color = element.getAttribute("class").slice(0, element.getAttribute("class").indexOf(" "));
    })
})

document.onmousedown = (event) => {
    available = true;
    firstx = event.clientX;
    firsty = event.clientY;
}
document.onmouseup = (event) => {
    available = false;
 is = false;
}
document.onmousemove = (event) => {
    if (available) {
        ctx.beginPath();
        let a = canvas.getBoundingClientRect().left;
        ctx.lineWidth = strokelen;
        ctx.strokeStyle=color;
        
        ctx.moveTo(firstx - a, firsty);
        ctx.lineTo(event.clientX -a, event.clientY);
       ctx.stroke();
       
        ctx.closePath();
        firstx = event.clientX;
        firsty = event.clientY;
    }
}

sizing.onmousedown = (event) => {
    is = true;
}

sizing.onmousemove = (event) => {
    len = event.clientX - sizing.getBoundingClientRect().left;
    if (is) {
        if (len >= 20 && len <= 180) {
            xs = len;
        }
          else {
            if (len > 180) {
               xs = 180;
            }
            else if(xs<20){
                xs = 20;
            }
        
        }
        strokelen = Math.round((xs - 19)/10);
        document.querySelector(".round").style.left = (xs-20) + "px";
    }
}