$(document).ready(function(){
    // _gaq.push(['_trackEvent', 'button', 'click', 'img down 1546']);
    // loadJsFile('http://i42.icast-ad.com/track?ccd=1242&mcd=01040601&pcd=1546');
    /*
  $('#new_user').live('submit', function(e) {
    $.rails.handleRemote( $(this) );
    e.preventDefault();
  });
  */

  // aa

  //$(".select_custom").customSelect();
  //$(".select_custom2").customSelect({customClass:'customSelect2'});
  // $(".select_custom_1").selectBox();
  // $(".select_custom_2").selectBox();
  $('.select_custom_1').selectric();
  $('.select_custom_2').selectric();

  $("#gift_button").click(function(e){
    e.preventDefault();
    $("#popup_info").bPopup({
      modalColor: '#000'
    });
  });

  $("#popup_info_to_personal").click(function(e){
    e.preventDefault();
    $("#popup_personal").bPopup({
      closeClass: 'b-close-2',
      modalColor: '#000'
    });
  });
  $( "#info_fin" ).submit(function( event ) {
    event.preventDefault();
    alert( "Handler for .submit() called." );
  });  
  
// $( document ).on( "submit", "#info_fin" function(e) {
//     e.preventDefault();
//     $.rails.handleRemote($(this));
//     $("#popup_fin1").bPopup({
//       modalColor: '#000'
//     });
//   }); 
  
  $("#product_button").click(function(e){
    e.preventDefault();
    $("#popup_product").bPopup({
      modalColor: '#000'
    });
  });

  $("#info_input_radio").iCheck({
    checkboxClass: 'icheckbox_minimal',
    radioClass: 'iradio_minimal',
    increaseArea: '20%' // optional
  });

});


$.rails.fire = function(obj, name, data) {
  var event = $.Event(name);

  // Custom code:
  // e.g. "Fire ajax:before for my-form!"
  console.log("Fire " + name + " for " + obj.attr('id') + "!");

  obj.trigger(event, data);
  return event.result !== false;
};
