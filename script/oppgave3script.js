let wrongCounter = 0;

document.getElementById('task3Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const task3Input = document.getElementById('task3Input').value;
    const task3Result = document.getElementById('task3Result');

    if (task3Input.toLocaleLowerCase() === 'dp54757') {
        task3Result.textContent = 'Riktig! der tredje ordet er: meg';
    } else {
        wrongCounter += 1;
        if (wrongCounter === 2) {
            task3Result.textContent = 'Hint: Sjekk kamerarullen din';
        } else if (wrongCounter >= 3) {
            task3Result.textContent = 'Hint: Dette burde du vite...';

        } else {
            task3Result.textContent = 'Feil! Prøv igjen.';
        }
    }
});