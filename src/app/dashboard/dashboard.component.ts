import { Component, OnInit } from '@angular/core';
import { Octocat } from '../octocat';
import { OctocatService } from '../octocat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  octocats: Octocat[] = [];

  constructor(private octocatService: OctocatService) { }

  ngOnInit(): void {
    this.getOctocats();
  }

  getOctocats(): void{
    this.octocatService.getOctocats()
      .subscribe(octocats => this.octocats = octocats.slice(1, 5));
  }
}
