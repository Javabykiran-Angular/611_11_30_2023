import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onImage(){
    console.log("On Image click..");
  }

  onSend(myevent:any){
      console.log(myevent);

      console.log("Data is => "+myevent.target.value);

  }

  onClick(myname:any){
    console.log(myname);
    console.log(myname.value);

    myname.style.background='green';
    myname.style.color='white';

  }

  onClick1(myvalue:any){
      console.log(myvalue);
  }

}
