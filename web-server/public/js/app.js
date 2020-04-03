//CLIENT SIDE JAVACRIPT
console.log("Client side java script file is loaded")

fetch('http://localhost:3000/weather?address=lahore')
    .then((response) => response.json())
    .then((data) => {
        if(data.error){
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.Forecast)
        }    
    })

    const weatherForm = document.querySelector('form')
    const search = document.querySelector('input')
    const messageOne = document.getElementById("message-one") 
    const messageTwo = document.getElementById("message-two")

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const location = search.value
        fetch('http://localhost:3000/weather?address=' + location)
        .then((response) => response.json())
        .then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            } else {
                messageTwo.textContent = data.Forecast
            }    
        })
    })
