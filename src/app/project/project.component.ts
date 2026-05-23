import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { marked } from 'marked';
import { ViewEncapsulation } from '@angular/core';
import { project } from '../core/models/projectModel';
import { projects } from '../core/modules/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit, OnDestroy {
  id!: string;
  markdownContent: string | Promise<string> = '';
  projectData: project | undefined;
  similarProjects: project[] = [];
  @ViewChild("customCursor", { static: true }) customCursor: ElementRef<any> | undefined;


  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Project pages use the cream "work" palette (movement-2) — better for long-form reading.
    document.body.classList.remove('movement-1', 'movement-3');
    document.body.classList.add('movement-2');

    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.projectData = projects.find((p) => p.id === this.id);
    if (this.projectData) {
      this.similarProjects = projects
        .filter((p) => p.category === this.projectData!.category && p.id !== this.id)
        .slice(0, 4);
    }

    this.http.get(`../../assets/project markdowns/${this.id}.md`, { responseType: 'text' })
      .subscribe({
        next: (data: string) => {
          this.markdownContent = marked(data);
        },
        error: (error) => {
          console.error('Error loading markdown:', error);
        }
      });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    document.body.classList.remove('movement-2');
  }

  openInNewPage(link: string) {
    if (link) window.open(link);
  }

  updateCursorPosition = (event: any) => {
    if (this.customCursor) {
      this.customCursor.nativeElement.style.top = `${event.clientY}px`;
      this.customCursor.nativeElement.style.left = `${event.clientX}px`;
    }
  }
  ngAfterViewInit(): void {
    this.cursorListener();
  }

  cursorListener() {
    if (!this.isMobileTablet()) {
      window.addEventListener('mousemove', (event) => {
        this.updateCursorPosition(event);
      })
    }
  }

  isMobileTablet() {
    return (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
  }
}
