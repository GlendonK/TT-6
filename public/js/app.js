console.log('Printing from app.js clientside')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript clientside'

weatherForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    // setting messages
    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            messageOne.textContent = data.error.info
        } 
        else{

            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })

})
})