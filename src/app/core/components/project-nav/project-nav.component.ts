import { Component, Input, OnInit } from '@angular/core';
import { categories } from '../../modules/projectCats';
import { projects } from '../../modules/projects';
import { project } from '../../models/projectModel';
import { Router } from '@angular/router';

@Component({
  selector: 'project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.scss']
})
export class ProjectNavComponent implements OnInit {

  @Input() id: string | undefined;

  similarProjects: project[] = []

  constructor(private router: Router) {}

  viewProject(filename: string) {
    this.router.navigate(['/project', filename]).then(() => {
      window.location.reload(); // This will reload the entire page after navigation
    });
  }

  goHome(){
    this.router.navigate(['/']).then(() => {
      window.location.reload(); // This will reload the entire page after navigation
    });
  }

  ngOnInit(): void {
    this.filterProjects();
  }

  findCategory(){
   return projects.filter((project)=>{
      return project.id == this.id
    })[0].category
  }
  filterProjects(){
    var category = this.findCategory()
    this.similarProjects = projects.filter((project)=>{
      return project.category == category && project.id != this.id
    })
  }

}
