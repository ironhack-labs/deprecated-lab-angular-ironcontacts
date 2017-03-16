import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SearchPipeComponent } from './search-pipe/search-pipe.component';
import { SearchPipe } from './pipes/search.pipes';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SearchPipeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
