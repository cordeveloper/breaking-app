import { Component, OnInit } from '@angular/core';
import { BreakingService } from './services/breaking.service';
import { Character } from './interfaces/breaking';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  characters:Character[] = [];

  constructor(
    private breakingService:BreakingService
  ) {}

  getCharactersLS() {

    const characterLS = localStorage.getItem("breakingCharacters");
  
    if(characterLS) return JSON.parse(characterLS);
    
    return [];
  }

  setCharactersLS() {
    
    this.breakingService.getCharactersFromAPI().pipe(
      map( response => response.map( character => ({name: character.name, img: character.img, status:character.status}) ) )
    ).subscribe(
      response => {
        localStorage.setItem('breakingCharacters',JSON.stringify(response));
        this.breakingService.setCharacters = response;
      }
    )
  }

  ngOnInit() {
   
    let charactersTemp = this.getCharactersLS();
    if(!charactersTemp.length) {
      this.setCharactersLS();
    } else {
      this.breakingService.setCharacters = charactersTemp;
    }


  }


}
