let canvas = document.querySelector(".canvas");
let context = canvas.getContext('2d');
let b = 0.5;
context.strokeStyle='lime';

context.beginPath();
context.moveTo(450, 800);
context.lineTo(450, 700);

context.stroke();
function daraxt(uzunlik,burchak1,burchak2,k,x,y) {
     
        if (uzunlik > 10) {
            a = setTimeout(()=>{
            let kx = Math.sin(burchak1) * uzunlik;
            let ky = Math.cos(burchak1) * uzunlik;
            daraxt(uzunlik * k, burchak1 + b, burchak1 - b, k, kx + x, y - ky);
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(kx + x, -ky + y);
            context.stroke();
            context.closePath();
            kx = Math.sin(burchak2) * uzunlik;
            ky = Math.cos(burchak2) * uzunlik;
        
            daraxt(uzunlik * k, burchak2 + b, burchak2 - b, k, kx + x, y - ky);
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(kx + x, y - ky);
            context.stroke();
            context.closePath();
        },300)
            }
        
        
    
   

}
 daraxt(100, 0.5,-0.5, 0.8, 450, 700); 