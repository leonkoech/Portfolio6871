import { Component, Input, OnInit } from '@angular/core';
import { presentation } from '../../models/presentationModel';

@Component({
  selector: 'presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss']
})
export class PresentationCardComponent implements OnInit {
  @Input() presentation: presentation | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
