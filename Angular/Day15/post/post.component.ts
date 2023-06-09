import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPostData();
  }

  GetPostData(){
      this.service.getPost()
      .subscribe((response:any)=>{
          console.log(response);
          this.posts=response;
      })
  }

  onSend(mytitle:any,mybody:any){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.Postdata(obj)
      .subscribe((response)=>{
        console.log(response);
      })
  }


}
