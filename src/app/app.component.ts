import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos: Photo[] = [];

  constructor (photoService: PhotoService) {
    photoService.listFromUser('flavio').subscribe(photo => {
      this.photos = photo
    })
  }
}