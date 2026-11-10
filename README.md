# DineFinder – Restaurant Discovery & Reservation Website

DineFinder is a restaurant discovery and reservation website I developed for my COS10005 Web Development assignment at Swinburne University of Technology.

The idea behind DineFinder is to make it easier for users to explore different restaurants and find somewhere suitable to eat. Users can browse restaurants, get recommendations based on their preferences, fill in registration details and make restaurant reservations.

I also added an Estimated Bill Calculator that allows users to roughly calculate how much they might spend based on the restaurant and number of people.

The website was built using HTML, CSS and JavaScript.

## Features

### Restaurant Listings

The website includes six restaurants with different cuisines:

- **Sakura Kitchen** – Japanese
- **Selera Malaysia** – Malaysian
- **L'Italiano** – Italian
- **Seoul Harvest** – Korean
- **Dim Sum Wok** – Chinese
- **The Thai Box** – Thai

Each restaurant has a short description, signature dishes, prices, reservation deposit and an image.

### Restaurant Recommendations

The recommendation page helps users find restaurants based on three preferences:

- Dietary preference (No Preference, Halal or Vegetarian)
- Budget range
- Dining purpose (Family, Date or Casual)

I used JavaScript `if` statements to check the selected preferences and display matching restaurants. The results are generated as restaurant cards, and users can click **Reserve Now** to go to the reservation page with their chosen restaurant already selected.

### Registration Form

The registration form uses JavaScript to check whether users have entered their information correctly.

The validation includes checking the username length and allowed characters, email format, phone number, password requirements, matching passwords and required dropdown selections.

If any details are incorrect, JavaScript displays an alert showing the errors and prevents the form from being submitted.

### Restaurant Reservation

The reservation page allows users to choose a restaurant, select a date and time, enter the number of people and provide their contact details.

When a restaurant is selected, the deposit amount updates automatically. Users can also choose between Voucher and Online Payment, which displays different fields depending on the selected payment method.

For online payment, JavaScript checks the card number format based on whether the user selects Visa, Mastercard or American Express.

The form also includes a checkbox that copies the user's contact email into the billing email field.

### Estimated Bill Calculator

I added a separate Estimated Bill Calculator as an optional bonus feature.

Users can select a restaurant, enter the number of people and click **Calculate Estimated Bill**.

JavaScript then calculates the minimum and maximum estimated dining costs based on the restaurant's price range per person. The results are displayed in a bill card generated using JavaScript.

Users can change their selections and click Calculate again to get a new estimate.

### Responsive Design

I used CSS media queries to adjust the website layout for desktop, tablet and mobile screens.

## Technologies Used

| Technology | Usage |
|---|---|
| HTML5 | Creating the website pages and forms |
| CSS3 | Styling and responsive design |
| JavaScript | Form validation, restaurant recommendations, reservation features and bill calculations |

All JavaScript code is stored in `js/script.js`.

## Project Structure

```text
assignment2/
├── index.html
├── restaurants.html
├── recommend.html
├── register.html
├── reservation.html
├── bill.html
├── Readme.txt
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── pageintro.jpg
    ├── chickenkatsu.jpg
    ├── roticanai.jpg
    ├── margheritapizza.jpg
    ├── bulgogi.jpg
    ├── dimsum.jpg
    └── padthai.jpg
```

## How to Run the Website

1. Click **Code** on this GitHub repository and select **Download ZIP**.
2. Extract the downloaded ZIP file.
3. Open the extracted project folder.
4. Find `index.html` and double-click it to open the website in your browser.
5. Use the navigation menu to explore the other pages.

The website doesn't require any additional software to run. Just make sure the files remain in their original folders so that the CSS, JavaScript and images can load properly.

An internet connection is needed when submitting forms to the Mercury testing server.

## JavaScript Functions

I separated the JavaScript into different functions to make the code easier to organise and understand.

| Function | What it does |
|---|---|
| `restaurantCard()` | Creates the restaurant recommendation cards |
| `recommendRestaurant()` | Checks user preferences and displays matching restaurants |
| `validateRegistration()` | Checks the registration form |
| `updateDeposit()` | Changes the reservation deposit based on the restaurant |
| `updatePayment()` | Shows the correct payment fields |
| `updateBillingEmail()` | Copies the contact email into the billing email field |
| `validateReservation()` | Checks the reservation form before submission |
| `setupReservationForm()` | Connects the JavaScript functions to the reservation page |
| `billCard()` | Creates the estimated bill card |
| `calculateBill()` | Calculates the estimated dining cost |
| `setupBillPage()` | Connects the Calculate button to the bill calculator |
| `init()` | Runs the setup functions when the webpage loads |

## Limitations

Since this is a front-end university assignment, there are a few limitations:

- The website doesn't use a database to store user information.
- The registration form doesn't create real user accounts.
- The reservation form submits to the Mercury testing server, so no actual restaurant booking is made.
- The online payment section only checks the card number format and doesn't process real payments.
- The Estimated Bill Calculator only gives an estimated price range. The actual cost depends on what users order.

**Note:** Use fictional information when testing the forms. Do not enter real credit card details.

## Image References

The images used in this project were taken from the following sources:

- **Korean Beef Bulgogi:** 4kodiak / Getty Images, via [Cathay Pacific](https://www.cathaypacific.com/cx/en_HK/inspiration/dining/11-must-try-korean-dishes.html)
- **Amalfi Coast Scenery:** [Destinology](https://www.destinology.co.uk/blog/top-5-hotels-with-stunning-scenery)
- **Har Gow Dumplings:** [Marion's Kitchen](https://www.marionskitchen.com/har-gow-prawn-dumplings/)
- **Pad Thai:** [Rainforest Cruises](https://www.rainforestcruises.com/guides/best-thai-food)
- **Roti Canai:** [TasteAtlas](https://www.tasteatlas.com/roti-canai)
- **Chicken Katsudon:** [Sudachi Recipes](https://sudachirecipes.com/chicken-katsudon/)
- **Margherita Pizza:** [Danzante Wines](https://www.danzantewines.com/recipes/margherita-pizza/)

The full image references are also included in `Readme.txt`.

## What I Learnt

Through this project, I gained a better understanding of how HTML, CSS and JavaScript work together to create an interactive website.

One of the main things I learnt was how to use JavaScript conditions and functions to handle user inputs, especially when working on the restaurant recommendation and form validation features.

I also got more practice with responsive layouts and organising JavaScript into separate functions so that the code is easier to read and maintain.