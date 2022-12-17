import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  posts: IPost[] | null = null;
   errorData = false ;
  

  constructor(private apiService: ApiService) {  }


  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;

      },
      error: (error) => {
        this.errorData = true;
        console.log(error)
      }
    });
  }

}
