const hamburger =document.getElementById('hamburger');
const menu =document.getElementById('menu');
const container =document.getElementById('container');

hamburger.addEventListener('click' ,()=>{
     container.classList.toggle('active');
     menu.classList.toggle('active');
     hamburger.classList.toggle('cancel');
     
})


const typedTextSpan =document.querySelector('.job');
const typedTextSpan2 =document.querySelector('.job2');
const typedTextSpan3 =document.querySelector('.job3');
const cursorSpan=document.querySelector('.cursor');
const textArray = ["front-end" , "back-end"];
const typingDelay = 200;
const erasingDelay= 100;
const newTextDelay=1000;
let textArrayIndex=0;
let charIndex=0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
     typedTextSpan2.textContent += textArray[textArrayIndex].charAt(charIndex);
     typedTextSpan3.textContent += textArray[textArrayIndex].charAt(charIndex);
     charIndex++;
     setTimeout(type ,typingDelay);
    }
    else{
         cursorSpan.classList.remove('typing');
     setTimeout(erase , newTextDelay+1800);
    }
}
function erase(){
    if(charIndex>0){
         if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        typedTextSpan2.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        typedTextSpan3.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase ,erasingDelay );
    }
    else{
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type ,typingDelay +1100);
    }
}

window.addEventListener("DOMContentLoaded" , function(){
    setTimeout(type , newTextDelay +1250 );
});