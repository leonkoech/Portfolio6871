import { Component, Input, OnInit } from '@angular/core';
import { project } from '../../models/projectModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() project: project  = {name: "",    repoUrl: "",     details: "",    languages: [],    category: "",    demoUrl: "" , team: false }

  constructor() { }

  ngOnInit(): void {
  }

}
