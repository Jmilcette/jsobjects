var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate:325.00,
    roomNumbers:["101", "102", "103", "104", "105", "106", "107"],
    roomNumbersBooked:[],
    roomType: "Queen",
    roomsAvailable: function(roomNumbers, roomNumbersBooked){
        return this.roomNumbers.length-this.roomNumbersBooked.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        return this.roomNumber.length + this.roomNumbersBooked.length;
    },
    
    bookAroom: function(roomNumberReq) {
        if (this.roomsavailable()>0){
            for (let i=0; i<this.roomNumbers.length; i++){
                if (this.roomNumbers[i]==roomNumberReq){
                    this.roomNumbersBooked = this.roomNumbers.splice(i,1).concat(this.roomNumbersBooked);
                    console.log(this.roomNumbersBooked);
                    return;
                }
                else {
                    console.log("Not a valid Room #");
                }
                        
            }
        }
        else{
            console.log("No rooms Available");
        }
    }
};