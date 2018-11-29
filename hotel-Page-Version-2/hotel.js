var hotel = {
    name: "Gwallah Gwallah",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbers: ["101", "102", "103", "104", "105", "106", "107"],
    roomNumbersBooked: [],
    roomType: "Queen",
    roomsAvailable: function(roomNumbers, roomNumbersBooked) {
        return this.roomNumbers.length - this.roomNumbersBooked.length;
    },

    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },

    numberOfRooms: function() {
        return this.roomNumber.length + this.roomNumbersBooked.length;
    },

    bookAroom: function(roomNumberReq) {
        if (this.roomsAvailable() > 0) {
            for (let i = 0; i < this.roomNumbers.length; i++) {
                if (this.roomNumbers[i] == roomNumberReq) {
                    this.roomNumbersBooked = this.roomNumbers.splice(i, 1).concat(this.roomNumbersBooked);
                    console.log(this.roomNumbersBooked);
                    return;
                }
                else {
                    console.log("Not a valid Room #");
                }

            }
        }
        else {
            console.log("No rooms Available");
        }
    },

    bookRandomRoom: function(numOfRooms) {
        var randomRoom = this.roomNumbers[Math.floor(Math.random() * this.roomNumbers.length)];
        this.roomNumbersBooked = this.roomNumbers.splice(this.roomNumbers.indexOf(randomRoom), 1).concat(this.roomNumbersBooked);
        console.log(this.roomNumbersBooked);
        return;
    },
};
var roomList = "<ul>";
document.getElementById("hotelName").innerText = hotel.name;



for (var i = 0; i < hotel.roomNumbers.length; i++) {
    roomList += "<li>" + hotel.roomNumbers[i] + "</li>";

}

roomList += "</ul>";

document.getElementById("rmsAvail").innerHTML = roomList;