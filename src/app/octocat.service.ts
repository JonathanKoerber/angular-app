import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Octocat } from './octocat';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })

export class OctocatService {

private octocatUrl = 'api/octocats'; //url web api

httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

constructor(
  private http: HttpClient,
  private messageService: MessageService) { }


  getOctocats(): Observable<Octocat[]> {
  // TODO: send the message _after_ fetching the heroes
    return this.http.get<Octocat[]>(this.octocatUrl)
        .pipe(
          tap(_ => this.log('fetched octocats')),
          catchError(this.handleError<Octocat[]>('getOctocats', []))
      );
}
  getOctocatNo404<Data>(id: number): Observable<Octocat>{
    const url = '${this.octocatUrl}/?id=${id}';
    return this.http.get<Octocat[]>(url)
    .pipe(
      map(octocats=> octocats[0]),//returns a {1|0} element array
      tap(o=>{
        const outcome=o ? `fetched` : `did not find`;
        this.log(`${outcome} octocat id=${id}`);
      }),
      catchError(this.handleError<Octocat>(`getOctocat id=${id}`))
    );
  }

  getOctocat(id: number): Observable<Octocat>{
    const url = `${this.octocatUrl}/${id}`;
    return this.http.get<Octocat>(url).pipe(
      tap(_=>this.log(`fetched octocat id=${id}`))
    );
  }
  // search
  searchOctocat(term: string): Observable<Octocat[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Octocat[]>(`{this.octocatUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found octocats matching "${term}"`):
        this.log(`no octocats matching "${term}"`)),
      catchError(this.handleError<Octocat[]>('searchOctocat', []))
    );
  }
//save methods
  //post: add new octocat
  addOctocat(octocat: Octocat): Observable<Octocat>{
    return this.http.post<Octocat>(this.octocatUrl, octocat, this.httpOptions).pipe(
      tap((newOctocat: Octocat)=> this.log(`added octocat with id=${newOctocat.id}`)),
      catchError(this.handleError<Octocat>('addOctocat'))
    );
  }
  //Delete
  deleteOctocat(octocat: Octocat | number): Observable<Octocat>{
    const id = typeof octocat === 'number' ? octocat : octocat.id;
    const url = `${this.octocatUrl}/${id}`;

    return this.http.delete<Octocat>(url, this.httpOptions).pipe(
      tap(_=> this.log(`deleted octocat id=${id}`)),
      catchError(this.handleError<Octocat>('deletedOctocat'))
    );
  }
  //update
  updateOctocat(octocat: Octocat): Observable<any>{
    return this.http.put(this.octocatUrl, octocat, this.httpOptions).pipe(
      tap(_=> this.log(`updated octocat id=${octocat.id}`)),
      catchError(this.handleError<any>('updatedOctocat'))
    )
  }
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${ operation } failed: ${ error.message }`);
      return of(result as T);
    };
  }

  private log(message: string){
    this.messageService.add(`OctocatService: ${ message }`);
  }
}
