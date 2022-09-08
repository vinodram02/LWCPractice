import { LightningElement } from 'lwc';

export default class EventInputField extends LightningElement {
    myValue = 'Enter Value';

    handleChange(event) {
        console.log('evtCalled');
        const typedValue = event.target.value;
        const trimmedValue = typedValue.trim();
        if (typedValue !== trimmedValue) {
            event.target.value = trimmedValue;
        }
        this.myValue = trimmedValue;
    }

}