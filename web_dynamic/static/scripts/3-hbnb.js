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
	}}
        else
        {
            let index = amenities.indexOf(name);
            amenities.splice(index, 1);
            $(".amenities h4").text(amenities.join())
        }
    })
}
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

    $.ajax({
    type: "post",
    url: "http://0.0.0.0:5001/api/v1/places_search/",
    data: JSON.stringify({}),
    contentType: "application/json",
    success: function(data) {

        for (let d of data){
            console.log(d)
            $(".places").append("<article><div class='title_box'><h2>"+
            d.name+"</h2><div class='price_by_night'>"+
            d.price_by_night +"</div></div><div class='information'><div class='max_guest'>" + d.max_guest + "Guest" + (d.max_guest > 1 ? "s": "") +
            "</div><div class='number_rooms'>" + d.number_rooms + "Bedroom" + (d.number_rooms != 1 ? "s": "") +
            "</div><div class='number_bathrooms'>" + d.number_bathrooms + "Bathroom" +
            (d.number_bathrooms != 1 ?"s": "") + "</div></div></article>")
        }
    },
    error: function(err) {
        console.log(err)
    }
    });
});
