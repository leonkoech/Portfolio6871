import { Component, Input, OnInit } from '@angular/core';
import { project } from '../../models/projectModel';

@Component({
  selector: 'project-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {
  @Input() project: project  = {name: "",    repoUrl: "",     details: "",    languages: [],    category: "",    demoUrl: "" , team: false , members: []}

  constructor() { }

  ngOnInit(): void {
  }

}
