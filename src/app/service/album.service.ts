import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getPhotoAlbum(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
