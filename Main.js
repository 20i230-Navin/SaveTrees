var content1=document.getElementById("content1");
var content2=document.getElementById("content2");
var content3=document.getElementById("content3");

var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");

function openContent1()
{
    content1.style.transform="translateX(0%)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(100%)";
    btn1.style.color="#41a148";
    btn2.style.color="black";
    btn3.style.color="black";
    
    content1.style.transitionDelay="0.3s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0s";
}

function openContent2()
{
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(0%)";
    content3.style.transform="translateX(100%)";
    btn1.style.color="black";
    btn2.style.color="#41a148";
    btn3.style.color="black";

    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0.3s";
    content3.style.transitionDelay="0s";


}

function openContent3()
{
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(0%)";

    btn1.style.color="black";
    btn2.style.color="black";
    btn3.style.color="#41a148";

    
    content1.style.transitionDelay="0s";
    content2.style.transitionDelay="0s";
    content3.style.transitionDelay="0.3s";

}

function next()
{
    var right=document.getElementById("next-rotate");
    right.style.transform="rotateY(180deg)";
}
function next1()
{
    var right1=document.getElementById("next-rotate1");
    right1.style.transform="rotateY(180deg)";
}
function next2()
{
    var right2=document.getElementById("next-rotate2");
    right2.style.transform="rotateY(180deg)";
}

function prev()
{
    var right=document.getElementById("next-rotate");
    right.style.transform="rotateY(0deg)";
}
function prev1()
{
    var right1=document.getElementById("next-rotate1");
    right1.style.transform="rotateY(0deg)";
}
function prev2()
{
    var right2=document.getElementById("next-rotate2");
    right2.style.transform="rotateY(0deg)";
}