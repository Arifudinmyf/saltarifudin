import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { ContentComponent } from './admin/content/content.component';
import { ActivityComponent } from './admin/activity/activity.component';
import { ChannelComponent } from './admin/channel/channel.component';
import { SocialmediaComponent } from './admin/socialmedia/socialmedia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    ActivityComponent,
    ChannelComponent,
    SocialmediaComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
