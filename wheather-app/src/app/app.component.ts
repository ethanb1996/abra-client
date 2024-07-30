import { APP_INITIALIZER, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceDetailComponent } from "./components/place-detail/place-detail.component";
import { MapComponent } from "./components/map/map.component";
import { lastValueFrom } from 'rxjs';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers:[{
    provide: APP_INITIALIZER,
    useFactory: loadConfig,
    deps: [ConfigService],
    multi: true
  }],
  imports: [RouterOutlet, PlaceDetailComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wheather-app';
}

function loadConfig(configService: ConfigService) {
  return () => lastValueFrom(configService.loadConfig());
}
