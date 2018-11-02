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
        [" For the wonderfully low price of $1200 a night, Tea Time every 2 hours", " Classical Music will be played", " You have the finest silverware", " and Ludwig van Beethoven will come into your room from time to time! "],
        [" For the wonderfully low price of $6000 a night, Freddy Kreuger will visit your dreams", " you'll be rooming with Satan", " The floor is lava", " and it hails brimstone inside at all times! "],
        [" For the wonderfully low price of $100 a night, Literally Everything in your room is made out of gold", " Theres a gold pooping goose", " Rumpelstiltskin is spinning gold in the corner", " and it will periodically rain gold! "],
        [" For the wonderfully low price of $3000 a night, you'll be rooming with Oscar the grouch", " The floor will be covered in bile", " Your bed is a cardboard mat", " and it rains ketchup every now and then... "]
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
            rooms.splice(0,1);
            var classyRoom = readline.question("Congratulations!  You've chosen the 'Classy' Room! The price of the room is $2000 a month, Can you afford this? Y/N: These are your amenities:" + amenities[0] + "Enjoy your stay!");
            console.log("The rooms left available are " + rooms + ". Tell a friend to test their luck at the Chance hotel!");
        }
        else if (whichRoom == 2) {
            // If they choose room 2, then it will tell them the amenities and the remaining vacant rooms.
            occupiedRooms.push(rooms[1]);
            rooms.splice(1,1);
            console.log("Congratulations! You've chosen the 'Nightmare' Room! These are your amenities:" + amenities[1] + "Enjoy your stay!");
            console.log("The rooms left available are " + rooms + ". Tell a friend to test their luck at the Chance hotel!");
        }
        else if (whichRoom == 3) {
            // If they choose room 3, then it will tell them the amenities and the remaining vacant rooms.
            occupiedRooms.push(rooms[2]);
            rooms.splice(2,1);
            console.log("Congratulations! You've chosen the 'Gold' Room! These are your amenities:" + amenities[2] + "Enjoy your stay!");
            console.log("The rooms left available are " + rooms + ". Tell a friend to test their luck at the Chance hotel!");
        }
        else if (whichRoom == 4) {
            // If they choose room 4, then it will tell them the amenities and the remaining vacant rooms.
            occupiedRooms.push(rooms[3]);
            rooms.splice(3,1);
            console.log("Congratulations! You've chosen the 'Trashy' Room! These are your amenities:" + amenities[3] + "Enjoy your stay!");
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
