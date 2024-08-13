import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(movies:any, searchText: string): any[] {
    searchText = searchText.toLocaleLowerCase();
    let searchResult;
    if(searchText) {
       searchResult = movies.filter ((movie: any)=> {
        movie.movie.toLocaleLowerCase().includes(searchText)
      });

    }
    
    return searchResult;
  }

}
