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

  filter: string = ''
  photos: Photo[] = [];

  constructor (
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos']
    console.log(this.photos)
  }
}
