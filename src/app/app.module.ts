import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { postReducer } from './post/post.reducer';
import { simpleReducer } from './simple.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({message: simpleReducer, post: postReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
