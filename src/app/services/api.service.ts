import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Banda } from '../models/banda';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl:string;
  constructor(private httpClient: HttpClient, private messageService:MessageService) {
      this.baseUrl='http://localhost:3000/api/';
   }
   
/* RECIBIR LAS BANDAS */
   getBandas():Observable<Banda[]>{
       return this.httpClient.get<Banda[]>(this.baseUrl+'all').pipe(
           tap(bandas => this.log('Bandas recuperadas')),
           catchError(this.handleError<Banda[]>('getBandas',[]))
       );
   }

/* DETALLES DE UNA BANDA  TERMINAR*/
   detalleBanda(idBanda:number):Observable<Banda>{
    return this.httpClient.get<Banda>(this.baseUrl+'detalles/'+idBanda).pipe(
        tap(banda => this.log('Detalles banda recuperados')),
        catchError(this.handleError<Banda>('detalleBandas'))
    );
}

/* BUSCAR BANDA */
    searchBanda(banda:string):Observable<Banda[]>{
        return this.httpClient.get<Banda[]>(this.baseUrl+'buscar/'+banda).pipe(
            tap(bandas => this.log(`Bandas buscadas con: ${banda}`)),
            catchError(this.handleError<Banda[]>('searchBanda'))
        );
    }   

/* CREAR BANDA */
   createBanda(banda:Banda):Observable<Banda>{
       return this.httpClient.post<Banda>(this.baseUrl+'crearbanda',banda,httpOptions).pipe(
        tap((banda:Banda) => this.log(`Banda creada con id: ${banda.idbanda}`)),
        catchError(this.handleError<Banda>('createBanda'))
       );
   }

/* EDITAR BANDA TERMINAR */
updateBanda(banda:Banda):Observable<Banda>{
    return this.httpClient.post<Banda>(this.baseUrl+'editar/'+banda.idbanda, banda, httpOptions).pipe(
        tap((banda:Banda)=> this.log(`Banda con id: ${banda.idbanda} editada`)),
        catchError(this.handleError<Banda>('updateBanda'))
    );
}

/* ELIMINAR BANDA */
    deleteBanda(idBanda:number):Observable<Banda>{
        return this.httpClient.delete<Banda>(this.baseUrl+'borrar/'+idBanda).pipe(
            tap(banda=>this.log(`Banda con id ${banda.idbanda} eliminada`)),
            catchError(this.handleError<Banda>('deleteBanda'))
        );
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

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('HeroService: ' + message);
}
}




