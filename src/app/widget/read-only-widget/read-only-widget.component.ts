import { Component, OnInit } from '@angular/core';
import { WidgetBase } from '../widget-base';

@Component({
  selector: 'app-read-only-widget',
  templateUrl: './read-only-widget.component.html',
  styleUrls: [
    '../widget-base.scss',
    './read-only-widget.component.scss'
  ],
  standalone: true
})
export class ReadOnlyWidgetComponent extends WidgetBase implements OnInit {

  ngOnInit(): void {
  }

  onRefresh() {}

}
