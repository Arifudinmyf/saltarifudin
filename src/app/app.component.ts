import { Component, OnInit } from '@angular/core';
import { RestApiService } from './shared/entities.service';

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

  title = 'test';
  name = 'Arifudin';
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
    peop: 'People',
    sub: 'View all',
  };
  document = {
    do: 'Documents',  
    ti: 'Browse all documents',
  };
}
