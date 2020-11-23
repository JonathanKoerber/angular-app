import { Component, OnInit, Input } from '@angular/core';
import {Octocat} from '../octocat';
@Component({
  selector: 'app-octocat-detail',
  templateUrl: './octocat-detail.component.html',
  styleUrls: ['./octocat-detail.component.css']
})
export class OctocatDetailComponent implements OnInit {
  @Input() octocat: Octocat;
  constructor() { }

  ngOnInit(): void {
  }

}
