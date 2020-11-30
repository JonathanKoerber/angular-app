import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Octocat } from '../octocat';
import { OctocatService } from '../octocat.service';

@Component({
  selector: 'app-octocat-detail',
  templateUrl: './octocat-detail.component.html',
  styleUrls: ['./octocat-detail.component.css']
})
export class OctocatDetailComponent implements OnInit {
  octocat: Octocat;
  constructor(
    private route: ActivatedRoute,
    private octocatService: OctocatService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getOctocat();
  }
  getOctocat(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.octocatService.getOctocat(id)
      .subscribe(octocat => this.octocat = octocat);
  }
  goBack(): void{
    this.location.back()
  }
  save(): void{
    this.octocatService.updateOctocat(this.octocat)
      .subscribe(()=>this.goBack());
  }
}
