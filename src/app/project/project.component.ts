import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None // Disable view encapsulation


})
export class ProjectComponent implements OnInit {
  id!: string; // or `number` if you expect numeric IDs
  markdownContent: string | Promise<string> = '';
  @ViewChild("customCursor", { static: true }) customCursor: ElementRef<any> | undefined;


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''; // Get the 'id' parameter
    this.http.get(`../../assets/project markdowns/${this.id}.md`, { responseType: 'text' })
  .subscribe({
    next: (data: string) => {
      console.log('Data received:', data);
      this.markdownContent = marked(data);
    },
    error: (error) => {
      console.log("there has been an error")
      console.error('Error:', error);
    },
    complete: () => {
      console.log('Request complete');
    }
  });
  }

  updateCursorPosition = (event: any) => {
    if (this.customCursor) {
      this.customCursor.nativeElement.style.top = `${event.clientY}px`;
      this.customCursor.nativeElement.style.left = `${event.clientX}px`;
    }
 }
 ngAfterViewInit(): void{
  this.cursorListener();
 }
 
 cursorListener(){
  // check device type or something similar
  if(!this.isMobileTablet()){
    // if(this.customCursor){
    //    if(this.initialCursorPos(this.customCursor)){
    //     this.customCursor.nativeElement.style.display = "none";
    //   }
    //   else{
    //     this.customCursor.nativeElement.style.display = "block";
    //   }
    // }
   
    window.addEventListener('mousemove', (event) => {
      this.updateCursorPosition(event);
    })
  }
 }

 initialCursorPos(customCursor:any){
  return (customCursor.nativeElement.style.top == 0 &&  customCursor.nativeElement.style.left == 0);
 }
 isMobileTablet(){
  return (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
}
}
