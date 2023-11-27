document.querySelector(".card-img").onclick = function(){
    document.querySelector(".card-img").classList.add('card-img-hide');
    document.querySelector(".card-panel-area").classList.add('card-panel-show');
    document.querySelector(".back-side").classList.add('back-side-show');
};

document.querySelector("#panelBtnOne").onclick = function(){
    document.querySelector("#panel1").style.display="none";
    document.querySelector("#panel2").style.display="block";
    document.querySelector("#panel3").style.display="none";
    document.querySelector("#panel4").style.display="none";

    document.querySelector(".blnc").innerHTML = "- 6.548,35";
    document.querySelector(".blnc").style.color="#F25959";
    document.querySelector(".doller-sign").style.color="#F25959";
};

document.querySelector("#panelBtnTwo").onclick = function(){
    document.querySelector("#panel1").style.display="none";
    document.querySelector("#panel2").style.display="none";
    document.querySelector("#panel3").style.display="block";
    document.querySelector("#panel4").style.display="none";

    document.querySelector(".blnc").innerHTML = "6.548,35";
    document.querySelector(".blnc").style.color="#fff";
    document.querySelector(".doller-sign").style.color="#fff";
};

document.querySelector("#panelBtnThree").onclick = function(){
    document.querySelector("#panel1").style.display="none";
    document.querySelector("#panel2").style.display="none";
    document.querySelector("#panel3").style.display="none";
    document.querySelector("#panel4").style.display="block";

    document.querySelector(".blnc").innerHTML = "6.548,35";
    document.querySelector(".blnc").style.color="#fff";
    document.querySelector(".doller-sign").style.color="#fff";
};