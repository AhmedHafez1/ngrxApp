import * as PostActions from './post/post.action';
import { Post } from './post/post.model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

interface PostState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message$: Observable<string>;

  post$: Observable<Post>;
  
  text: string;

  constructor(
    private messageStore: Store<AppState>,
    private postStore: Store<PostState>
  ) {
    this.message$ = messageStore.select('message');
    this.post$ = postStore.select('post');
  }

  arabicMessage() {
    this.messageStore.dispatch({ type: 'ARABIC' });
  }

  spanishMessage() {
    this.messageStore.dispatch({ type: 'SPANISH' });
  }

  defaultEnglish() {
    this.messageStore.dispatch({ type: 'ENGLISH' });
  }

  editPostText() {
    this.postStore.dispatch(new PostActions.EditText(this.text));
  }

  upVotePost() {
    this.postStore.dispatch(new PostActions.UpVote(''));
  }

  downVotePost() {
    this.postStore.dispatch(new PostActions.DownVote(''));
  }

  resetPost() {
    this.postStore.dispatch(new PostActions.Reset(''));
  }
}
