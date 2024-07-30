import { ElementRef, Injectable } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { Point } from '../types/point';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];

  constructor(private configService:ConfigService) { }

  initMap(gmap:ElementRef) {
    const lng = -73.935242;
    const lat = 40.730610;
    this.map = new google.maps.Map(gmap.nativeElement, {
      center: { lat: lat, lng: lng },
      zoom: 15
    });
  }
  
  drawMarkers(points: Point[]){
    points.forEach((graphic:Point) => {
      const marker = new google.maps.Marker(graphic)
      this.markers.push(marker)
    })
  }
  removeGraphics():void{
    this.markers.forEach((marker:google.maps.Marker) => marker.setMap(null))
  }

}