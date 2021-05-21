import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service'; // Services

@Component({
  selector: 'app-userscard',
  templateUrl: './userscard.component.html',
  styleUrls: ['./userscard.component.css']
})
export class UserscardComponent implements OnInit {
  // Variables ----------------
  posts: any; // ----- this is the result ----------
  post: any; // ------ this will be the payload from the result ---------

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getFood(); // ----- RUNS FUNCTIONS --------
  }
  // GET ----------------------

  // GET INGREDIENTS --------------
  getFood(): void{
    this.data.getData('products').subscribe((res)=>{
      this.posts = res;
      this.post = this.posts.payload;
      console.log(this.post);
    });
  }
}
