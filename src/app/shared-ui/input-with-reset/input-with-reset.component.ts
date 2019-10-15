import {
  Component,
  Input,
  OnDestroy,
  Output, ViewChild
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatInput} from '@angular/material';

@Component({
  selector: 'app-input-with-reset',
  templateUrl: './input-with-reset.component.html',
  styleUrls: ['./input-with-reset.component.scss']
})
export class InputWithResetComponent implements OnDestroy {
  @Input() label: string;
  @Input() placeholder = 'type anything';
  @Input() value = '';
  @Output() change$ = new Subject<string>();
  @ViewChild(MatInput, {static: true}) input: MatInput;

  private isPristine$: Observable<boolean> = this.change$.pipe(
    startWith(''),
    map(r => r && r.length > 0)
  );

  onClear() {
    this.value = '';
    this.change$.next(this.value);
    this.input.focus();
  }
  ngOnDestroy(): void {
    this.change$.complete();
  }
}
