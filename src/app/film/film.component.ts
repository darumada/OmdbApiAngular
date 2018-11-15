import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, StateService, Film } from '../shared';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  id: string;
  film: Film;
  inState: boolean;
  error: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private api: ApiService,
    private state: StateService
  ) {
    activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getFilmData();
      this.inState = this.state.isFilmInState(this.id);
    });
  }

  ngOnInit() {}
  getFilmData() {
    this.api.getFilmById(this.id).subscribe((data: Film) => {
      if (data.Response === 'False') {
        this.error = true;
      } else {
        this.error = false;
        this.film = data;
      }
    });
  }
  addToState() {
    this.state.addFilm(this.film);
    this.inState = !this.inState;
  }
  removeFromState() {
    this.state.removeFilm(this.film);
    this.inState = !this.inState;
  }
}
