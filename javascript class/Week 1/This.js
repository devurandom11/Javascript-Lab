// This keyword and it's use in Javascript
// This generally referes to whatever object or function you are in.

// This in global scope

this.table = "window table";
this.garage = {
  table: "garage table",
  cleanTable() {
    console.log("cleaning table...");
  },
};
console.log(this.table);
console.log(this.garage.table);

let johnsRoom = {
  table: "johns table",
  cleanTable() {
    console.log("cleaning ", this.table); // Means this inside the scope of john's room object
  },
};

//console.log(this.johnsRoom.table); // DOES NOT WORK. CANNOT READ PROPERTY

console.log(johnsRoom.table);
