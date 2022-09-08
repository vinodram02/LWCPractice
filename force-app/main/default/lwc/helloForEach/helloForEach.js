import Manager from '@salesforce/schema/User.Manager';
import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {

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