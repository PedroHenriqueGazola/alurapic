import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
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
  debounce: Subject<string> = new Subject<string>()
  hasMore: boolean = true
  currentPage: number = 1
  username: string = ''
  constructor (
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username']

    this.photos = this.activatedRoute.snapshot.data['photos']

    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter)
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos)
        if(!photos.length) this.hasMore = false
      })
  }
}
