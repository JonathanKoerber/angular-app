import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Octocat} from './octocat';
import { OCTOCATS } from './mock-octocat';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class OctocatService {

constructor(private messageService: MessageService) { }

  getOctocat(): Observable<Octocat[]> {
  // TODO: send the message _after_ fetching the heroes
  this.messageService.add('OctocatService: fetched octocat');
  return of(OCTOCATS);
}

}
