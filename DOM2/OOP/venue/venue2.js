var venue = {
    slogan: "Book with us. Our tickets are cheap!",
    name: "CareerDevs Venue",
    ticketPrice: 250,
    seatsAvailable: ["1", "2", "3", "4", "5", "6"],
    seatsBooked: [],
    bookSeat: function() {
        if (this.seatsAvailable.length > 0) {

            // Get selected seat from user
            var seatPicked = document.getElementById("seatsDropDown").value;
            document.getElementById("demo").innerHTML = "You picked seat " + seatPicked + ".";

            venue.seatsAvaliable.splice(venue.ticketsAvaliable.indexOf(seatPicked), 1);
            venue.seatsBooked.push(seatPicked);
        }

    },
    viewAvailableSeats: function() {
        var buttonForSeats = "<form> <select id=seatsDropDown>";
        for (var i = 0; i < this.seatsAvailable.length; i++) {
            buttonForSeats += "<option  onclick=\'" + venue.bookSeat() + "\' value=\'" + this.seatsAvailable[i] + "\'>" + this.seatsAvailable[i] + "</option>";
        }
        buttonForSeats += "</select> </form>"
        document.getElementById("seatsDropDown").innerHTML = buttonForSeats;
    },
    refundSeat: function() {

    },

};

document.getElementById("venueName").innerText = venue.name;
document.getElementById("slogan").innerText = "Where you'll find the best tickets!";
