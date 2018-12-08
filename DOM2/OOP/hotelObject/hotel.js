var hotel = {
    name: "CareerDevs JavaScript Hotel",
    rating: 5.0,
    numberOfRooms: 5,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
    roomType: "Queen",

    numberOfRoomsAvailable: function() {
        // length of the number of rooms available, returned as an integer (1,5,20, etc)
        return this.roomNumbersAvailable.length;
    },

    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },

    numberOfRooms: function() {
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },

    bookRoom: function() {
        if (this.numberOfRoomsAvailable() > 0) {
            // select a random avaliable room
            var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
            this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            this.roomNumbersBooked.push(randomRoom);
        }
    }
};

document.getElementById("hotelName").innerText = hotel.name;

// Select a user clicked specific room option from a dropdown
function selectRoom() {
    // Get selected room form user dropdown selection
    var roomPicked = document.getElementById("mySelect").value;
    document.getElementById("demo1").innerHTML = "You picked room " + roomPicked + ".";
    // Test 
    console.log(roomPicked);
    console.log(hotel.roomNumbersAvailable.indexOf(roomPicked));
    // Remove selected room from roomNumbersAvailable 
    // Push selected room into roomNumbersBooked
    hotel.roomNumbersAvailable.splice(hotel.roomNumbersAvailable.indexOf(roomPicked), 1);
    hotel.roomNumbersBooked.push(roomPicked);

    // Remove item from dropdown
    var roomPickedRemove = document.getElementById("mySelect");
    roomPickedRemove.remove(roomPickedRemove.selectedIndex);

    hotel.numberOfRoomsBooked();
}

function unSelectRoom() {
    // Get selected room form user dropdown selection
    var roomPicked = document.getElementById("myUnselect").value;
    document.getElementById("demo2").innerHTML = "You picked room " + roomPicked + ".";
    // Test 
    console.log(roomPicked);
    console.log(hotel.roomNumbersBooked.indexOf(roomPicked));
    // Remove selected room from roomNumbersBooked 
    // Push selected room into roomNumbersAvailable
    hotel.roomNumbersBooked.splice(hotel.roomNumbersBooked.indexOf(roomPicked), 1);
    hotel.roomNumbersAvailable.push(roomPicked);

    // Remove item from dropdown
    var roomPickedAdded = document.getElementById("myUnselect");
    roomPickedAdded.remove(roomPickedAdded.selectedIndex);
}
//create the unselect dropdown
var UnSelectrmList = "<form> <select id='myUnSelect'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {

    UnSelectrmList += '<option value="' + hotel.roomNumbersBooked[i] + '">' + hotel.roomNumbersBooked[i] + "</option>";
}
UnSelectrmList += "</select> </form>";
document.getElementById("rmsUnAvail").innerHTML = UnSelectrmList;

// Create the select dropdown
var SelectrmList = "<form> <select id='mySelect'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {

    SelectrmList += '<option value="' + hotel.roomNumbersAvailable[i] + '">' + hotel.roomNumbersAvailable[i] + "</option>";
}
SelectrmList += "</select> </form>";

document.getElementById("rmsAvail").innerHTML = SelectrmList;
