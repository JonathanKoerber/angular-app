import { Component, OnInit } from '@angular/core';

import { Octocat } from '../octocat';
import { OctocatService } from '../octocat.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-octocat',
  templateUrl: './octocat.component.html',
  styleUrls: ['./octocat.component.css']
})

export class OctocatComponent implements OnInit {
  selectedOctocat: Octocat;
  octocats: Octocat[];

  constructor(private octocatService: OctocatService,
              private messageService: MessageService) { }


  ngOnInit(): void {
  this.getOctocat();
              }
onSelect(octocat: Octocat): void {
  this.selectedOctocat = octocat;
  this.messageService.add('OctocatComponent: Selected octocat id=${octocat.id}');
  }

  getOctocat(): void{
    this.octocatService.getOctocat()
    .subscribe(octocats => this.octocats = octocats);
  }

}
