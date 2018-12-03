var venue = {
    slogan: "Book with us. Our tickets are cheap!",
    name: "CareerDevs Venue",
    ticketPrice: 250,
    seatsAvailable: [1, 2, 3, 4, 5, 6],
    seatsBooked: [],
    viewAvailableSeats: function() {
        var selectSeatList = "<form> <select id='selectASeat'>";


        for (var i = 0; i < venue.seatsAvailable.length; i++) {
            selectSeatList += "<a value=\'" + venue.seatsAvailable[i] + "\'>" + venue.seatsAvailable[i] + "</a>";
        }

        selectSeatList += "</select> </form>";

        document.getElementById("selectASeat").innerHTML = selectSeatList;

    },
    bookSeat: function() {

    },
    refundSeat: function() {

    },

};

document.getElementById("venueName").innerText = venue.name;
document.getElementById("slogan").innerText = "Where you'll find the best tickets!";
var seatsList = "<ul>";

for (var i = 0; i < venue.seatsAvailable.length; i++) {
    seatsList += "<li>" + venue.seatsAvailable[i] + "</li>";
}
seatsList += "</ul>";

document.getElementById("stsAvail").innerHTML = seatsList;
