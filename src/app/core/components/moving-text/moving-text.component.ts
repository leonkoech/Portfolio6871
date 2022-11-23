import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'moving-text',
  templateUrl: './moving-text.component.html',
  styleUrls: ['./moving-text.component.scss']
})
export class MovingTextComponent implements OnInit {

  constructor() { }
  ngOnInit(): void{

  }
  async ngAfterViewInit(): Promise<void> {
    await this.addItems()
  }
   @Input() words:string[] = []
  //  container = document.getElementById('container')
   @ViewChild('container') container: ElementRef | undefined;
   delay = (ms:number) => new Promise(res => setTimeout(res, ms));
  
   addItems=async()=>{
    let count = 0;
    while (this.words){
    let mainElement = document.createElement('div')
    let element = document.createElement('i')
    element.innerHTML = this.words[count];
    mainElement.appendChild(element);
    // console.log(this.container!.nativeElement)
    this.container!.nativeElement.appendChild(mainElement);
      // mainElement.classList.add("move-top")
      mainElement.style.marginTop = 100 + 'px';
      this.myMove(mainElement,false)

    await this.delay(2500)
       this.myMove(mainElement,true)
      await this.delay(1000)
      mainElement.style.display="none";
    this.container!.nativeElement.removeChild(mainElement)
      count++
      if(count==this.words.length){
        count = 0;
      }
  }
  }
   myMove(elem:any,isSeen:boolean) {
    let id:any = null;
    let start = isSeen?20:100;
    let end = isSeen?-100:20;
    let pos = start;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == end) {
        clearInterval(id);
      } else {
         pos--;
        elem.style.marginTop = pos + 'px';
      }
    }
  }
  
}
