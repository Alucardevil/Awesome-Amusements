document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rentalForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const desiredRide = document.getElementById('desiredRide').value;
        
        if (name.toLowerCase() === 'ronald') {
            message.textContent = `Hey Ronald! You're getting the ${desiredRide} at 15% off!`;
        } else {
            message.textContent = 'Thank you! A representative will get in touch with you shortly.';
        }
        
        setTimeout(() => {
            form.reset();
            message.textContent = '';
        }, 10000);
    });
});
