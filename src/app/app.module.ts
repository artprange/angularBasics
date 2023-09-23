import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { WaringAlertComponent } from './warning-alert/warning-alert.cmponent';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WaringAlertComponent,
    SucessAlertComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
