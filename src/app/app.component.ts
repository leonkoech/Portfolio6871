import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { projects } from './core/modules/projects';
import { project } from './core/models/projectModel';
import { languages,categories } from './core/modules/projectCats';
import { experiences } from './core/modules/experience';
import { experience } from './core/models/experienceModel';
import { DOCUMENT } from '@angular/common';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: project[] = projects
  focus = "who"
  experiences: experience[] = experiences
  team: boolean = true;
  title = 'portfolio';
  langSelect: any = false;
  languages = ["Any Language",...Object.values(languages).map((x)=>{return x.name})];
  selectedLanguage: string = this.languages[0];
  tabs: string[] = ["who","education", "experience", "projects", "awards"]
  catSelect: any = false;
  categories = [...Object.values(categories)];
  selectedCategory: string = this.categories[0];
  @ViewChild('main_body') body: ElementRef | undefined;
  @ViewChild('who') who: ElementRef | undefined;
  @ViewChild("contact") contact: ElementRef | undefined;
  @ViewChild("experience") experience: ElementRef | undefined;
  @ViewChild("education") education: ElementRef | undefined;
  @ViewChild("projectElement") projectsElement: ElementRef | undefined;
  @ViewChild("awards") awards: ElementRef | undefined;

  @ViewChild("filter") filterEl: ElementRef | undefined;
  @ViewChild("normalHeader") header: ElementRef | undefined;
  @ViewChild("header") whoHeader: ElementRef | undefined;
  bodyRect = document.body.getBoundingClientRect();

  //  @ViewChild('side_nav', { static: true }) sideNav:any;
  images = [
    {
      src: '../assets/images/1.jpg',
    },
    {
      src: '../assets/images/2.jpg',
    },
    {
      src: '../assets/images/3.jpg',
    },
    {
      src: '../assets/images/4.jpg',
    },
  ]

  gratitude = [
    'Thank you for reading. :)','Gracias por leer :)', '読んでくれてありがとう :)', 'Asante kwa kusoma :)'
  ]
  currentImage = 0;
  summary = true;
  expanded: boolean = false;
  selected:string="who"

   ngOnInit(): void{
    this.changeImage();
    this.selectTeam()
    // this.scrollListener();
   }
   ngAfterViewInit(): void{
    console.log(this.body)
    this.scrollListener();
   }
   scrollListener(){
    
  let elemRect = this.who?.nativeElement.getBoundingClientRect(),
  offset   = elemRect.top - this.bodyRect.top;
    window.addEventListener("scroll", (event:any) => {
      let headerHeight = this.header?.nativeElement.scrollHeight
      let headerHeightWho = this.whoHeader?.nativeElement.scrollHeight
     let whoHeight = (this.who?.nativeElement.scrollHeight + headerHeightWho + this.contact?.nativeElement.scrollHeight + (headerHeight))
     let educationHeight = whoHeight +  (headerHeight*2) +  this.education?.nativeElement.scrollHeight 
     let experienceHeight = educationHeight + headerHeight + this.experience?.nativeElement.scrollHeight
     let projectsHeight = experienceHeight + headerHeight + this.filterEl?.nativeElement.scrollHeight +this.projectsElement?.nativeElement.scrollHeight
     let awardsHeight = projectsHeight +  headerHeight + this.awards?.nativeElement.scrollHeight
     console.log(`scrollTop: ${window.scrollY}`)
     if(window.scrollY< whoHeight){
      // 26.84%
      this.selected = "who"
     }
     if(window.scrollY > whoHeight && window.scrollY< educationHeight ){
      // 2419
      // console.log("education")
      this.selected = "education"
     }
     if(window.scrollY > educationHeight && window.scrollY< experienceHeight){
      // console.log("experience")
      this.selected = "experience"
     }
     if(window.scrollY> experienceHeight && window.scrollY<projectsHeight){
      // console.log("projects")
      this.selected = "projects"
     }
     if(window.scrollY>awardsHeight){
      // console.log("awards")
      this.selected = "awards"
     }
                        
  }, { passive: true });
   }
  expandSideNav(){
   this.expanded=!this.expanded
  }
  async changeImage(){
    while(true){
      
        this.currentImage++
      
      if(this.currentImage==this.images.length){
        this.currentImage=0
      }
      await new Promise(resolve => setTimeout(resolve, 4000)); 
      
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
    this.filter()
    let temp = this.projects
    this.projects =  temp.filter((val)=>{
      return val.team == this.team
    })
    
  }
  scrollTo(location:string){
      (document.getElementById(location) as any).scrollIntoView(); 
      this.focus = location  
  }
  

}
