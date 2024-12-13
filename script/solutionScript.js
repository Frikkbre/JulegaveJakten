document.getElementById('solutionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const solutionInput = document.getElementById('solutionInput').value;
    const solutionResult = document.getElementById('solutionResult');

    if (solutionInput.toLocaleLowerCase() === 'jeg gleder meg') {
        solutionResult.textContent = 'Riktig! og det jeg gleder meg til er:';
        setTimeout(() => {
            window.location.href = '../webPage/gave.html';
        }, 3000);

    } else {
        solutionResult.textContent = 'Ikke helt riktig... det skal være tre ord.';
    }
});