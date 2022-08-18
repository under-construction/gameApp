import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './Components/game-list/game-list.component';
import { GameCreationComponent } from './Components/game-creation/game-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SafeHTMLPipe } from './Pipes/safe-html.pipe';
import { SearchFilterPipe } from './Pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCreationComponent,
    SafeHTMLPipe,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
