import { Component } from '@angular/core';
import { PhotosService } from './services/photos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playpongatwork';
  constructor(public photosService: PhotosService) {
  }
}
