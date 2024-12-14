document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('photoForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const selectedPhotos = [];
        const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach((checkbox) => {
            selectedPhotos.push(checkbox.value);
        });

        if (selectedPhotos.length > 0) {
            result.textContent = 'Du valgte: ' + selectedPhotos.join(', ');
            window.location.href = '../webPage/gave2.html';
        } else {
            result.textContent = 'Du har ikke valgt noen bilder.';
        }
    });
});