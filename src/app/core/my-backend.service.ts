import { IPost } from './../shared/models/post.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const API_URL = environment.api_url;
const POST_URL = '/home/post';

@Injectable({
  providedIn: 'root'
})
export class MyBackendService {
  posts: IPost[];
  post$: Subject<IPost> = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    if (this.posts) {
      return of(this.posts);
    }

    return this.httpClient.get<IPost[]>(`${API_URL}${POST_URL}`)
      .pipe(tap((posts) => this.posts = posts));
  }

  getPost(id: number) {
    if (this.posts) {
      const post = this.posts.find(p => p.id === id);
      if (post) {
        this.post$.next(post);
      }
    }
    this.httpClient.get<IPost>(`${API_URL}${POST_URL}/${id}`)
    .subscribe(post => this.post$.next(post));
  }
}
