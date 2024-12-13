document.getElementById('solutionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const solutionInput = document.getElementById('solutionInput').value;
    const result = document.getElementById('result');

    if (solutionInput.length === 3) {
        result.textContent = 'Correct length!';
        if (solutionInput === 'cat') {
            result.textContent = 'Correct!';
        }
    } else {
        result.textContent = 'The solution word must be exactly three letters.';
    }
});