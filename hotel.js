function rentRoom() {
    var y = "Y";
    var n = "N";
    var readline = require('readline-sync');
    //This is where they will be told which rooms are available if they want that is...
    var yesOrNo = readline.question("Welcome to the Demacian Hotel. We have 4 rooms avaiable. Would you like to rent one? Y/N:").toUpperCase();
    if (yesOrNo == y){
        return("Thank you for coming");
    };
        //This is the hotel object. This has the list of rooms and amenities
        var demacianHotel = {
            room1: "The Classy Room",
            room2: "The Red Room",
            room3: "The Gold room",
            room4: "The Balcony Room",
            amenities: ["Spa", "Room Service", "Bar"]
        };

};

return rentRoom();
