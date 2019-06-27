import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotosService implements OnInit {
  photos: Observable<any>;
  constructor(public http: HttpClient) {
    this.photos = this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    this.photos = this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
