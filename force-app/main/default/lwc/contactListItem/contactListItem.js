import { LightningElement, api } from 'lwc';

export default class ContactListItem extends LightningElement {
    @api contact;

    selectHandler(event) {
        event.preventDefault();
        const seletedEvent = new CustomEvent('selected', { detail: this.contact.Id });
    }
}