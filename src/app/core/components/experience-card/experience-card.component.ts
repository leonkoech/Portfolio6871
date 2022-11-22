import { Component, Input, OnInit } from '@angular/core';
import { experience } from '../../models/experienceModel';
@Component({
  selector: 'experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience = undefined as unknown as experience;
  @Input() index = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
