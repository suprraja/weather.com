window.addEventListener('load',()=>{
    let lon ;
    let lat ;
    let temperaturedegree = document.querySelector(".temperature-degree")
    let temperaturdescription = document.querySelector(".temperature-description")
    let location = document.querySelector('.location-timezone')
    let weathericon = document.querySelector(".icon")


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        lon = position.coords.longitude;
        lat= position.coords.latitude;

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a22659fb50ac436d88d1fc1dace3ae4&units=metric`

        
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data=>{
                console.log(data)
                const {temp,}= data.main;
                temperaturedegree.textContent=temp;
                location.textContent=data.name;
                const {main,description}= data.weather[0];
                temperaturdescription.textContent=description;




               

               




                if (data.weather[0].main == 'Clouds'){
                    weathericon.src = "clouds.png";
            
                }else if (data.weather[0].main == "Clear"){
                    weathericon.src = "clear.png";
            
                }else if (data.weather[0].main == "Drizzle"){
                    weathericon.src = "drizzle.png";
            
                }else if (data.weather[0].main == "Humidity"){
                    weathericon.src = "humidity.png";
            
                }else if (data.weather[0].main == "Mist"){
                    weathericon.src = "mist.png";
            
                }else if (data.weather[0].main == "Rain"){
                    weathericon.src = "rain.png";
            
                }else if (data.weather[0].main == "Snow"){
                    weathericon.src="snow.png";
            
                }else if (data.weather[0].main == "Wind"){
                    weathericon.src="wind.png";
            
                }else if (data.weather[0].main == "Haze"){
                    weathericon.src="wind.png";
            
                }
            

                
                
            })

           
            
    })
    
}
});