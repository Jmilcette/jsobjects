var venue = {
    slogan: "Book with us. Our tickets are cheap!",
    name: "CareerDevs Venue",
    ticketPrice: 250,
    seatsAvailable: [1, 2, 3, 4, 5, 6],
    seatsBooked: [],
    viewAvailableSeats: function() {
        console.log(this.seatsAvailable);

    },
    bookSeat: function() {
        var buttonForSeats = "";
        for (var i = 0; i < this.seatsAvailable.length; i++) {
            buttonForSeats += "<button class='dropdown-item' onclick= value=\'" + this.seatsAvailable[i] + "\'>" + this.seatsAvailable[i] + "</button>";
        }
        document.getElementById("seatsDropDown").innerHTML = buttonForSeats;
    },
    refundSeat: function() {

    },

};

document.getElementById("venueName").innerText = venue.name;
document.getElementById("slogan").innerText = "Where you'll find the best tickets!";
/*var seatsList = "<ul>";

for (var i = 0; i < venue.seatsAvailable.length; i++) {
    seatsList += "<li>" + venue.seatsAvailable[i] + "</li>";
}
seatsList += "</ul>";

document.getElementById("stsAvail").innerHTML = seatsList;
*/
