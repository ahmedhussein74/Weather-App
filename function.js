var inputval = document.querySelector('input')
var btn = document.querySelector('button');
var view = document.querySelector('.weather')

apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val){
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']

        view.style.height = "fit-content"
        view.style.padding = "20px 10px"
        view.innerHTML=`
            <span>City</span><span>${nameval}</span>
            <span>Temperature</span><span>${convertion(tempature)} C</span>
            <span>Sky Conditions</span><span>${descrip}</span>
            <span>Wind Speed</span><span>${wndspd} km/h</span>
        `
        inputval.value = ''
    })

    .catch(err => alert('You entered Wrong city name'), inputval.value='')
})