import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Octocat } from '../octocat';
import { OctocatService } from '../octocat.service';

@Component({
  selector: 'app-octocat-search',
  templateUrl: './octocat-search.component.html',
  styleUrls: ['./octocat-search.component.css']
})
export class OctocatSearchComponent implements OnInit {
  octocats$: Observable<Octocat[]>;
  private searchTerms = new Subject<string>();

  constructor(private octocatService: OctocatService) {  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.octocats$ = this.searchTerms.pipe(
         // wait 300ms after each keystroke before considering the term
         debounceTime(300),

         // ignore new term if same as previous term
         distinctUntilChanged(),

         // switch to new search observable each time the term changes
         switchMap((term: string) => this.octocatService.searchOctocat(term)),
       );
     }
}
