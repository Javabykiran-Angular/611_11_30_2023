import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent implements OnInit {


  country:any[]=[
    {cid:1,cname:'India'},
    {cid:2,cname:'US'},
    {cid:3,cname:'Japan'}
  ];


  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(f:NgForm){
    console.log("=> "+f.value.myusername);
    console.log("=> "+f.value.con);
    console.log(f.value)
  }
  
  
}
