let flip1 = document.querySelector("#form1");
flip1.addEventListener("submit", (e) => {
    e.preventDefault();
    const text1 = "abc123";
    //const form = document.getElementById('#form1');
    const answer1 = flip1.elements["answer1"];
    const ans1 = answer1.value;
    let card1 = document.querySelector(".flip-card-inner1");

    console.log(ans1);

    if (text1 === ans1) {
        card1.classList.toggle("flipCard");
        console.log("form flipped");
    }
});

let flip2 = document.querySelector("#form2");
flip2.addEventListener("submit", (e) => {
    e.preventDefault();
    const text2 = "abc123";
    //const form2 = document.getElementById('#form2');
    const answer2 = flip2.elements["answer2"];
    const ans2 = answer2.value;
    let card2 = document.querySelector(".flip-card-inner2");
    if (text2 === ans2) {
        card2.classList.toggle("flipCard");
        console.log("form flipped");
    }
});

let flip3 = document.querySelector("#form3");
flip3.addEventListener("submit", (e) => {
    e.preventDefault();
    const text3 = "abc123";
    const answer3 = flip3.elements["answer3"];
    const ans3 = answer3.value;
    let card3 = document.querySelector(".flip-card-inner3");
    if (text3 === ans3) {
        card3.classList.toggle("flipCard");
        console.log("form flipped");
    }
});

let flip4 = document.querySelector("#form4");
flip4.addEventListener("submit", (e) => {
    e.preventDefault();
    const text4 = "abc123";
    const answer4 = flip4.elements["answer4"];
    const ans4 = answer4.value;
    let card4 = document.querySelector(".flip-card-inner4");
    if (text4 === ans4) {
        card4.classList.toggle("flipCard");
        console.log("form flipped");
    }
});
let flip5 = document.querySelector("#form5");
flip5.addEventListener("submit", (e) => {
    e.preventDefault();
    const text5 = "abc123";
    const answer5 = flip5.elements["answer5"];
    const ans5 = answer5.value;
    let card5 = document.querySelector(".flip-card-inner5");
    if (text5 === ans5) {
        card5.classList.toggle("flipCard");
        console.log("form flipped");
    }
});
let flip6 = document.querySelector("#form6");
flip6.addEventListener("submit", (e) => {
    e.preventDefault();
    const text6 = "abc123";
    const answer6 = flip6.elements["answer6"];
    const ans6 = answer6.value;
    let card6 = document.querySelector(".flip-card-inner6");
    if (text6 === ans6) {
        card6.classList.toggle("flipCard");
        console.log("form flipped");
    }
});

let flip7 = document.querySelector("#form7");
flip7.addEventListener("submit", (e) => {
    e.preventDefault();
    const text7 = "abc123";
    const answer7 = flip7.elements["answer7"];
    const ans7 = answer7.value;
    let card7 = document.querySelector(".flip-card-inner7");
    if (text7 === ans7) {
        card7.classList.toggle("flipCard");
        console.log("form flipped");
    }
});

let flip8 = document.querySelector("#form8");
flip8.addEventListener("submit", (e) => {
    e.preventDefault();
    const text8 = "abc123";
    const answer8 = flip8.elements["answer8"];
    const ans8 = answer8.value;
    let card8 = document.querySelector(".flip-card-inner8");
    if (text8 === ans8) {
        card8.classList.toggle("flipCard");
        console.log("form flipped");
    }
});
let flip9 = document.querySelector("#form9");
flip9.addEventListener("submit", (e) => {
    e.preventDefault();
    const text9 = "abc123";
    const answer9 = flip9.elements["answer9"];
    const ans9 = answer9.value;
    let card9 = document.querySelector(".flip-card-inner9");
    if (text9 === ans9) {
        card9.classList.toggle("flipCard");
        console.log("form flipped");
    }
});
