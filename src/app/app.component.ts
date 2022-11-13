import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
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
   console.log(this.expanded)
  }
  async changeImage(){
    while(true){
      
        this.currentImage++
      
      if(this.currentImage==3){
        this.currentImage=0
      }
      console.log(this.currentImage)
      await new Promise(resolve => setTimeout(resolve, 3000)); 
      
    }
  }
  summarize(param:boolean){
    this.summary = param;
  }
}
