import { Component, OnInit } from '@angular/core';
import { Film, StateService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films: Film[];

  constructor(private state: StateService) {}

  ngOnInit() {
    this.films = this.state.getFilms();
    console.log(this.films);
  }
}
