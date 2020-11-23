import { Component, OnInit } from '@angular/core';
import {Octocat} from '../octocat'
import {OCTOCATS} from '../mock-octocat';

@Component({
  selector: 'app-octocat',
  templateUrl: './octocat.component.html',
  styleUrls: ['./octocat.component.css']
})
export class OctocatComponent implements OnInit {

  octocats = OCTOCATS;
  constructor() { }

  ngOnInit(): void {

  }
  onSelect(octocat: Octocat): void {
    this.selectedOctocat = octocat;
  }
}
