import { Component, Input, OnInit } from '@angular/core';
import { project } from '../../models/projectModel';
import { projects } from '../../modules/projects';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() id: string | undefined;
  projectDetails: project | undefined;

  constructor() { }

  ngOnInit(): void {
    this.filterProjects();
  }
  ngOnChanges(): void {
    if (this.id) {
      this.filterProjects();
    }
  }
  filterProjects(){
    if (this.id) {
      this.projectDetails = projects.filter((project) => {
        return project.id == this.id;
      })[0];
    } else {
      console.error('ID is null or undefined');
    }
  }
}
