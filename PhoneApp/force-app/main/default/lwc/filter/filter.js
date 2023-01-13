import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

import PHONE_OBJECT from '@salesforce/schema/Phone__c';

import BRAND_FILED from '@salesforce/schema/Phone__c.Brand__c';

export default class Filter extends LightningElement {
    searchKey={}
    maxPrice=250000

    @wire(getObjectInfo, {objectApiName: PHONE_OBJECT})
    phoneObject

    @wire(getPicklistValues, {
        recordTypeId: '$phoneObject.data.defaultRecordTypeId',
        fieldApiName: BRAND_FILED
    })brands
}