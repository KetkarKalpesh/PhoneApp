public with sharing class phoneController {
    @AuraEnabled(cacheable=true)
    public static List<Phone__c> getPhones(){
        return [SELECT Id, Name, Brand__c, Model__c, Picture_URL__c, Price__c FROM Phone__c];
    }
}