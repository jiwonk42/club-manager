import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {

  transform(input: Member[], desiredCategory) {
    var output: Member[] = [];
    if(desiredCategory === "Staff") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "Staff") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Member") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "Member") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
