import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  message$!: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = store.select('message');
  }

  arabicMessage() {
    this.store.dispatch({ type: 'ARABIC' });
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  defaultEnglish() {
    this.store.dispatch({ type: 'ENGLISH' });
  }
}
