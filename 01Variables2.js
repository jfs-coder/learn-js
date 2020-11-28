const uid = "abc123";

var fullName = "Hitesh Choudhary";
var email = "hitesh@lco.dev";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 2;
var country = "Canada";
var isLoggedInFromGoogle = false;

// the following line requires html page...so not using it here.
// fullName = prompt("Enter your name");

console.log(uid);
console.log("Full Name is: ", fullName);
console.log(email);

// "better" way of doing it.
console.log(`
	Unique ID: ${uid}
	User: ${fullName}
	Country: ${country}
	Course Count: ${courseCount}
	Email: ${email}
	User Password: ${password}
	Logged In?: ${isLoggedInFromGoogle}
`);

