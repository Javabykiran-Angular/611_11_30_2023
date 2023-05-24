import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  count:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){   
    
    if(this.count==0){
      console.log("Click Event Occur...");
      this.count++;
    }
    
    
  }

}
