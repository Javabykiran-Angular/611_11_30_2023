import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string="success";  
  rating:number=22;
  isError:boolean=false;
  isSpecial:boolean=true;
  
  jsonobj={
    'success':!this.isError,
    'danger' : this.isError,
    'special': this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
