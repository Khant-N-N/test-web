const lineDiv = document.querySelector(".lineDiv")
const hamburgerTabs = document.querySelector(".hamburgerTabs")
const navBar = document.querySelector(".navBar")
const section1 = document.querySelector(".section1")
const li = document.querySelectorAll(".li")

lineDiv.addEventListener("click", () => {
    if (lineDiv.childNodes[1].classList.contains("l1")) {
        lineDiv.childNodes[1].classList.remove("l1")
        lineDiv.childNodes[5].classList.remove("l3")
        lineDiv.childNodes[3].classList.remove("l2")
        hamburgerTabs.style.top = "-470%"
        
    } else {
        lineDiv.childNodes[1].classList.add("l1")
        lineDiv.childNodes[3].classList.add("l2")
        lineDiv.childNodes[5].classList.add("l3")
        hamburgerTabs.style.top = "9vh"
    }

})

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > section1.offsetHeight) {
        navBar.classList.add("colored")
    } else {
        navBar.classList.remove("colored")
    }

    if (scrollTop > lastScrollTop) {
        navBar.style.top = `-${navBar.offsetHeight}px`
    } else {
        navBar.style.top = "0px"
    }
    lastScrollTop = scrollTop
})