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

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);