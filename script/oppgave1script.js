let wrongCounter = 0;

document.getElementById('task1Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const task1Input = document.getElementById('task1Input').value;
    const task1Result = document.getElementById('task1Result');

    if (task1Input.toLowerCase() === 'mar') {
        task1Result.textContent = 'Riktig! der første ordet er: jeg';
    } else {
        wrongCounter += 1;
        if (wrongCounter === 2) {
            task1Result.textContent = 'Hint: det var 8. Desember 2023';
        } else if (wrongCounter >= 3) {
            task1Result.textContent = 'Hint: Svaret er tre bokstaver langt';

        } else {
            task1Result.textContent = 'Feil! Prøv igjen.';
        }
    }
});