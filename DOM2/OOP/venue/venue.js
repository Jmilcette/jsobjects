var venue = {
    slogan: "Book with us. Our tickets are cheap!",
    name: "CareerDevs Venue",
    ticketPrice: 250,
    seatsAvailable: [1, 2, 3, 4, 5, 6],
    seatsBooked: [],
    viewAvailableSeats: function() {
       
    },
    bookSeat: function() {

    },
    refundSeat: function() {

    },

};

document.getElementById("venueName").innerText = venue.name;
document.getElementById("slogan").innerText = venue.slogan;
document.getElementById("slogan").innerText = "Where you'll find the best tickets!";
var seatsList = "<ul>";

for (var i = 0; i < venue.seatsAvailable.length; i++) {
    seatsList += "<li>" + venue.seatsAvailable[i] + "</li>";
}
seatsList += "</ul>";

document.getElementById("stsAvail").innerHTML = seatsList;


var selectSeatList = "<form> <select id=''>";


for (var i = 0; i < venue.seatsAvailable.length; i++) {
    selectSeatList += "<option value=\'" + venue.seatsAvailable[i] + "\'>" + venue.seatsAvailable[i] + "</option>";
}

selectSeatList += "</select> </form>";

document.getElementById("selectASeat").innerHTML = selectSeatList;
