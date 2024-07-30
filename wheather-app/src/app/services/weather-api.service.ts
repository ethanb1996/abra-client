import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { Place } from '../types/place';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient,
    private configService: ConfigService
  ) { }

  // TODO - perform a modification  in the backend to get the place
  getPlaceById(id:string): Observable<Place> {
    return this.http.get<Place>(`${this.configService.getConfig().backendBaseUrl}/place/:${id}`);
  }

  createZone(place: Place): Observable<Place> {
    return this.http.post<Place>(`${this.configService.getConfig().backendBaseUrl}/place`, { ...place });
  }
}
