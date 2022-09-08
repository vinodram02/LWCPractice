import { LightningElement, api } from 'lwc';

export default class GetSetExample extends LightningElement {
    upperLimit;

    @api
    get itemName() {
        return this.upperLimit;
    }

    set itemName(value) {
        value = 'Vinod';
        this.upperLimit = value.toUpperCase();
    }

}