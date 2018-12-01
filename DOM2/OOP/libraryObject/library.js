var library = {
    name: "Gwallah Gwallah",
    rating: 5.0,
    lateFee: 325.00,
    booksAvailable: ["101", "102", "103", "104", "105", "106", "107"],
    booksBeingRented: [],
    bookGenre: "Science-fiction",
    booksThatAreAvailable: function(booksAvailable, booksBeingRented) {
        return this.booksAvailable.length - this.booksBeingRented.length;
    },

    rentedBooks: function() {
        return this.booksBeingRented.length;
    },

    numberOfBooks: function() {
        return this.booksAvailable.length + this.booksBeingRented.length;
    },

    bookAroom: function(booksRequested) {
        if (this.booksAvailable() > 0) {
            for (let i = 0; i < this.booksAvailable.length; i++) {
                if (this.booksAvailable[i] == booksRequested) {
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
    selectingABook: function() {
        var selectBookList = "<form> <select id='selectedBook'>";
        for (var i = 0; i < library.booksAvailable.length; i++) {
            selectBookList += "<option value='library.booksAvailable[i]'>library.booksAvailable[i]</option>";
        }

        selectBookList += "</select> </form>";

        document.getElementById("selectABook").innerHTML = selectBookList;
    },

    rentRandomBook: function(numOfBooks) {
        var randomBook = this.booksAvailable[Math.floor(Math.random() * this.booksAvailable.length)];
        this.booksBeingRented = this.booksAvailable.splice(this.booksAvailable.indexOf(randomBook), 1).concat(this.booksBeingRented);
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

var selectBookList = "<form> <select id='selectedBook'>";

//Lets do some more research on escaping characters and quotes!!!
for (var i = 0; i < library.booksAvailable.length; i++) {
    selectBookList += "<option value=\'"+library.booksAvailable[i]+"\'>"+library.booksAvailable[i]+"</option>";
}

selectBookList += "</select> </form>";

document.getElementById("selectABook").innerHTML = selectBookList;
