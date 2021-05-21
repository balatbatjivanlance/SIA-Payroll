import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service'; // Services

@Component({
  selector: 'app-payrollcard',
  templateUrl: './payrollcard.component.html',
  styleUrls: ['./payrollcard.component.css']
})
export class PayrollcardComponent implements OnInit {
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
