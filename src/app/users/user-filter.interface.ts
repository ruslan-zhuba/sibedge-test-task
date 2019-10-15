import {SatDatepickerRangeValue} from 'saturn-datepicker';

export interface UserFilter {
  lastName: string;
  phone: string;
  city: string;
  birthday: SatDatepickerRangeValue<Date>;
}
