import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesCache: any[] = [];

  moviesListSubject= new Subject();


  constructor(private http: HttpClient) { }

  apiURL: string = 'https://dummyapi.online/api/movies';

  getMovies() {    
      return this.http.get<any[]>(this.apiURL).pipe(map((response: any)=> response));
   
  }
}
