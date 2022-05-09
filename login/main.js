const elForm = document.querySelector('.form');
const elEmailInput = document.querySelector('.email__input');
const elPasswordInput = document.querySelector('.password__input');

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = elEmailInput.value;
    const password = elPasswordInput.value;

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
                window.localStorage.setItem('token', data.token);
                window.location.href = '../admistration/admistration.html';
            }
        }
        ).catch(err => console.log(err))
});