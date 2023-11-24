
function modifica1() {
    let newH1 = document.querySelector("h1");
    newH1.innerText = "Il titolo è stato modificato";
};


function modifica2() {
    let newColorPage = document.querySelector("body");
    newColorPage.style.backgroundColor = "lightGrey";
};


function modifica3() {
    let newAddress = document.querySelector(".address h6");
    newAddress.innerText = "Via Epicoders, 3";
};



function modifica4() {
    let addClass = document.querySelectorAll(".amz-link a");
    console.log(addClass);
    for (let i = 0; i < addClass.length; i++) {
        addClass[i].classList.add("test");
    }
};


function modifica5() {
    let modifyImg = document.querySelectorAll(".images img");
    console.log(modifyImg);
    for (let i = 0; i < modifyImg.length; i++) {
        modifyImg[i].classList.toggle("test-img");
    }
};


function modifica6() {
    let modifyPrice = document.querySelectorAll(".price td");
    for (let i = 0; i < modifyPrice.length; i++) {
        modifyPrice[1].style.color = "red";
        modifyPrice[2].style.color = "green";
        modifyPrice[3].style.color = "purple";
        modifyPrice[4].style.color = "yellow";
        modifyPrice[5].style.color = "orange";

    }

}


