
// Controller
function calculateFactorial() {

    // Get input value from the DOM
    let inputValue = document.getElementById('userInput').value;

    // Convert input value to an integer
    let input = Number.parseInt(inputValue);

    // Validate input
    if (!Number.isInteger(input) || input > 15) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter an integer smaller than 15",
        });
        return;

    } else if (input < 1) {
        
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a positive integer",
        });
        return;
    }

    // Calculate factorial using the logic function
    let result = calculateFactorialValue(input);

    // Display the result to the user
    displayResult(result, input);
}

// Logic
function calculateFactorialValue(input) {

    // Initialize result for factorial calculation
    let factorialResult = 1;

    // Use a loop to calculate the factorial
    for (let i = input; i > 0; i--) {
        factorialResult *= i;
    }

    // Return the calculated factorial result
    return factorialResult;
}

// View
function displayResult(factorialResult, inputValue) {

    // Format the factorial result for better readability
    let formattedResult = factorialResult.toLocaleString();

    // Create HTML string to display the result
    let resultHTML = `<p class="text-muted">${inputValue} factorial is</p>
                      <h1 class="text-primary">${formattedResult}</h1>`;

    // Update the DOM to display the result
    document.getElementById('results').innerHTML = resultHTML;
    document.getElementById('resultsContainer').classList.remove('d-none');
}
