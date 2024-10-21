// A Multiplication function that returns the product of two numbers.
// Expect Multiplication (2,3) to be a number.
// Expect Multiplication (2,3) to be equal to 6
// Expect Multiplication ("a",3) to be an error.

// A function called concatOdds that takes two arrays of intergers as arguments.
// Return single array that only contains the odd numbers in ascending order for both arrays.
// Expect concatOdds (2,3) to be a number.
// Test: Basic Functionality
// Expect concatOdds([1, 2, 3], [5, 6, 7]) to be [1, 3, 5, 7]

// // Test: Including Negative Odd Numbers
// Expect concatOdds([-3, 2, 1], [-1, 4, 15]) to be [-3, -1, 1, 15]

// // Test: No Odd Numbers
// Expect concatOdds([2, 4, 6], [8, 10, 12]) to be []

// // Test: Handling Duplicates
// Expect concatOdds([1, 3, 3], [3, 7, 9]) to be [1, 3, 7, 9]

// // Test: Empty Arrays
// Expect concatOdds([], [1, 3, 5]) to be [1, 3, 5]
// Expect concatOdds([], []) to be []

// // Test: Single Odd Element
// Expect concatOdds([3], [1]) to be [1, 3]

// // Test: Unexpected Input Types
// Expect concatOdds("a", [1, 3]) to be an error
// Expect concatOdds([1, "b", 3], [5]) to be an error

//      Scenario: A user chooses to check out without an account.
// 	•	Expect the system to ask, “Would you like to create an account or log in?” with options to proceed as a guest, create an account, or log in.
// 	•	Expect the user to be able to proceed with checkout as a guest if they choose to do so.
// Test: Checking Out as a Guest
// Expect checkoutAsGuest() to prompt "Would you like to create an account or log in?"
// Expect checkoutAsGuest().proceedWithoutAccount() to allow guest checkout

//     Scenario: A user chooses to check out without an account.
// 	•	Expect the system to ask, “Would you like to create an account or log in?” with options to proceed as a guest, create an account, or log in.
// 	•	Expect the user to be able to proceed with checkout as a guest if they choose to do so.
// Test: Checking Out as a Logged-In User
// Expect checkoutAsLoggedInUser() to use saved user information
// Expect checkoutAsLoggedInUser() to proceed to payment information step

//     Scenario: A user tries to proceed to checkout with an empty cart.
// 	•	Expect the system to display a message: “Your cart is empty. Add items before checking out.”
// 	•	Expect the user to be redirected back to the shopping page or given an option to browse products.

// Test: Empty Cart Scenario
// Expect checkoutWithEmptyCart() to display "Your cart is empty. Add items before checking out."
// Expect checkoutWithEmptyCart() to redirect user to the shopping page


//     Scenario: A user checks out as a guest but chooses to create an account during the process.
// 	•	Expect the system to prompt the user for email, password, and other necessary information.
// 	•	Expect the system to save the information and allow the user to continue the checkout process using their new account.

// Test: Account Creation During Checkout
// Expect guestCheckout().createAccount() to prompt for email and password
// Expect guestCheckout().createAccount().continue() to proceed with the newly created account

//     Scenario: A user starts checkout as a guest but opts to log in during the process.
// 	•	Expect the system to show a login screen where the user can enter their credentials.
// 	•	Expect the system to retrieve the user’s saved information (if available) and proceed with the checkout.



//     Scenario: A user reaches the payment information step.
// 	•	Expect the system to show fields for entering payment details such as credit card number, expiration date, and CVV.
// 	•	Expect an option for using a saved payment method if the user is logged in. 

// Test: Prompt for Login During Checkout
// Expect guestCheckout().chooseLogin() to display login screen
// Expect guestCheckout().chooseLogin().login() to use saved information and proceed

//     Scenario: The user enters invalid payment information (e.g., expired credit card).
// 	•	Expect the system to show an error message: “Invalid payment details. Please check and try again.”
// 	•	Expect the user to be able to re-enter payment information.

// Test: Payment Information Entry
// Expect enterPaymentInfo() to display fields for credit card information
// Expect loggedInUser().useSavedPaymentMethod() to show saved payment details


//     Scenario: The user completes the checkout successfully.
// 	•	Expect the system to display a confirmation page with the order number and an estimated delivery date.
// 	•	Expect an email confirmation to be sent to the user (if they provided an email).

// Test: Review Order Before Finalizing Purchase
// Expect reviewOrder() to display order summary with items, quantities, and total cost
// Expect reviewOrder().editCart() to allow changes to the cart
// Expect reviewOrder().confirmPayment() to proceed with the order

// Test: Confirmation After Successful Checkout
// Expect completeCheckout() to display confirmation page with order number and delivery estimate
// Expect completeCheckout().sendConfirmationEmail() to send email to user