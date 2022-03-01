// Tu codigo JS va acá
let inputCiudad = document.getElementById('ciudad')
let btn = document.querySelector('.btn')


let textoCiudad = document.querySelector('#texto-ciudad')

let temperatura = document.querySelector('#temperatura')

let icono = document.querySelector('#icono')


let pronostico = document.querySelector('#pronostico')

let humedad = document.querySelector('#humedad')

let viento = document.querySelector('#viento')

const api = `a89dac52a766017467944b8f47420333`;





const peticionClima = () => {
    btn.addEventListener('click', () => {
       

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCiudad.value}&units=metric&appid=${api}&lang=sp`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                textoCiudad.innerHTML = data.name
                pronostico.innerHTML = data.weather[0].description
                temperatura.innerHTML = `${data.main.temp}°`

                let imgIcono = data.weather[0].icon
                icono.innerHTML = `<img class="w-50" id="icono" src=http://openweathermap.org/img/w/${imgIcono}.png" alt="imagen del clima ${data.weather[0].description}">
                `
                humedad.innerHTML = `${data.main.humidity}%`
                viento.innerHTML = data.wind.speed

            })
            .catch(err => console.log(err))
        
        
        inputCiudad.value = ""
        
        

    }

    )




}
peticionClima()