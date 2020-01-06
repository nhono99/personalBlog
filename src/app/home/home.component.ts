import { MyBackendService } from './../core/my-backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$ = this.myBackendService.getPosts();

  constructor(private myBackendService: MyBackendService) { }

  ngOnInit() {
  }

}
