import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';

export default class HelloCurrentUser extends LightningElement {
    userId = Id;
}