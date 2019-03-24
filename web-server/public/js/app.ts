console.log('Client side JS saying hello');

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Hello World';
messageTwo.textContent = 'Loading...';
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/weather?address=${searchElement.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error;
            }
            else {
                console.log(data);
                messageTwo.textContent = `The current temperature in ${data.forecast.location} is ${data.forecast.temperature}°C`;
            }
        });
    });
})