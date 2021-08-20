import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;

  constructor() {}

  ngOnInit(): void {}

  @Input() title: string = '';
  @Input() subtitle: string = '';

  @Input() peop: string = '';
  @Input() sub: string = '';

  @Input() do: string = '';
  @Input() ti: string = '';

}
