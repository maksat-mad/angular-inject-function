import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/store.service';
import { INTERACTIVE_WIDGET_DEPS } from '../imports';
import { WidgetActionsService } from '../services/widget-actions.service';
import { WidgetDataService } from '../services/widget-data.service';
import { WidgeSettingsService } from '../services/widget-settings.service';
import { WidgetBase } from '../widget-base';

function injectState(key: string) {
  const store = inject(Store);
  return store.select(key)
}


@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: [
    '../widget-base.scss',
    './interactive-widget.component.scss'
  ],
  standalone: true,
  imports: [...INTERACTIVE_WIDGET_DEPS]
})
export class InteractiveWidgetComponent extends WidgetBase implements OnInit {

  data$!: Observable<any>;
  config: any;

  state = injectState('users');
  
  constructor(private actions: WidgetActionsService) {
    super();  
  }
  
  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData();
    this.config = this.settings.getSettings();
  }

  refresh() {
    this.actions.refresh();
  }

  addNewItem() {}

}
