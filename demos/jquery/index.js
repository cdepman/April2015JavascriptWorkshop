$(function(){
  $('#triangle').fadeIn(2000);
  $('#square').slideDown(2000);
  $('#circle').slideDown(2000);
  $('#rounded-rectangle').fadeIn(2000);
  $('.shape').css('display', 'inline-block');

  // Your Code Here!
  $('li').css('color', 'blue');
  $('#triangle').click(function(){
    $(this).fadeOut();
  });
  $('#square').mouseenter(function(){
    $(this).css('background-color', 'pink');
  });
  $('#circle').mouseenter(function(){
    $(this).animate({'height': '+=50px', 'width': '+=50px'});
  })
  $('#circle').mouseleave(function(){
    $(this).animate({'height': '-=50px', 'width': '-=50px'});
  })

  // $('#rounded-rectangle').click(function(){
  //   $(this).css('position', 'fixed');
  //   setInterval(function(){
      var red = Math.round(Math.random() * 255);
      var green = Math.round(Math.random() * 255);
      var blue = Math.round(Math.random() * 255);
      var randomColor = 'rgb(' + red + ','+ green +',' + blue +')';
      'rgb(145,240,133)'
  //     console.log(randomColor);
  //     $('#rounded-rectangle').css('background-color', randomColor);
  //     $('#rounded-rectangle').animate({'left': '+=400px'});
  //     $('#rounded-rectangle').animate({'top': '+=400px'});

  //   }, 100);
  //   setInterval(function(){
  //       $('#rounded-rectangle').animate({'width': '+=100px', 'height': '+=100px'});
  //       $('#rounded-rectangle').animate({'left': '-=350px'});
  //       $('#rounded-rectangle').animate({'top': '-=350px'});
  //   }, 100);
  // })
    // setInterval(function(){
    //   $.ajax({
    //       url: "http://date.jsontest.com",
    //       dataType: 'json',
    //   })
    //   .done (function(data) { $('#time').text($('#time').text() + data.time) ; })
    //   .fail   (function()     { alert("Error")   ; });
    // }, 900);
  //http://date.jsontest.com 


});