$( document ).ready(function() {
  $('.email-spam-hide').text(function(i,t){
    return t.replace("[at]","@");
  }); 
  
  $('#mailchimp-signup').hide();
  
});

var showSignup = function() {
  $('#mailchimp-signup').show();
} 