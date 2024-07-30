import { Component, ElementRef, ViewChild } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  @ViewChild('mapContainer', {static: false}) gmap!: ElementRef;
  constructor(private mapService: MapService ){}

  ngAfterViewInit(): void {
    const lat = 40.730610;
    const lng = -73.935242;
    this.mapService.initMap(this.gmap)
    // this.mapService.setMarker({latitude:lat,longitude:lng})
  }
}
