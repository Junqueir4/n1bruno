import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Character } from '../character';

@Injectable({
  providedIn: 'root',
})
export class CharactersResolver implements Resolve<Character[]> {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  resolve(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro ao carregar personagens:', error);
        return of([]); // Retorna um array vazio em caso de erro
      })
    );
  }
}
