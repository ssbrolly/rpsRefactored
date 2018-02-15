$(document).ready( function() {
  $(".choice").click( function() {
    var uChoice = this.id
    $("#uChoice").text(uChoice)
  })

  
  

  var options = ['rock', 'paper', 'scissors'];
   var computerChoice = options[Math.floor(Math.random() * options.length)]
  $("#compChoice").text('computer chose:' + computerChoice)
  getResult()
  }


});