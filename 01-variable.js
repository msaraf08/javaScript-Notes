const accountNumber = 12408958;
let accountName = "Manish";
var accountPassword = 12345; // semi is not mandatory.
// we should avoid using var.

accountCity = "Delhi";
let accountEmail; // it show undefined as we didn't gave any value.

// accountNumber = 12402883;  // const variable remains same.

accountName = "Manish Saraf";
accountPassword = 4321;
accountCity = "Punjab";

console.log(accountNumber);

console.table([accountName, accountPassword, accountCity, accountEmail]);
