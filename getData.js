document.querySelector('#registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) 
        });

        const result = await response.json();  

        if (result.success) {
            alert(result.message);  
        } else {
            alert(result.message);  
        }
    } catch (err) {
        alert('An error occurred while saving the data');  
    }
});
