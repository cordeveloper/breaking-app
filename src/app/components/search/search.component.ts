import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/breaking';
import { BreakingService } from 'src/app/services/breaking.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  constructor(private breakingService:BreakingService) {}
  
  handleTermSearch(term:string) {
    this.breakingService.setTermSearch = term;
  }

}
