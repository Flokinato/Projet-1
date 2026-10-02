const  buttons = document.querySelectorAll(".button_card")

for (const button of buttons) {
    button.addEventListener("click", () => {
        console.log("click")
        const card = button.closest(".card_projet");
        const imgbig = card.querySelector(".img_projet");
        const imgbutton = button.querySelector(".img_car");
        console.log(imgbig, imgbutton);
        if(imgbig.getAttribute("src") !== imgbutton.getAttribute("src")){
            imgbig.setAttribute("src", imgbutton.getAttribute("src"));
            imgbig.setAttribute("alt", imgbutton.getAttribute("src"));
        };
    });
}

