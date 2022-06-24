import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Character } from 'src/app/interfaces/breaking';
import { BreakingService } from 'src/app/services/breaking.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  items:Observable<Character[]>;
  searchTerm:string = '';

  constructor(private breakingService:BreakingService) {
    this.items = this.breakingService.getCharacters;
    this.breakingService.getTermSearch.subscribe(
      term => {
        this.handleChanges(term);
      }
    )
  }

   handleChanges(term:string) {
    this.items = this.breakingService.getCharacters.pipe(
      map(character => character.filter( (character:Character) => character.name.toLowerCase().includes(term.toLowerCase())))
    );
   }

}
