public with sharing class ContactController {
   
    @AuraEnabled(cacheable=true)
    public static List<contact> getContactList() {
        return [
            SELECT 
            Id,
            Name,
            FirstName,
            LastName,
            Title,
            Phone,
            Email 
            FROM Contact 
            WITH SECURITY_ENFORCED
        ];
       
    }
}
