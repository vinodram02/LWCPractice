import { LightningElement, api } from 'lwc';

export default class ReflectPropAttribute extends LightningElement {
    /* privateTitle;

     @api
     get title() {
         return this.privateTitle;
     }

     set title(value) {
         privateTitle = value.toUpperCase();
         this.setAttribute('title', this.privateTitle);
     }*/
    @api show = 'show me on parent';
    connectedCallback() {
        const tabindex = this.getAttribute('tabindex');

        if (!tabindex) {
            this.setAttribute('tabindex', '0');
        }
    }
}