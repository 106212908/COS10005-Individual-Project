
"use strict";

// JavaScript logic codes for recommend.html 

// Creates a restaurant card using six arguments
function restaurantCard(name, cuisine, price, id, maxPrice, maxBudget) {
    
    var card = "<div class='recommendation-card'>";

    // Display the restaurant name and details
    card += "<h3>" + name + "</h3>";
    card += "<p>" + cuisine + " Cuisine - " + price + " per person</p>";

    // Show a warning if some menu option may exceed user's budget
    if (maxPrice > maxBudget){
        card += "<p class='budget-note'><strong>Note:</strong> Some menu options may exceed your selected budget. Please check individual dish prices before ordering.</p>";
    }

    // Reservation link for the selected restaurant
    card += "<a href='reservation.html?restaurant=" + id + "'>Reserve Now</a>";
    
    card += "</div>";

    // Returns the completed HTML restaurant card 
    return card;
}

// Find restaurant based on the user's preferences
function recommendRestaurant () {

    // Get selection from the dropdown menus
    var diet = document.getElementById("diet").value;
    var budget = document.getElementById("budget").value;
    var purpose = document.getElementById("purpose").value;

    // Stores matching restaurant
    var result = "";
    var maxBudget = 0;

    // Validation 1 - Checks whether all the preferences are selected or not
    if (diet == "" || budget == "" || purpose == "") {
        document.getElementById("recommendation-result").textContent = "Please select all your preferences.";
        return;
    }

    // Set the maximum spending budget
    if (budget == "low") {
        maxBudget = 30;
    }
    else if (budget == "medium") {
        maxBudget = 50;
    }
    else {
        // Max budget in this case has no specific upper limit 
        maxBudget = Infinity;
    }

    // Validation 2 - Check condition for each restaurant based on the dietary preferences, budget, and dining purpose

    // Restaurant 1 - Sakura Kitchen (RM 25 - 50) 
    // Date Night / Casual Dining / Family Gathering
    if (diet == "none" &&  maxBudget >= 25) {
        result += restaurantCard("Sakura Kitchen", "Japanese", "RM25 - RM50", "sakura", 50, maxBudget);
    }

    // Restaurant 2 - Selera Malaysia (RM 15 - 35)
    // Casual Dining/ Family Gathering
    if ((diet == "none" || diet == "halal") && maxBudget >= 15 && (purpose == "family" || purpose == "casual")) {
        result += restaurantCard("Selera Malaysia", "Malaysian", "RM15 - RM35", "selera", 35, maxBudget);
    }

    // Restaurant 3 - L'Italiano (RM 35 - 70)
    // Family Gathering/ Date Night
    if ((diet == "none" || diet == "vegetarian") && maxBudget >= 35 && (purpose == "family" || purpose == "date")) {
        result += restaurantCard("L'Italiano", "Italian", "RM35 - RM70", "italiano", 70, maxBudget);
    }

    // Restaurant 4 - Seoul Harvest (RM 25 - 50)
    // Family Gathering/ Date Night
    if ((diet == "none") && maxBudget >= 25 && (purpose == "family" || purpose == "date")) {
        result += restaurantCard("Seoul Harvest", "Korean", "RM25 - RM50", "seoul", 50, maxBudget);
    }

    // Restaurant 5 - Dim Sum Wok (RM20 - 40)
    // Family Gathering / Casual Dining
    if ((diet == "none") && maxBudget >= 20 && (purpose == "family" || purpose == "casual")) {
        result += restaurantCard("Dim Sum Wok", "Chinese", "RM20 - RM40", "dimsum", 40, maxBudget);
    }

    // Restaurant 6 - The Thai Box (RM 20 - 45)
    // Family Gathering / Casual Dining
    if ((diet == "none" || diet == "vegetarian") && maxBudget >= 20 && (purpose == "family" || purpose == "casual")) {
        result += restaurantCard("The Thai Box", "Thai", "RM20 - RM45", "thai", 45, maxBudget);
    }

    // Validation 3 - Check whether any restaurant matched
    if (result == "") {
        result = "<p>No matching restaurants found. Please try changing your preferences.</p>";
    }
    else {
        result = "<h2>Recommended Restaurants</h2>" + result;
    }

    // Displays the matching restaurants
    document.getElementById("recommendation-result").innerHTML = result;
}   

function validateRegistration() {

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmedPassword = document.getElementById("confirmPassword").value;
    var gender = document.getElementById("gender").value;
    var diet = document.getElementById("registerDiet").value;
    var country = document.getElementById("country").value;

    var errors = "";

    // Validation 1 - Username
    if (!/^[A-Za-z0-9_]{5,}$/.test(username)) {
        errors += "Username must contain at least 5 characters using only letters, numbers or underscores.\n";
    }

    // Validation 2 - Email Format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors += "Please enter a valid email address.\n";
    }

    // Validation 3 - Phone Number
    if (!/^[0-9]{8,15}$/.test(phone)){
        errors += "Phone numbers must contain between 8 to 15 digits.\n";
    }

    // Validation 4 - Password
    // At least 10 characters, include uppercase, lowercase, numbers, and special characters
    if (password.length < 10 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)){
        errors += "Password must contain at least 10 characters, including uppercase, lowercase, numbers, and special characters.\n";
    }

    // Validation 5 - Confirm Password
    if (confirmedPassword == "" || password != confirmedPassword) {
        errors += "Confirmed password must match your password.\n";
    }

    // Validation 6 - Gender
    if (gender == ""){
        errors += "Please select your gender.\n";
    }

    // Validation 7 - Dietary Preferences
    if (diet == ""){
        errors += "Please select your dietary preferences.\n";
    }

    if (country == ""){
        errors += "Please select your country.\n";
    }

    // Creates a alert of error messages and false rejects form submission
    if (errors !== ""){
        alert(errors);
        return false;  
    }
    else{
        // Creates a "Registration Successful! alert when the form submission is successful
        alert("Registration Successful!");
        return true;
    }
}

function init () {

    // For Recommendation Page
    var button = document.getElementById("findRestaurant");

    // Runs recommendRestaurant after the button is clicked 
    if (button != null){
        button.onclick = recommendRestaurant;
    }

    // For Registration Page
    var registrationForm = document.getElementById("registration-form");

    // Runs validateRegistration when form is submitted 
    if (registrationForm != null) {
        registrationForm.onsubmit = validateRegistration;
    }
}

// Runs the init function once the webpage finishes loading
window.onload = init;
