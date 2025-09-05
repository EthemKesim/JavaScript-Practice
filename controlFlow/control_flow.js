let userRole = "admin";
let accessLevel;

if(userRole == "admin"){
    accessLevel = "full access granted";
}else if (userRole == "manager"){
    accessLevel = "limited access granted";
}else {
    accessLevel = "no access";
}

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole == "admin"){
        userMessage = "Welcome, Admin";
    }else{
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system";
}

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;  
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Access level: ", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);