import { Component, Input, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  
  @Input() photos: any = []

  rows: any[] = []

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['photos']) {
      this.rows = this.groupColums(this.photos)
    }
   
  }

  groupColums(photos : Photo[]) {
    const newRows: any[] = []
    
    for(let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3))
    }

    return newRows
  }
}
