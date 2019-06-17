import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {

    transform(value, args: string) {

        if (!value) {
            return;
        }

        if (!args) {
            return value;
        }

        args = args.toLowerCase();
        return value.filter( el => JSON.stringify(el).toLowerCase().includes(args));

    }

}

