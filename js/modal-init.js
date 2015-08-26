(function(){
  var $content = $('#copyright-options').detach();  

  $('#copyright').on('click', function() {           
    modal.open({content: $content, width:340, height:250});
  });
}());