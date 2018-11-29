var library = {
    name: "Gwallah Gwallah",
    rating: 5.0,
    lateFee: 325.00,
    booksAvailable: ["101", "102", "103", "104", "105", "106", "107"],
    booksBeingRented: [],
    bookGenre: "Science-fiction",
    roomsAvailable: function(booksAvailable, booksBeingRented) {
        return this.booksAvailable.length - this.booksBeingRented.length;
    },

    numberOfRoomsBooked: function() {
        return this.booksBeingRented.length;
    },

    numberOfRooms: function() {
        return this.roomNumber.length + this.booksBeingRented.length;
    },

    bookAroom: function(roomNumberReq) {
        if (this.roomsAvailable() > 0) {
            for (let i = 0; i < this.booksAvailable.length; i++) {
                if (this.booksAvailable[i] == roomNumberReq) {
                    this.booksBeingRented = this.booksAvailable.splice(i, 1).concat(this.booksBeingRented);
                    console.log(this.booksBeingRented);
                    return;
                }
                else {
                    console.log("That book doesn-t exist");
                }

            }
        }
        else {
            console.log("Not Available");
        }
    },

    bookRandomRoom: function(numOfRooms) {
        var randomRoom = this.booksAvailable[Math.floor(Math.random() * this.booksAvailable.length)];
        this.booksBeingRented = this.booksAvailable.splice(this.booksAvailable.indexOf(randomRoom), 1).concat(this.booksBeingRented);
        console.log(this.booksBeingRented);
        return;
    },
};
var bookList = "<ul>";
document.getElementById("libraryName").innerText = library.name;



for (var i = 0; i < library.booksAvailable.length; i++) {
    bookList += "<li>" + library.booksAvailable[i] + "</li>";

}

bookList += "</ul>";

document.getElementById("booksAvail").innerHTML = bookList;