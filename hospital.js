let slide = document.querySelectorAll(".patients-feedback");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connect = document.getElementById("connect");

let count = 0;

slide.forEach(function(slides, index) {
    slides.style.left = `${index * 100}%`
})

function myfun(){
    slide.forEach(function(curVal){
        curVal.style.transform = `translateX(-${count * 100}%)`
    })
}
setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
        myfun()
},2000)

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);
        document.querySelector(".detail").style.display="block"
        document.querySelector(".content").innerHTML= 
        `<img src=${cards.firstElementChild.src} alt="">
        <div class="contentText">
            <h1>Dr. Kiran</h1>
            <p>She is one of the best neurosurgeon with experience of 20 years she has a success rate of more than 95% she is also one of the best mentors for interns she is a gold medolist in her feild.</p>
        </div>`

        closeBtn.addEventListener("click",function(){
            document.querySelector(".detail").style.display="none"
        })
})
})

connectBtn.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Enter Details")
    }else{
        alert("You Logged in")
    }
})