import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuelType'
})
export class FuelTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
        return 'Gasoline';
      case 1:
        return 'Diesel';
    }
    return 'Unknown';
  }

}
