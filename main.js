function ThankYou(){
    document.getElementById("h2TY").innerHTML = '🎉🎉Thank You For Your Feedback!🎉🎉';
}

document.getElementById("btnTY").onclick = function(){ThankYou()};

function SignUpSuccess(){
    document.getElementById("h2SU").innerHTML = '🎉🎉Congratulations! You have successfully registered.🎉🎉';
}

document.getElementById("btnSU").onclick = function(){SignUpSuccess()};
document.getElementById("btnSU2").onclick = function(){SignUpSuccess()};
document.getElementById("btnSU3").onclick = function(){SignUpSuccess()};

$('.homeInforDown').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"><</button>',
    nextArrow:'<button type="button" class="slick-prev">></button>',
});