import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {

  photos: Photo[] = [];

  constructor (
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params['username']
    this.photoService.listFromUser(username).subscribe(photo => {
      this.photos = photo
    })
  }
}