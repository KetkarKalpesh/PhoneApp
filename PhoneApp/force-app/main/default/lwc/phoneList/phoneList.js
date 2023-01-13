import { LightningElement, wire } from 'lwc';
import getPhones from '@salesforce/apex/phoneController.getPhones';

export default class PhoneList extends LightningElement {
    phones
    error
    @wire(getPhones)
    retrivePhones({data, error}){
        if(data){
            console.log(JSON.stringify(data))
            this.phones = data
            this.error = undefined
        }
        if(error){
            console.error(error)
        }
    }
}