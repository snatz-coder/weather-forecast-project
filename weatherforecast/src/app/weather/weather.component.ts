import { Component, OnInit } from '@angular/core';

import { WeatherService } from '..//weather.service';
import { WeatherForecast} from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 
forecast : WeatherForecast[]= [];
city = '';
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getForecast().subscribe((data: any)=>{
      this.city = data.city.name;
      for(let i=0; i<data.list.length; i+=8){
        const mapData = new WeatherForecast(
          data.list[i].dt_txt,
          data.list[i].main.temp_max,
          data.list[i].main.temp_min)

          this.forecast.push(mapData)
      }
      console.log(this.forecast)
    });
  }

}
