import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbildpipe',
  templateUrl: './inbildpipe.component.html',
  styleUrls: ['./inbildpipe.component.css']
})
export class InbildpipeComponent implements OnInit {

  strData:string='Hopes so u r enjoying Angular 12 module by Sumit raokhande';

  num2:number=-452.78956324557;
  mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
