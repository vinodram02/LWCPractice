import { LightningElement } from 'lwc';

export default class HelloIterator extends LightningElement {
    contacts = [{
            Id: 1,
            Name: 'Vinod',
            Title: 'CEO',

        },
        {
            Id: 2,
            Name: 'Ram',
            Title: 'CTO',
        },
        {
            Id: 3,
            Name: 'Chowdary',
            Title: 'Manager',
        },
    ];
}