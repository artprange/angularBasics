import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServesComponent } from './serves/serves.component';

//here's where i must add all the components i created for them to be rendered.
@NgModule({
  declarations: [AppComponent, ServerComponent, ServesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
