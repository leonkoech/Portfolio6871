import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-parent',
  templateUrl: './card-parent.component.html',
  styleUrls: ['./card-parent.component.scss']
})
export class CardParentComponent implements OnInit {
  public portfolio: any[] = ["35","56", "60"]
  constructor() { }

  ngOnInit(): void 
  {
  }
  

}
