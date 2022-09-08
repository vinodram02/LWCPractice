import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './helloTemplateTwo.html';

export default class HelloMiscMultipleTemplates extends LightningElement {
    templateOne = true;

    render() {
        return this.templateOne ? templateOne : templateTwo;
    }

    switchTemplate() {
        this.templateOne = this.templateOne === true ? false : true;
    }
}