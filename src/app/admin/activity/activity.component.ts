import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../../shared/entities';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() activities: Activity[] = [];
}
