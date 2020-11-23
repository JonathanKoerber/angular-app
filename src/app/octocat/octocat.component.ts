import { Component, OnInit } from '@angular/core';
import {Octocat} from '../octocat';

@Component({
  selector: 'app-octocat',
  templateUrl: './octocat.component.html',
  styleUrls: ['./octocat.component.css']
})
export class OctocatComponent implements OnInit {

  octocat: Octocat = {
    id: 1,
    name: 'GitHub'
  }
  constructor() { }

  ngOnInit(): void {

  }

}
