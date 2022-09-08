import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController/getContactList';

export default class ContactList extends LightningElement {
    selectedContact;
    @wire(getContactList) contacts;

    get listNotEmpty() {
        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.lenght > 0;
    }

    selectHandler(event) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.data.find(contact => contactId.Id === contactId);
    }
}