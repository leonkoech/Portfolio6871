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
    MovingTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
