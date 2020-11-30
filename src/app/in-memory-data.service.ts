import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Octocat } from './octocat';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService  implements InMemoryDbService {
  createDb(){
    const octocats = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { octocats };
  };
  genId(octocats: Octocat[]): number{
    return octocats.length > 0 ? Math.max(...octocats.map(octocat=>octocat.id))+1 : 11;
  }
}
