import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {

    const username = route.params['username']
    return this.service.listFromUserPaginated(username, 1);
  }
}
