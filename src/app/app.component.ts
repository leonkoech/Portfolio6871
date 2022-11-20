import { Component, ElementRef, ViewChild } from '@angular/core';
import { projects } from './core/modules/projects';
import { project } from './core/models/projectModel';
import { languages,categories } from './core/modules/projectCats';
import { experiences } from './core/modules/experience';
import { experience } from './core/models/experienceModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: project[] = projects
  experiences: experience[] = experiences
  team: boolean = false;
  title = 'portfolio';
  langSelect: any = false;
  languages = ["Any Language",...Object.values(languages).map((x)=>{return x.name})];
  selectedLanguage: string = this.languages[0];

  catSelect: any = false;
  categories = [...Object.values(categories)];
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
    this.filter()
    this.langSelect = false;
    this.catSelect = false;
  }
  filter(){
    //type 1 being language and 2 being category
    let arrCopy = this.selectedLanguage== "Any Language"?projects:[]
    let newCopy = this.selectedCategory==(categories as any).anyCategory?projects:[]

    if(this.selectedLanguage!= "Any Language"){
    arrCopy =  projects.filter((val)=>{
        return val.languages.includes((languages as any)[this.selectedLanguage]) && val.team == this.team       
      })
    }
    if(this.selectedCategory!=(categories as any).anyCategory){
      newCopy = arrCopy.filter((val)=>{
        return val.category == this.selectedCategory && val.team == this.team
      })
    }
    this.projects = this.selectedLanguage!= "Any Language"?arrCopy:newCopy;
  }

  selectTeam(){
    this.projects =  projects.filter((val)=>{
      return val.team == this.team
    })
    
  }
}
