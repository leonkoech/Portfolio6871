import { Component, Input, OnInit } from '@angular/core';
import { project } from '../../models/projectModel';
import { Router } from '@angular/router';

@Component({
  selector: 'project-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {
  @Input() project: project  = {name: "",    repoUrl: "",     details: "",    languages: [],    category: "",    demoUrl: "" , team: false , members: [], id: "", about: "", thumbnail: ""}
  isHovered = false; 
  // Inject Router in the constructor
  constructor(private router: Router) {}
  // constructor() { }

  ngOnInit(): void {
  }

  viewProject(filename: string) {
    this.router.navigate(['/project', this.project.id]);
  }
}
