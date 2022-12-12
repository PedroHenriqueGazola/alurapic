import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";


@Injectable({providedIn: 'root'})
export class PhotoService {
    constructor(private http: HttpClient) { }

    listFromUser(username: string) {
        return this.http.get<Photo[]>(`http://localhost:3000/${username}/photos`)
    }

    listFromUserPaginated(username: string, page: number) {
        const params = new HttpParams().append('page', page)
        return this.http.get<Photo[]>(`http://localhost:3000/${username}/photos`, {params})
    }
}