import { Pipe, PipeTransform } from '@angular/core';
import { TransactionReason } from 'src/app/model/transaction-reason';

@Pipe({
    name: 'trasactionReasonPipeName',
    pure: false
})

export class TrasactionReasonPipeName implements PipeTransform {
    transform(items: TransactionReason[], filter: number): any {
        // if (!items || !filter) {
        //     return items;
        // }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.id==filter);
    }
}