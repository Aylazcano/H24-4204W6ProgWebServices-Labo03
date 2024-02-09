import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Regles de routage
    RouterModule.forRoot([
      { path: "", component: IndexComponent, pathMatch: "full" },
      { path: "index", component: IndexComponent },
      { path: "list", component: ListComponent },
      { path: "details", component: DetailsComponent },
      { path: ":ahem", component: IndexComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
