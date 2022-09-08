import { LightningElement } from 'lwc';

export default class DataBindingEx extends LightningElement {
    greeting = 'Namasthe';

    handleChange(event) {
        this.greeting = event.target.value;
    }

}