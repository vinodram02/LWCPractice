import { LightningElement, api } from 'lwc';

export default class RecordFormEx extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];

}