trigger ContactDuplicatesControl on Contact (before insert, before update) {
  set<string> newEmailIds=new set<string>();
  set<string> newPhoneNumbs=new set<string>();
  set<string> dbEmailIds=new set<string>();
  set<string> dbPhoneNumbs=new set<string>();
 for(contact con:trigger.new){
    newEmailIds.add(con.Email);
    newPhoneNumbs.add(con.MobilePhone);
  }

  for(contact con:[Select Email,MobilePhone FROM Contact WHERE Email IN:newEmailIds OR MobilePhone IN:newPhoneNumbs]){
    dbEmailIds.add(con.Email);
    dbPhoneNumbs.add(con.MobilePhone);
  }

  for(contact con:trigger.new){
    if(dbEmailIds.contains(con.Email)||dbPhoneNumbs.contains(con.MobilePhone)){
        con.addError('Your inserting dublicate contact');
    }
  }

}