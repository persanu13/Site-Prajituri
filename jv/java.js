var navigatie=document.querySelector("#navigatie");
var meniu=document.querySelector("#meniu");
var search=document.querySelector(".autocom-box");





var img1=document.querySelector("#img1");
var img2=document.querySelector("#img2");
var img3=document.querySelector("#img3");
var img4=document.querySelector("#img4");
var img5=document.querySelector("#img5");
var img6=document.querySelector("#img6");
var img7=document.querySelector("#img7");
var img8=document.querySelector("#img8");





y=0;


window.addEventListener('wheel', function(event)
{
 if  (event.deltaY > 0 , y>0 )
 
 {  y=1;console.log(y);
     console.log(event.deltaY);
     navigatie.style.transform="translateY(-200px)";meniu.style.transform="translateY(-200px)"
    
 }
 if(y==0){y=y+1;console.log(y);  } 
   if (event.deltaY <0  )
 {      y=0;console.log(y);
     console.log(event.deltaY);
  navigatie.style.transform="translateY(0px)";meniu.style.transform="translateY(0px)"
 }

});









img1.addEventListener("mouseenter",function()  { img1.src="img/poza1.2.jpg";} )
img1.addEventListener("mouseleave",function()  { img1.src="img/poza 1.jpg";})

img2.addEventListener("mouseenter",function()  { img2.src="img/poza2.2.jpg";} )
img2.addEventListener("mouseleave",function()  { img2.src="img/poza2.jpg";})

img3.addEventListener("mouseenter",function()  { img3.src="img/poza3.2.jpg";} )
img3.addEventListener("mouseleave",function()  { img3.src="img/poza3.jpg";})

img4.addEventListener("mouseenter",function()  { img4.src="img/poza4.2.jpg";} )
img4.addEventListener("mouseleave",function()  { img4.src="img/poza4.jpg";})

img5.addEventListener("mouseenter",function()  { img5.src="img/poza5.2.jpg";} )
img5.addEventListener("mouseleave",function()  { img5.src="img/poza5.jpg";})

img6.addEventListener("mouseenter",function()  { img6.src="img/poza6.2.jpg";} )
img6.addEventListener("mouseleave",function()  { img6.src="img/poza6.jpg";})

img7.addEventListener("mouseenter",function()  { img7.src="img/poza7.2.jpg";} )
img7.addEventListener("mouseleave",function()  { img7.src="img/poza7.jpg";})

img8.addEventListener("mouseenter",function()  { img8.src="img/poza8.2.jpg";} )
img8.addEventListener("mouseleave",function()  { img8.src="img/poza8.jpg";})




search.addEventListener("scroll",function() {y=0 } )
search.addEventListener("mousemove",function() {y=0 } )


