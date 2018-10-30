function rentRoom() {
    var y = "Y";
    var n = "N";
    var readline = require('readline-sync');

    //This is where they will be told which rooms are available if they want that is...
    var yesOrNo = readline.question("Welcome to the Chance Hotel! We have 4 rooms available. Would you like to rent one? Y/N:").toUpperCase();

    //This is the hotel object. This has the list of rooms and amenities
    var vacantRooms = {
        room1: "The Classy Room",
        room2: "The Nightmare Room",
        room3: "The Gold room",
        room4: "The Trashy Room"
    };
    var occupiedRooms = [];

    var amenities = [
        [" Tea Time every 2 hours", " Classical Music will be played", " You have the finest silverware", " and Ludwig van Beethoven will come into your room from time to time! "],
        [" Freddy Kreuger will visit your dreams", " you'll be rooming with Satan", " The floor is lava", " and it hails brimstone inside at all times! "],
        [" Literally Everything in your room is made out of gold", " Theres a gold pooping goose", " Rumpelstiltskin is spinning gold in the corner", " and it will periodically rain gold! "],
        [" You'll be rooming with Oscar the grouch", " The floor will be covered in bile", " Your bed is a cardboard mat", " and it rains ketchup every now and then... "]
    ];
    //If they say y", then it will list the rooms
    if (yesOrNo == y.toUpperCase()) {

        var rooms = Object.keys(vacantRooms);
        for (var singleRoom of rooms) {
            console.log(singleRoom);
        }
        var whichRoom = readline.question("Above are our available rooms. Where do you want to di-eeerr which room would you like? :) '1,2,3, or 4?'");
        // If they choose room 1, then it will tell them the amenities and the remaining vacant rooms.
        if (whichRoom == 1) {
            occupiedRooms.push(rooms[0]);
            delete rooms[0];
            console.log("Congratulations! You've chosen the 'Classy' Room! These are your amenities:" + amenities[0] + "Enjoy your stay!");
            console.log("The rooms left available are" + rooms + ". Tell a friend to test their luck at the Chance hotel!");
        }
        else if (whichRoom == 2) {
            // If they choose room 2, then it will tell them the amenities and the remaining vacant rooms.
            occupiedRooms.push(rooms[1]);
            delete rooms[1];
            console.log("Congratulations! You've chosen the 'Nightmare' Room! These are your amenities:" + amenities[1] + "Enjoy your stay!")
            console.log("The rooms left available are" + rooms + ". Tell a friend to test their luck at the Chance hotel!");
        }
        else if (whichRoom == 3) {
            // If they choose room 3, then it will tell them the amenities and the remaining vacant rooms.
            occupiedRooms.push(rooms[2]);
            delete rooms[2];
            console.log("Congratulations! You've chosen the 'Gold' Room! These are your amenities:" + amenities[2] + "Enjoy your stay!")
            console.log("The rooms left available are" + rooms + ". Tell a friend to test their luck at the Chance hotel!");
        }
        else if (whichRoom == 4) {
            // If they choose room 4, then it will tell them the amenities and the remaining vacant rooms.
            occupiedRooms.push(rooms[3]);
            delete rooms[3];
            console.log("Congratulations! You've chosen the 'Trashy' Room! These are your amenities:" + amenities[3] + "Enjoy your stay!")
            console.log("The rooms left available are " + rooms + ". Tell a friend to test their luck at the Chance hotel!");
        }
    }
    //If they say "n", then it will say thanks for coming
    else if (yesOrNo == n.toUpperCase()) {
        console.log("Great choice. Find someplace safer to stay... Have a great day!");
        return;
    }
    return;
}

rentRoom();
