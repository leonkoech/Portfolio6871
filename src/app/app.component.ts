import { Component, ElementRef, ViewChild } from '@angular/core';
import { projects } from './core/modules/projects';
import { project } from './core/models/projectModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: project[] = projects
  team: boolean = false;
  title = 'portfolio';
  langSelect: any = false;
  languages = ["Any Language","Python","Dart","Javascript","Typescript","Java", "C#", "C++", "Lua"];
  selectedLanguage: string = this.languages[0];

  catSelect: any = false;
  categories = ["Any Category","Full Stack","Front End","Networking","Python Scripting","Compilers", "VR/AR", "fun"];
  selectedCategory: string = this.categories[0];
  //  @ViewChild('side_nav', { static: true }) sideNav:any;
  images = [
    {
      src: 'https://i.pinimg.com/originals/92/58/77/925877480e6796a0a5a270d56221547b.jpg',
    },
    {
      src: 'https://64.media.tumblr.com/717b96959586e42729749adaa03af521/d2acf56ec54ba323-77/s1280x1920/c3f23bfb7c6a0da289fddb5250240cd009268081.pnj',
    },
    {
      src: 'https://64.media.tumblr.com/6b0fefbb37453001e95cc6868fd1ac2c/d2acf56ec54ba323-90/s1280x1920/925b7233983644c6360b020db2a72fc2da658ccb.pnj',
    }
  ]
  currentImage = 0;
  summary = true;
  expanded: boolean = false;
   ngOnInit(): void{
    this.changeImage()
   }
  expandSideNav(){
   this.expanded=!this.expanded
  }
  async changeImage(){
    while(true){
      
        this.currentImage++
      
      if(this.currentImage==3){
        this.currentImage=0
      }
      await new Promise(resolve => setTimeout(resolve, 3000)); 
      
    }
  }
  summarize(param:boolean){
    this.summary = param;
  }

  selectOption(type: number, option: string){
    // if number is 0 then language select
    // if number is 1 then category select
    switch (type){
      case 0:
        this.selectedLanguage  = option;
        break
      case 1:
        this.selectedCategory = option;
        break
      default:
        break
    }
    this.langSelect = false;
    this.catSelect = false;
  }
}
