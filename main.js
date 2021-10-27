var slider = document.getElementById("myRange");
var pageviews = document.getElementById("number-pv");
var total = document.getElementById("dollars");
var kM = document.getElementById("k-m");

var circle = document.getElementById("circle");
var circle2 = document.getElementById("circle2");


slider.oninput = function(){
    currentValue = slider.value;
    if(currentValue === "1"){
        pageviews.innerHTML = "10";
        kM.innerHTML = "K ";
        total.innerHTML = "8.00";
        slider.style.background = "#ECF0FB";
    }
    else if(currentValue === "2"){
        pageviews.innerHTML = "50";
        kM.innerHTML = "K ";
        total.innerHTML = "12.00";
        slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 25%, #ECF0FB 25%)";

    }
    else if(currentValue === "3"){
        pageviews.innerHTML = "100";
        kM.innerHTML = "K ";
        total.innerHTML = "16.00";
        slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 50%, #ECF0FB 50%)";

    }
    else if(currentValue === "4"){
        pageviews.innerHTML = "500";
        kM.innerHTML = "K ";
        total.innerHTML = "24.00";
        slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 75%, #ECF0FB 75%)";
    }
    else {
        pageviews.innerHTML = "1";
        kM.innerHTML = "M ";
        total.innerHTML = "36.00";
        slider.style.background = "#A4F3EB";
    }
}

circle2.addEventListener("click", function(){
    circle.style.backgroundColor = "#CFD8EF";
    circle2.style.backgroundColor = "#FFFFFF";

    currentValue = slider.value;
    if(currentValue === "1"){
        total.innerHTML = "6.00";
    }
    else if(currentValue === "2"){
        total.innerHTML = "9.00";
    }
    else if(currentValue === "3"){
        total.innerHTML = "12.00";
    }
    else if(currentValue === "4"){
        total.innerHTML = "18.00";
    }
    else {
        total.innerHTML = "27.00";
    }
    slider.oninput = function(){
        currentValue = slider.value;
        if(currentValue === "1"){
            pageviews.innerHTML = "10";
            kM.innerHTML = "K ";
            total.innerHTML = "6.00";
        slider.style.background = "#ECF0FB";

        }
        else if(currentValue === "2"){
            pageviews.innerHTML = "50";
            kM.innerHTML = "K ";
            total.innerHTML = "9.00";
            slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 25%, #ECF0FB 25%)";
        }
        else if(currentValue === "3"){
            pageviews.innerHTML = "100";
            kM.innerHTML = "K ";
            total.innerHTML = "12.00";
            slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 50%, #ECF0FB 50%)";

        }
        else if(currentValue === "4"){
            pageviews.innerHTML = "500";
            kM.innerHTML = "K ";
            total.innerHTML = "18.00";
            slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 75%, #ECF0FB 75%)";

        }
        else {
            pageviews.innerHTML = "1";
            kM.innerHTML = "M ";
            total.innerHTML = "27.00";
            slider.style.background = "#A4F3EB";
        }
    }
})

circle.addEventListener("click", function(){
    circle2.style.backgroundColor = "#CFD8EF";
    circle.style.backgroundColor = "#FFFFFF";

    currentValue = slider.value;
    if(currentValue === "1"){
        pageviews.innerHTML = "10";
        kM.innerHTML = "K ";
        total.innerHTML = "8.00";
        slider.style.background = "#ECF0FB";

    }
    else if(currentValue === "2"){
        pageviews.innerHTML = "50";
        kM.innerHTML = "K ";
        total.innerHTML = "12.00";
        slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 25%, #ECF0FB 25%)";

    }
    else if(currentValue === "3"){
        pageviews.innerHTML = "100";
        kM.innerHTML = "K ";
        total.innerHTML = "16.00";
        slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 50%, #ECF0FB 50%)";
    }
    else if(currentValue === "4"){
        pageviews.innerHTML = "500";
        kM.innerHTML = "K ";
        total.innerHTML = "24.00";
        slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 75%, #ECF0FB 75%)";
    }
    else {
        pageviews.innerHTML = "1";
        kM.innerHTML = "M ";
        total.innerHTML = "36.00";
        slider.style.background = "#A4F3EB";


    }
    slider.oninput = function(){
        currentValue = slider.value;
        if(currentValue === "1"){
            pageviews.innerHTML = "10";
            kM.innerHTML = "K ";
            total.innerHTML = "8.00";
            slider.style.background = "#ECF0FB";
        }
        else if(currentValue === "2"){
            pageviews.innerHTML = "50";
            kM.innerHTML = "K ";
            total.innerHTML = "12.00";
            slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 25%, #ECF0FB 25%)";

        }
        else if(currentValue === "3"){
            pageviews.innerHTML = "100";
            kM.innerHTML = "K ";
            total.innerHTML = "16.00";
            slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 50%, #ECF0FB 50%)";
        }
        else if(currentValue === "4"){
            pageviews.innerHTML = "500";
            kM.innerHTML = "K ";
            total.innerHTML = "24.00";
            slider.style.backgroundImage = "linear-gradient(90deg, #A4F3EB 75%, #ECF0FB 75%)";

        }
        else {
            pageviews.innerHTML = "1";
            kM.innerHTML = "M ";
            total.innerHTML = "36.00";
            slider.style.background = "#A4F3EB";

        }
    }
});
