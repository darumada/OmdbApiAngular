import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api_key = environment.api_key;
  constructor(private http: HttpClient) {}

  getFilmByTitle(title) {
    return this.http.get(
      `http://www.omdbapi.com/?s=${title}&apikey=${this.api_key}`
    );
  }
  getFilmById(id) {
    return this.http.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${this.api_key}`
    );
  }
}
