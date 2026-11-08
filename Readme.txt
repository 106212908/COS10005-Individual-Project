DineFinder - Restaurant Discovery & Reservation Website

1. How to Access the Website

1. Download the submitted ZIP file.
2. Right-click the ZIP file and select the "Extract All" to unzip the files.
3. Open the extracted project folder
4. Navigate the index.html file and double-click it to open the website in your browser.
5. Use the navigation menu to access different pages like Restaurants, Recommendations, Register, Reservation, and Estimated Bill.

No additional software is required to run the website. Please keep the original folder structure unchange to ensure content is loaded correctly.

2. Website Structure
DineFinder consists of six different pages:

- index.html - The homepage which introduces DineFinder and the services offered.
- restaurants.html - Displays six different restaurants with their respective description, signature dishes, prices, and reservation deposits.
- recommend.html - Recommends different restaurants based on the user's dietary preferences, budget, as well as dining purpose.
- register.html - Contains a registration form with custom JavaScript validation.
- reservation.html - Allows the users to select restaurant, enter their reservation details, and select a payment method.
- bill.html - An Estimated Bill Calculator that calculates the estimated dining costs based on the restaurant's price range and the number of people.

The CSS folder contains style.css, which handles the website design and the responsive layouts. Furthermore, the js folder contains script.js, which handles
the JavaScript functionality and validation. The images folder contains images used inside the website.

3. GitHub Repository Link: https://github.com/106212908/COS10005-Individual-Project.git

4. JavaScript Validation Logic

Registration Form Validation

The registration form checks whether all required fields are completed correctly. The username must contain at least five characters using letters, numbers or underscores.
The email address must follow a valid format, meanwhile the phone number must contain between 8 to 15 digits.

The password must contain at least 10 characters, which includes uppercase, lowercase, numbers, and special characters. The confirmed password must match with the original
password. The gender, dietary preferences, and country must be selected and cannot be empty.

So, if any information is invalid. JavaScript displays an alert which contains the error message and prevents the form from being submitted.

Reservation Form Validation

The reservation forms checks whether the required fields are completed correctly. It includes the customer's full name, email address, phone number, selected restaurant,
reservation date and time, number of people, and the payment method.

The phone number must contain at least 10 digits, the reservation date and time must not be in the past, and the number of people must be greater than 0

When the Voucher option is selected, a voucher code field is present as textbox without additional validation. When the Online Payment option is selected, JavaScript validation
checks the credit card number based on the selected card type, so for Visa and Mastercard requires 16 digits, while Amex requires 15 digits.

So, if any information is invalid. JavaScript displays an alert which contains the error message and prevents the form from being submitted.

Restaurant Recommendations and Estimated Bill Calculator

The recommendation page uses JavaScript condition to display the restaurant that match the user's dietary preferences, budget, and dining purpose.

The Estimated Bill Calculator calculates the minimum adn maximum estimated dining cost by multiplying the restaurant's price per range per person by the number of people. Then,
JavaScript generates a bill card showing the estimated cost, which can be dynamically updated when the selection changes.

5. Known Issues and Limitations

- The registration form does not create or store actual user accounts.
- The Online payment only checks for the credit card number format, and no actual payment is processed.
- The Estimated Bill Calculator provides an approximate price range. The actual dining might differ depending on dishes ordered.
- The system checks restaurant starting prices, not the price of each individual dish. Therefore, some menu options may exceed the selected budget.

6. References
These are the sources used for the images displayed on the website.

bulgogi.jpg

4kodiak (n.d.) *Korean beef bulgogi* [Photograph]. Getty Images. Available at: https://www.cathaypacific.com/cx/en_HK/inspiration/dining/11-must-try-korean-dishes.html (Accessed: 25 October 2026).

pageintro.jpg

Destinology (n.d.) *Hotel Santa Caterina overlooking the Amalfi Coast* [Photograph]. Available at: https://www.destinology.co.uk/blog/top-5-hotels-with-stunning-scenery (Accessed: 25 October 2026).

dimsum.jpg

Marion's Kitchen (n.d.) *Har gow (prawn dumplings)*. Available at: https://www.marionskitchen.com/har-gow-prawn-dumplings/ (Accessed: 25 October 2026).

padthai.jpg

Rainforest Cruises (2021) *10 best Thai food dishes you must eat*. 12 May. Available at: https://www.rainforestcruises.com/guides/best-thai-food (Accessed: 25 October 2026).

roticanai.jpg

TasteAtlas (n.d.) *Roti canai*. Available at: https://www.tasteatlas.com/roti-canai (Accessed: 25 October 2026).

chickenkatsu.jpg

Omura, Y. (2026) *Chicken katsudon*. Sudachi, 31 July. Available at: https://sudachirecipes.com/chicken-katsudon/ (Accessed: 25 October 2026).

margheritapizza.jpg

Danzante Wines (n.d.) *Margherita pizza*. Available at: https://www.danzantewines.com/recipes/margherita-pizza/ (Accessed: 25 October 2026).
