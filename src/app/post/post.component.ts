import { MyBackendService } from './../core/my-backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'in-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private myBackendService: MyBackendService
  ) {
    this.myBackendService.post$.subscribe(
      data => { this.post = data; }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.myBackendService.getPost(params.id);
      }
    );
  }

}
