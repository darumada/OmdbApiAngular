import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services';
import { Film } from '../../film';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: string;
  films: Film[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}

  onChange() {
    this.api
      .getFilmByTitle(this.search)
      .subscribe((data: { Response?: string; Search?: Film[] }) => {
        if (data.Search) {
          this.films = data.Search.slice(0, 5);
        } else {
          this.films = [];
        }
      });
  }
  clickOnFilm(id) {
    this.router.navigate(['film', id]);
    this.search = '';
    this.films = [];
  }
}
