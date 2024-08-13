import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { pipe, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FilterPipePipe } from '../pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';

FilterPipePipe

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FilterPipePipe, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  moviesList: any = [];
  filertredList: any = [];
  private destroy = new Subject();
  value: string= '';
  constructor (private moviesService: MoviesService, private route: Router) {

  }

  ngOnInit () {
    this.moviesService.getMovies().pipe(takeUntil(this.destroy)).subscribe((data: any)=> {
      console.log('ddsf', data)
      if(data) {
        this.moviesList = data;
        this.filertredList = data;
        this.moviesService.moviesListSubject.next({data: data})
        
      }

    }), (error: any)=> {
      console.log("Error Occured");
    };
    
  }
 
  dataChanged(event: string) {
    this.filertredList = this.moviesList;
    this.filertredList = this.filertredList.filter((el: any)=> {
      if(el.movie.toLocaleLowerCase().includes(event.toLocaleLowerCase())) {
        return this.filertredList;
      }
    });
  }
  ngOnDestroy(): void {
    this.destroy.next('');
    this.destroy.complete();
  }

}
