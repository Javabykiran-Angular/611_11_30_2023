import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   myid:number=9;
   myusername:string='Sumit-Raokhande';

   jsonObj={
    id:8,
    fname:"Sumit",
    status:"Active",
    lname:"Raokhande"
   }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  OnPage1(){
    this.router.navigate(['/Page1']);
  }
  OnPage2(){
    this.router.navigate(['/Page2',this.myid]);
  }
  OnPage3(){
    this.router.navigate(['/Page3',this.myid,this.myusername]);
  }

  OnFollower(){
      this.router.navigate(['/follower']);
  }

  OnqueryParam(){
    this.router.navigate(["/queryParameter"],{
      queryParams:this.jsonObj
    })
  }

}
