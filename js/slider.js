sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
  $('#slider > img#1').fadeIn(300);
  startSlider();
});

function startSlider(){
  count = $('#slider > img').size();

  loop = setInterval(function(){
    if(sliderNext > count) {
      sliderNext = 1;
      sliderInt = 1;
    }
    //Change the 300 fadeOut and fadeIn below to change the fading speed
    $('#slider > img').fadeOut(300);
    $('#slider > img#' + sliderNext).fadeIn(300);

    sliderInt = sliderNext;
    sliderNext = sliderNext + 1;
  }, 2500)
  // Change 2500 above to change the slider speed, 1000 = 1 second
};

function prev(){
  var newSlide = sliderInt - 1;
  showSlide(newSlide);
};

function next(){
  var newSlide = sliderInt + 1;
  showSlide(newSlide);
};


function stopLoop(){
  window.clearInterval(loop);
};

function showSlide(id){
  stopLoop();
  if(id > count) {
      id = 1;
    } else if(id < 1) {
      id = count;
    };

    //Change the 300 fadeOut and fadeIn below to change the fading speed
    $('#slider > img').fadeOut(300);
    $('#slider > img#' + id).fadeIn(300);

    sliderInt = id;
    sliderNext = id + 1;
    startSlider();
  }

$('#slider > img').hover(
  function(){
    stopLoop();
  },
  function(){
    startSlider();
  }
);
