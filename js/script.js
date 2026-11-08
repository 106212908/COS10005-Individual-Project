
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

// Javascript logic codes for reservation.html
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

// Updates deposit based on the restaurant selected
function updateDeposit() {

    var restaurant = document.getElementById("restaurant").value;
    var deposit = document.getElementById("deposit");

    if (restaurant == "sakura"){
        deposit.value = 20;
    }
    else if (restaurant == "selera"){
        deposit.value = 10;
    }
    else if (restaurant == "italiano"){
        deposit.value = 30;
    }
    else if (restaurant == "seoul"){
        deposit.value = 25;
    }
    else if (restaurant == "dimsum"){
        deposit.value = 15;
    }
    else if (restaurant == "thai"){
        deposit.value = 20;
    }
    else {
        deposit.value = "";
    }
}

function updatePayment() {

    var method = document.getElementById("paymentMethod").value;

    var voucher = document.getElementById("voucher-section");
    var online = document.getElementById("online-section");

    var voucherCode = document.getElementById("voucherCode");
    var cardType = document.getElementById("cardType");
    var cardNumber = document.getElementById("cardNumber");

    // Hides both payment sections
    voucher.style.display = "none";
    online.style.display = "none";

    // Disables the hidden fields so that they are not submitted
    voucherCode.disabled = true;
    cardType.disabled = true;
    cardNumber.disabled = true;

    if (method == "voucher") {

        // Displays the voucher field
        voucher.style.display = "block";
        voucherCode.disabled = false;
    }
    else if (method == "online") {

        // Displays the online payment fields
        online.style.display = "block";
        cardType.disabled = false;
        cardNumber.disabled = false;
    }
}

function updateBillingEmail() {

    var sameEmail = document.getElementById("sameEmail");
    var email = document.getElementById("reservationEmail");
    var billing = document.getElementById("billingEmail");

    if (sameEmail.checked){
        
        // Lock billing email field
        billing.readOnly = true;
        billing.value = email.value;
    } else {
        // Alows billing email field editable
        billing.readOnly = false;
    }
}

function validateReservation() {

    var fullName = document.getElementById("fullName").value.trim();
    var email = document.getElementById("reservationEmail").value.trim();
    var phone = document.getElementById("reservationPhone").value.trim();
    var restaurant = document.getElementById("restaurant").value;
    var date = document.getElementById("reservationDate").value;
    var time = document.getElementById("reservationTime").value;
    var people = document.getElementById("people").value;
    var payment = document.getElementById("paymentMethod").value;
    var billing = document.getElementById("billingEmail").value.trim();

    var errors = "";

    // Validation 1 - Full Name
    if (fullName == "") {
        errors += "Please enter your full name.\n";
    }

    // Validation 2 - Email Format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors += "Please enter a valid email address.\n";
    }

    // Validation 3 - Phone Number
    if (!/^[0-9]{10,}$/.test(phone)) {
        errors += "Phone number must contain at least 10 digits.\n";
    }

    // Validation 4 - Restaurant Selection
    if (restaurant == "") {
        errors += "Please select a restaurant.\n";
    }

    // Validation 5 - Reservation Date and Time
    if (date == "" || time == "") {
        errors += "Please select a reservation date and time.\n";
    } else {

        var reservationDateTime = new Date(date + "T" + time);
        var currentDateTime = new Date();

        if (isNaN(reservationDateTime.getTime()) || currentDateTime >= reservationDateTime) {
            errors += "Reservation date and time must be in the future.\n";
        }
    }

    // Validation 6 - Number of People
    if (people == "" || !Number.isInteger(Number(people)) || Number(people) <= 0) {
        errors += "Number of people must be a positive whole number.\n";
    }

    // Validation 7 - Payment Method

    if (payment == "") {
        errors += "Please select a payment method.\n";
    }

    // Validation 8 - Online Payment

    if (payment == "online") {
        var cardType = document.getElementById("cardType").value;
        var cardNumber = document.getElementById("cardNumber").value.trim();

        if (cardType == "") {
            errors += "Please select a card type.\n";
        }


        if (cardType == "visa" || cardType == "mastercard") {
            
            if (!/^[0-9]{16}$/.test(cardNumber)) {
                errors += "Visa and Mastercard must contain exactly 16 digits.\n";
            }
        }
        else if (cardType == "amex") {

            if (!/^[0-9]{15}$/.test(cardNumber)) {
                errors += "Amex must contain exactly 15 digits.\n";
            }
        }
    }
    
        // Validation 9 - Billing Email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billing)) {
            errors += "Please enter a valid billing email address.\n";
        }
    

    if (errors !== "") {
        alert(errors);
        return false;
    } else {
        alert("Reservation form submitted successfully!");
        return true;
    }
}

