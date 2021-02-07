import { Component, OnInit } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Channels: any = [];
  Activities: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit(): void {
    this.loadActivities();
    this.loadChannels();
  }

  loadChannels() {
    return this.restApi.getChannels().subscribe((data: {}) => {
      this.Channels = data;
      console.log(data);
    });
  }
  loadActivities() {
    return this.restApi.getActivities().subscribe((data: {}) => {
      this.Activities = data;
      console.log(data);
    });
  }

  title = 'my-angular';
  name = 'Hendra';
  navhead: string[] = [
    'Videos',
    'People',
    'Documents',
    'Events',
    'Communities',
    'Favorites',
    'Channels',
  ];
  navfooter: string[] = [
    'About',
    'For Business',
    'Suggestions',
    'Help & FAQs',
    'Contacts',
    'Pricing',
  ];
  navbottom: string[] = ['Privacy', 'Terms'];
  navborder = 'with-border';
  navspace = 'with-space';
  video = {
    title: 'Videos',
    subtitle: 'Browse all videos',
  };
  people = {
    title: 'People',
    subtitle: 'View all',
  };
  document = {
    title: 'Documents',
    subtitle: 'Browse all documents',
  };
}
