import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/breaking';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreakingService {

  urlCharacters = `${environment.base_url}characters`;

  private termSearch$ = new BehaviorSubject<string>('');
  private characters$ = new BehaviorSubject<Character[]>([]);


  constructor(private httpClient: HttpClient) { }


  getCharactersFromAPI():Observable<Character[]> {
   return this.httpClient.get<Character[]>(this.urlCharacters);
  }

  get getCharacters():Observable<any> {
    return this.characters$.asObservable();
  }

  set setCharacters(character:Character[]) {
    this.characters$.next(character);
  }

  get getTermSearch():Observable<string> {
    return this.termSearch$.asObservable();
  }

  set setTermSearch(term:string) {
    this.termSearch$.next(term);
  }


}
