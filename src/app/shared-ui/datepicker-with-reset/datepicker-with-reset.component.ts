import {Component, Input, OnDestroy, Output} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-datepicker-with-reset',
  templateUrl: './datepicker-with-reset.component.html',
  styleUrls: ['./datepicker-with-reset.component.scss']
})
export class DatepickerWithResetComponent implements OnDestroy {

  @Input() label: string;
  @Input() value;
  @Output() change$ = new Subject<string>();

  onClose() {
    this.change$.next(this.value);
  }

  onClear() {
    this.value = null;
    this.change$.next(this.value);
  }

  ngOnDestroy(): void {
    this.change$.complete();
  }

}
