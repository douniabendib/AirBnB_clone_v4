$(document).ready(function (){

    let amenities = []
    let count = 0;
   let elements =  $(".special")
   for (elem of elements) {
    let name = $(elem).attr("data-name");
    $(elem).change(function(){
        if (this.checked)
        {
            amenities.push(name);
            $(".amenities h4").text(amenities.join())
        }
        else
        {
            let index = amenities.indexOf(name);
            amenities.splice(index, 1);
            $(".amenities h4").text(amenities.join())
        }
    })
    $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function(data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    },
    error: function(err) {
      console.error('Error:', err);
    }
  });
});
