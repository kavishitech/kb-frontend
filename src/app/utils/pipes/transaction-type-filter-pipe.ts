import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionTypeFilterPipe'
})
export class TransactionTypeFilterPipe implements PipeTransform {

  transform(items: any[], type: number): any[] {


    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!type) { return items; }

    // convert the searchText to lower case

    // retrun the filtered array
    return items.filter(item => {
      if (type==2 ) {
        return item.userCropId>0;
      }
      else if (type==1 ) {
      return item.landId>0;
    }
    else{
        return item;
    }
      return false;
    });
   }
}