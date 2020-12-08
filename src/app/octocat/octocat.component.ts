import {Component, Inject, OnInit} from '@angular/core';

import { Octocat } from '../octocat';
import { OctocatService } from '../octocat.service';

@Component({
  selector: 'app-octocat',
  templateUrl: './octocat.component.html',
  styleUrls: ['./octocat.component.css']
})

export class OctocatComponent implements OnInit {
  octocats: Octocat[] | undefined;

  constructor(private octocatService: OctocatService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getOctocats();
  }

  getOctocats(): void{
    this.octocatService.getOctocats()
    .subscribe(octocats => this.octocats = octocats);
  }
  add(name: string): void{
    name = name.trim();
    if(!name){return;}
    this.octocatService.addOctocat({ name } as Octocat)
      .subscribe(octocat => {
        this.octocats!.push(octocat);
      });
  }
  delete(octocat: Octocat): void{
    this.octocats = this.octocats!.filter(o => o !== octocat);
    this.octocatService.deleteOctocat(octocat).subscribe();
  }
}
