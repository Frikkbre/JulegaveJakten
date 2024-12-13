let wrongCounter = 0;

document.getElementById('task2Form').addEventListener('submit', function(event) {
    event.preventDefault();
    const task2Input = document.getElementById('task2Input').value;
    const task2Result = document.getElementById('task2Result');

    if (task2Input === '30.10.2023') {
        task2Result.textContent = 'Riktig! Det andre ordet er: gleder';
    } else {
        wrongCounter += 1;
        if (wrongCounter === 2) {
            task2Result.textContent = 'Hint: Sjekk kamerarullen din rundt halloween';
        } else if (wrongCounter >= 3) {
            task2Result.textContent = 'Hint: Det var 2023';
        } else{
            task2Result.textContent = "Feil! prøv igjen";
        }
    }
});