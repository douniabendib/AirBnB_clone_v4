$(document).ready(function () {
  const amenities = [];
  const count = 0;
  const elements = $('.special');
  for (elem of elements) {
    const name = $(elem).attr('data-name');
    $(elem).change(function () {
      if (this.checked) {
        amenities.push(name);
        $('.amenities h4').text(amenities.join());
      } else {
        const index = amenities.indexOf(name);
        amenities.splice(index, 1);
        $('.amenities h4').text(amenities.join());
      }
    });
  }
});
