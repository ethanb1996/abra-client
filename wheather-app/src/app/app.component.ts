import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceDetailComponent } from "./components/place-detail/place-detail.component";
import { MapComponent } from "./components/map/map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlaceDetailComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wheather-app';
}
