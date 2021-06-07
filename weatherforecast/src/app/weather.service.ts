import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherForecast } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/forecast?' +
  'q=London,uk&units=metric&APPID=f5f12545e45bb85ad0c71cc2df90c1dd';

  constructor(private http:HttpClient) { }

  getForecast(){
    return this.http.get(this.openWeatherMapUrl).pipe(map((response: WeatherForecast) => response));
  }
}