import { Injectable } from '@angular/core';
import { Film } from '../';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() {}

  private state = JSON.parse(localStorage.getItem('films')) || [];

  saveState() {
    localStorage.setItem('films', JSON.stringify(this.state));
  }

  isFilmInState(id) {
    for (let i = 0; i < this.state.length; i++) {
      if (this.state[i].imdbID === id) {
        return true;
      }
    }
    return false;
  }

  addFilm(film: Film) {
    this.state.push(film);
    this.saveState();
  }

  removeFilm(film: Film) {
    this.state = this.state.filter(item => {
      return item.imdbID !== film.imdbID;
    });
    this.saveState();
  }

  getFilms() {
    return this.state;
  }
}
