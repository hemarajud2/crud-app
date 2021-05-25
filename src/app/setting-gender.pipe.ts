import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settingGender'
})
export class SettingGenderPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value == true)
    return "Male";
    else return "FeMale";
  }

}
