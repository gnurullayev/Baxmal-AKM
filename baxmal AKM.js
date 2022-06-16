let menu = document.getElementsByTagName("i")[0];
// console.log(menu)
let nav = document.getElementsByTagName("ul")[0];
// console.log(nav);
let navLink = nav.querySelectorAll("a");
// console.log(navLinkOne);

// console.log(navLinkSix);

let header = window.document.getElementsByTagName("header");
// console.log(header);
let myInput = document.getElementsByClassName("book-form");
// console.log(myInput);
let message = document.getElementsByName("message-form");
// console.log(message);
let sidebarClose = document.querySelector(".close");
console.log(sidebarClose);

function openMenu() {
  nav.style.left = 0;
}

sidebarClose.addEventListener("click", () => {
  nav.style.left = "-100%";
});

navLink.forEach(item =>{
  item.addEventListener("click", () => {
    item.classList.add("active")
    nav.style.left = "-100%";
    // if(activeNot && activeNot && item){
    //   activeNot.classList.toggle("active")
    // }
    // if(item.classList.contains("active")){
    //   item.style.color = "rgb(241, 199, 12)"
    // }
    // else{ 
    //   item.classList.remove("active")
    // }
  });
})




// navLink.addEventListener('click', founction() {
//     nav.style.left = -100%;
// })

// console.log(nav);
// body = document.querySelector('body');
// console.log(body);
