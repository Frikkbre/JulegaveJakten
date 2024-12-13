document.getElementById('task1Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const task1Input = document.getElementById('task1Input').value;
    const task1Result = document.getElementById('task1Result');

    if (task1Input.toLowerCase() === 'mar') { // Replace 'mar' with the actual answer
        task1Result.textContent = 'Correct! The letter is: I';
    } else {
        task1Result.textContent = 'Incorrect answer. Try again.';
    }
});