function setupReservationForm() {

    var reservationForm = document.getElementById("reservation-form");

    if (reservationForm == null){
        return;
    }

    var restaurant = document.getElementById("restaurant");
    var payment = document.getElementById("paymentMethod");
    var sameEmail = document.getElementById("sameEmail");
    var email = document.getElementById("reservationEmail");

    // Get URL parameters 
    var params = new URLSearchParams(window.location.search);

    // Get restaurant ID from URL 
    var selectedRestaurant = params.get("restaurant");

    // Selects restaurant from URL
    if (selectedRestaurant != null){
        restaurant.value = selectedRestaurant;

        // Resets if restaurant is invalid
        if (restaurant.selectedIndex == -1){
            restaurant.value = "";
        }
    }
    
    // Set initial restaurant deposit
    updateDeposit();

    // Hides both voucher and credit card payment sections initially
    updatePayment();

    // Update deposit when the restaurant changes
    restaurant.onchange = updateDeposit;

    // Show the selected payment fields
    payment.onchange = updatePayment;

    // Copy billing email when the checkbox changes
    sameEmail.onchange = updateBillingEmail;

    email.oninput = function() {

        if (sameEmail.checked) {
            updateBillingEmail();
        }
    }

    // Validate form before submission
    reservationForm.onsubmit = validateReservation;
}

// Creates a estimated bill Card 
function billCard(name, minPrice, maxPrice, people) {

    var minTotal = minPrice * people;
    var maxTotal = maxPrice * people;

    var card = "<div class='bill-card'>";

    card += "<h3>Estimated Bill Preview</h3>";
    card += "<p><strong>Restaurant:</strong> " + name + "</p>";
    card += "<p><strong>Price Per Person:</strong> RM" + minPrice + " - RM" + maxPrice + "</p>";
    card += "<p><strong>Number of People:</strong> " + people  + "</p>";
    card += "<p><strong>Minimum Estimated Cost:</strong> RM" + minTotal + "</p>";
    card += "<p><strong>Maximum Estimated Cost:</strong> RM" + maxTotal + "</p>";

    card += "<p class='bill-total'>Estimated Total: RM" + minTotal + " - RM" + maxTotal + "</p>";
    card += "</div>";

    return card;
}

// Calculate estimated restaurant bill
function calculateBill() {

    var restaurant = document.getElementById("billRestaurant").value;
    var people = document.getElementById("billPeople").value;

    var name = "";
    var minPrice = 0;
    var maxPrice = 0;

    if (restaurant == "" || people == "") {
        alert("Please select a restaurant and enter the number of people.");
        return;
    }

    if (!Number.isInteger(Number(people)) || Number(people) <= 0) {
        alert("Number of people must be a positive whole number.");
        return;
    }

    // Restaurant Range Prices
    if (restaurant == "sakura") {
        name = "Sakura Kitchen";
        minPrice = 25;
        maxPrice = 50;
    }
    else if (restaurant == "selera") {
        name = "Selera Malaysia";
        minPrice = 15;
        maxPrice = 35;
    }
    else if (restaurant == "italiano") {
        name = "L'Italiano";
        minPrice = 35;
        maxPrice = 70;
    }
    else if (restaurant == "seoul") {
        name = "Seoul Harvest";
        minPrice = 25;
        maxPrice = 50;
    }
    else if (restaurant == "dimsum") {
        name = "Dim Sum Wok";
        minPrice = 20;
        maxPrice = 40;
    }
    else if (restaurant == "thai") {
        name = "The Thai Box";
        minPrice = 20;
        maxPrice = 45;
    }
    else {
        alert("Please select a valid restaurant.");
        return;
    }

    // Display the estimated bill card
    document.getElementById("bill-result").innerHTML = billCard(name, minPrice, maxPrice, Number(people));
}

// Set up Estimate Bill Calculator
function setupBillPage() {

    var button = document.getElementById("calculateBillButton");

    if (button == null){
        return;
    }

    // Calculate when button is pressed
    button.onclick = calculateBill;
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

    // For Reservation Page
    setupReservationForm();

    // Estimate Bill
    setupBillPage();
}

// Runs the init function once the webpage finishes loading
window.onload = init;
