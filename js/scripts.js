function Places(location, landmarks, year, notes){
  this.location = location;
  this.landmark = landmark;
  this.year = year;
  this.notes = notes;
}
Places.prototype.fullLocation = function () {
  return this.location + " " + this.landmark + this.year + this.notes;
}

$(document).ready(function() {
  $("form#travel").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmark = $("input#Landmark").val();
    var inputtedYear = $("input#Year").val();
    var inputtedNotes = $("input#Notes").val();

    var allPlaces = new Places (inputtedLocation, inputtedLandmark, inputtedYear, inputtedNotes);

    $("ul#list").append("<li><span class='contact'>" + allPlaces.fullLocation() + "</span></li>");



});


});
