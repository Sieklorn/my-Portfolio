// let words = document.querySelectorAll(".word");
// words.forEach((word)=>
// {
//     let letters = word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         word.append(span);
//     });
// });

// let currentWordIndex = 0;
// let maxWordIndex = words.length -1;
// words[currentWordIndex].style.opacity = "1";

// let changeText = ()=>{
//     let currentWord = words[currentWordIndex];
//     let nextWord = currentWordIndex === maxWordIndex ? words[0]:words[currentWordIndex + 1];

//     Array.from(currentWord.children).forEach((letter,i)=>{
//         setTimeout(()=>{
//             letter.className = "letter out";
//         },i*80);
//     });
//     nextWord.style.opacity="1";
//     Array.from(nextWord.children).forEach((letter,i)=>{
//         letter.className = "letter behind";
//         setTimeout(()=>{
//             letter.className = "letter in";
//         },340 + i * 80);
//     });
//     currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
// };

// changeText();
// setInterval(changeText,3000);


// const header = document.querySelector("header");
// window.addEventListener("scroll",function(){
//     header.classList.toggle("sticky",window.scrollY > 50)
// })

// let menuIcon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menuIcon.onclick = ()=>{
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// }

// window.onscroll = () =>{
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.remove("open");
// }

// let menuIcon = document.querySelector("#menu-icon");
// let navlist = document.querySelector(".navlist");

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// }

// window.onscroll = () =>{
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.remove("open");
// }

const links = document.querySelectorAll(".nav-link");
links.forEach(link =>{
    const underline = document.createElement('span');
    link.appendChild(underline);

    link.addEventListener("mouseenter",()=>{
        underline.style.width = "100%";
    });

    link.onmouseleave = ()=>{
        underline.style.width = "0";
    };

});


const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

const menuIcon = document.querySelector("#menu");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("open");
}

window.onscroll = () =>{
    menuIcon.classList.remove("active");
    navlist.classList.remove("open");
}


// Dark Mode and Light Mode----------------------
// const body = document.querySelector("body");
// const toggleIcon = document.querySelector(".fa-sun");

// let getMode = localStorage.getItem("mode");
// if(getMode && getMode === "dark"){
//     body.classList.add("dark");
//     toggleIcon.classList.add("bx-moon-star");
// }
// toggleIcon.addEventListener("click",()=>{
//     body.classList.toggle("dark");
//     if(!body.classList.contains("dark")){
//         return localStorage.setItem("mode", "light");
//     }
//     localStorage.setItem("mode", "dark");
// });

// toggleIcon.addEventListener("click",()=>{
//     toggleIcon.classList.toggle("bx-moon-star");
// })

// const darkMode = document.querySelector("body");
// const sunIcon = document.querySelector(".bx-moon-star");

// let getMode = localStorage.getItem("mode");
// if(getMode && getMode === "dark-theme"){
//     darkMode.classList.add("dark-theme")
//     sunIcon.classList.add("bx-sun");
// }

// sunIcon.addEventListener("click",function(){
//     darkMode.classList.toggle("dark-theme");
//     if(!darkMode.classList.contains("dark-theme")){
//         return localStorage.setItem("mode", "light-theme");
//     }
//     localStorage.setItem("mode", "dark-theme");
// });

// sunIcon.onclick = () =>{
//     sunIcon.classList.toggle("bx-sun");
// }


const darkMode = document.querySelector("body");
const icon = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-theme"){
    darkMode.classList.add("dark-theme");
    icon.classList.add("active");
}
icon.addEventListener("click",function(){
    darkMode.classList.toggle("dark-theme");

    if(!darkMode.classList.contains("dark-theme")){
        return localStorage.setItem("mode", "light-theme");
    }
    localStorage.setItem("mode", "dark-theme");
})
icon.addEventListener("click",function(){
    icon.classList.toggle("active");
})


// const toggle = document.querySelector(".toggle");
// const icon = toggle.querySelector(".bx-sun");
// const body = document.body;

// icon.addEventListener("click",()=>{
//     body.classList.toggle("dark-theme");
//     icon.classList.toggle("bx-moon-star");
//     if(body.classList.contains("dark-theme")){
//         icon.classList.replace("bx-sun", "bx-moon-star");
//     }else{
//         icon.classList.replace("bx-moon-star", "bx-sun");
//     }
// })
// toggle.onclick = () => {
//     body.classList.toggle("dark-theme");

//     if (body.classList.contains("dark-theme")) {
//         icon.classList.replace("bx-sun", "bx-moon-star");
//     } else {
//         icon.classList.replace("bx-moon-star", "bx-sun");
//     }
// }


const portWrapper = document.querySelectorAll(".port-box");
// const portContent = document.querySelectorAll(".port-content");

portWrapper.forEach(wrapper=>{
    const portContent = wrapper.querySelector(".port-content");
    wrapper.addEventListener("mouseenter",function(){
        portContent.style.height = "100%";
    })

    wrapper.onmouseleave = ()=>{
        portContent.style.height = "0";
    }
})




const boxes = document.querySelectorAll(".post-boxs");
const btn = document.querySelector(".showMore");
let isVisible;

btn.addEventListener("click", function(){
    isVisible = !isVisible;

    boxes.forEach(box =>{
        if(isVisible){
            box.classList.add("visible");
        }
        else{
            box.classList.remove("visible");
        }
    })

    btn.textContent = isVisible ? "Show Less" : "Show More";
})
