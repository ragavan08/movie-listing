import { Component,OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [ ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  private destroy = new Subject();
  movieDetails: any;
  movies: any [] = [];
  constructor(private router: Router, private activeRoute: ActivatedRoute,private moviesService: MoviesService) {

  }
  ngOnInit () {
    let id= this.activeRoute.snapshot.paramMap.get('id');
    console.log(id)
    this.moviesService.getMovies().pipe(takeUntil(this.destroy)).subscribe((data: any)=> {
      
      if(data) {
        
        this.movies = data;
        this.movieDetails = this.movies.find((el: any)=> {
          return el.id == id;
          
        });
        console.log(this.movieDetails)
      }

    }), (error: any)=> {
      console.log("Error Occured");
    };

  }
  ngOnDestroy(): void {
    this.destroy.next('');
    this.destroy.complete();
  }

}
