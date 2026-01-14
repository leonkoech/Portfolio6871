import { Component, OnInit, ElementRef, ViewChild, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { experiences } from '../core/modules/experience';
import { experience } from '../core/models/experienceModel';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  experiences: experience[] = experiences;
  activeIndex: number = 0;
  private scrollToIndex: number | null = null;

  @ViewChild("customCursor", { static: true }) customCursor: ElementRef<any> | undefined;
  @ViewChild("mainContent") mainContent: ElementRef<any> | undefined;
  @ViewChildren("experienceSection") experienceSections!: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['scrollTo'] !== undefined) {
        this.scrollToIndex = parseInt(params['scrollTo'], 10);
      }
    });
  }

  ngAfterViewInit(): void {
    this.cursorListener();
    this.setupScrollSpy();

    // Scroll to experience if coming from home page
    if (this.scrollToIndex !== null) {
      setTimeout(() => {
        this.scrollToExperience(this.scrollToIndex!);
        this.activeIndex = this.scrollToIndex!;
      }, 100);
    }
  }

  scrollToExperience(index: number): void {
    const sections = this.experienceSections.toArray();
    if (sections[index]) {
      sections[index].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setupScrollSpy(): void {
    if (this.mainContent) {
      this.mainContent.nativeElement.addEventListener('scroll', () => {
        const sections = this.experienceSections.toArray();
        const scrollTop = this.mainContent!.nativeElement.scrollTop;
        const offset = 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i].nativeElement;
          if (section.offsetTop - offset <= scrollTop) {
            this.activeIndex = i;
            break;
          }
        }
      });
    }
  }

  updateCursorPosition = (event: any) => {
    if (this.customCursor) {
      this.customCursor.nativeElement.style.top = `${event.clientY}px`;
      this.customCursor.nativeElement.style.left = `${event.clientX}px`;
    }
  }

  cursorListener() {
    if (!this.isMobileTablet()) {
      window.addEventListener('mousemove', (event) => {
        this.updateCursorPosition(event);
      });
    }
  }

  isMobileTablet() {
    return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
  }

  openInNewPage(link: string) {
    window.open(link);
  }
}
