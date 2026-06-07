const accountId = 1234567
var accountName = "Aryan"
let accountbalance = 1000  // This line declares a variable named accountbalance and assigns it the value 1000. The let keyword allows us to reassign the value of accountbalance later in the code if needed.
let accountPrename = "Sandeep"
let accountsurname;

// accountId = 7654321 // This will throw an error because accountId is a constant and cannot be reassigned.
accountName = "John"
accountbalance = 2000

console.table([accountId, accountName, accountbalance, accountPrename, accountsurname]) // This will print the values of the variables in a table format in the console.