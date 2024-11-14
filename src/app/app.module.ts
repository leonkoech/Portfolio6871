import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { ExperienceCardComponent } from './core/components/experience-card/experience-card.component';
import { AwardsCardComponent } from './core/components/awards-card/awards-card.component';
import { ProjectsCardComponent } from './core/components/projects-card/projects-card.component';
import { EducationComponent } from './core/components/education/education.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { MovingTextComponent } from './core/components/moving-text/moving-text.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectNavComponent } from './core/components/project-nav/project-nav.component';
import { ProjectDetailsComponent } from './core/components/project-details/project-details.component';
import { SafeUrlPipe } from './safeurlpipe/safeurlpipe.module';
import { PresentationCardComponent } from './core/components/presentation-card/presentation-card.component';

let components=[
  AppComponent,
  ExperienceCardComponent,
  AwardsCardComponent,
  ProjectsCardComponent
]

@NgModule({
  declarations: [
    ...components,
    EducationComponent,
    ContactComponent,
    MovingTextComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    ProjectNavComponent,
    ProjectDetailsComponent,
    SafeUrlPipe,
    PresentationCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
