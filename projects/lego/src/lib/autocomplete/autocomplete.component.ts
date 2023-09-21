import { NgFor, AsyncPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'lib-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    AsyncPipe,
  ],
})
export class AutocompleteComponent {
  @Input() label?: string;
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) options!: string[];
  @Output() onOptionSet: EventEmitter<string> = new EventEmitter();

  control = new FormControl('');
  filteredOptions?: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  setOptionValue(value: string) {
    this.onOptionSet.emit(value);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.options.filter((option) =>
      this._normalizeValue(option).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
