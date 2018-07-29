import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { DataPathwayService } from './data-pathway.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable( {
    providedIn: 'root',
} )
export class BlogService {
    private blogUrl = 'api/blogs'; 
    
    constructor( private http: HttpClient,
        private dataPathway: DataPathwayService ) { }

    getBlogs(): Observable<Blog[]> {
        this.dataPathway.add( "Fetched blog ddata" );

        return this.http.get<Blog[]>(this.blogUrl)
        .pipe(
                tap(blogs => this.log('fetched blogs')),
                catchError(this.handleError('getHeroes', []))
                );
    }

    getBlog( id: number ): Observable<Blog> {
        this.dataPathway.add( 'Fetched blog with id : ${id}' );

        return new Observable<Blog>();//this.http.get<Blog[]>(this.blogUrl);
    }
    
    private log(message: string) {
        this.dataPathway.add(`HeroService: ${message}`);
      }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
