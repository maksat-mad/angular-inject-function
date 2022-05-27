import { Component, OnInit } from '@angular/core';
import { WidgetBase } from '../widget-base';

@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: [
    '../widget-base.scss',
    './interactive-widget.component.scss'
  ],
  standalone: true
})
export class InteractiveWidgetComponent extends WidgetBase implements OnInit {

  ngOnInit(): void {
  }

  refresh() {}

}
