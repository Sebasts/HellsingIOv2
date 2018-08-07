import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    
    weatherEndpoint = "http://localhost:8080/api/weather";
    
    private weatherData: {};
    httpOptions = { withCredentials: true };

  constructor(private http:HttpClient) {

     
  }
  
  public getWeatherData():Observable<any>{
     return this.http.get<string>(this.weatherEndpoint, this.httpOptions);
  }
  
  getWeather():any {
      return this.weatherData;
  }

  
}
