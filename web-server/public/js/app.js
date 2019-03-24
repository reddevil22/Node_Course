console.log('Client side JS saying hello');
var weatherForm = document.querySelector('form');
var searchElement = document.querySelector('input');
var messageOne = document.querySelector('#message-1');
var messageTwo = document.querySelector('#message-2');
messageOne.textContent = 'Hello World';
messageTwo.textContent = 'Loading...';
weatherForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fetch("http://localhost:3000/weather?address=" + searchElement.value).then(function (response) {
        response.json().then(function (data) {
            if (data.error) {
                messageTwo.textContent = data.error;
            }
            else {
                console.log(data);
                messageTwo.textContent = "The current temperature in " + data.forecast.location + " is " + data.forecast.temperature + "\u00B0C";
            }
        });
    });
});
