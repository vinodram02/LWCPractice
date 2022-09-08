trigger CustomRollUp on contact (after insert, after update, after delete, after undelete ) {
  set<id>accountIds=new set<id>();
  set<id>contactIds=new set<id>();
  List<Account> accList=new List<Account>();

  if(trigger.isInsert && trigger.isUndelete){
    for(contact con: trigger.new){
    accountIds.add(con.AccountId);
    contactIds.add(con.Id);

    }
  }

  if(trigger.isUpdate){
    for(contact con:trigger.new){
        if(trigger.oldMap.get(con.Id).AccountId!=con.AccountId){
            accountIds.add(con.AccountId);
            contactIds.add(con.Id);

        }
    }
  }

  if(trigger.isDelete){
    for(contact con: trigger.old){
        accountIds.add(con.AccountId);
        contactIds.add(con.Id);

    }
  }

/*Map <id, account> accountMap=new Map<id, account>([select id,customRollUp__c from account where Id IN:accountIds]);
for(contact con:[select id,AccountId from contact where Id IN:contactIds]){
    if(accountMap.get(con.id)!=null){
        if(accountMap.get(con.id).customRollUp__c==null){
            accountMap.get(con.id).customRollUp__c=1;
        }else{
            accountMap.get(con.id).customRollUp__c+=1;
        }
    }    
}
if(accountMap.values().size()>0){
  accList=accountMap.values();
  update accList;
}*/
if(accountIds!=null){
 AggregateResult[] ar=[Select count(id),accountId from contact where accountId IN:accountIds group by accountId];
 for(AggregateResult ar1:ar){
    Account acc=new Account();
    acc.id=(id)ar1.get('ar1.accountId');
    acc.customRollUp__c=(Integer)ar1.get('expr0');
    accList.add(acc);
 }
 if(accList.size()>0){
    update accList;
 }
}
}