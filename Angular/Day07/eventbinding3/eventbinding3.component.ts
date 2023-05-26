import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
  add:number=0;
  constructor() { }

  ngOnInit(): void {

  }
  

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

    this.result=n1+n2;

   // this.result=num1+num2;

  }

  onChange(){
    console.log("Chnage Event Occur...")
  }

  onKeyUp(){
    console.log("Key Up Event Occur..")
  }

  onKeyDown(){
    console.log("Key down event occur...");
  }

}
