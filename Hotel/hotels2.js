var rooms = [];
rooms[0] = {
    roomNumber: 103,
    name: "Bjorn's Palace",
    price: "$600 a night"
}

rooms[1] = {
    roomNumber: 666,
    name: "The Nightmare Chamber",
    price: "$666 a night"
}

rooms[2] = {
    roomNumber: 100,
    name: "The Gold Suite",
    price: "$100 a night"
}

rooms[3] = {
    roomNumber: 102,
    name: "The Refuse Alcove",
    price: "$1000 a night"

};

var occupiedRooms = [];

function display() {
    var chosenRoom = document.getElementById("chooser").value;
    for (let i = 0; i < rooms.length; i++) {
        if (chosenRoom == rooms[i].name) {
        document.getElementById("displayroom").innerText = "You have chosen " + rooms[i].name + " for your stay.";
        }
    }

}
