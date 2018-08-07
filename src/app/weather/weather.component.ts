import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";
import { WeatherModel } from "../weather-model";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    weatherData: WeatherModel;
    public weatherTemp = "Howdy doody doo";


  constructor( private weather: WeatherService) { 
      window.setInterval( this.updateWeather, 300000 );

  }

  ngOnInit() {
      var location = {};
      window.navigator.geolocation.getCurrentPosition(loc => location = loc.coords );
      console.log(location);

      this.weather.getWeatherData().subscribe(
              (result: JSON) => { 
                  let d = new WeatherModel;
                  for (var prop in result){
                      d[prop] = result[prop]
                  }
                  
                  console.log('success', result);
                  this.weatherData = d;
                  console.log(this.weatherData);
                  console.log(d);
                },
                (error: any) => { 
                  console.log('error', error);
                });;

  }
  
  updateWeather(){
      
  }
  
  public getTime(dt:string):string{
      var date = new Date();
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  
  public transformTemp(temp:number):number{
      return (temp * 1.8) - 459.67;
  }
  public setWeatherData(){
      this.weatherData = this.weather.getWeather();
      console.log("In weather comp: " + this.weatherData);
      setTimeout(function(){
          
      }, 5000);
}


}
