import { Component, Input, OnInit } from '@angular/core';
import { awards } from '../../modules/awards';
import { award } from '../../models/awardModel';

@Component({
  selector: 'awards-card',
  templateUrl: './awards-card.component.html',
  styleUrls: ['./awards-card.component.scss']
})
export class AwardsCardComponent implements OnInit {
  awards:award[] = awards as award[]
  @Input() year = 2020
  constructor() { }

  ngOnInit(): void {
    this.awards = this.award()
  }
  award(){
    return awards.filter((val)=>{
      return val.year == this.year
    })
  }
}
