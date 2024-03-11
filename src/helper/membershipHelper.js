import { LOYALTY_CARD_LIMIT } from "constants/memberships.constants";

export function generateUniqueMembershipCode(length){
    /**
     *  -   Make it length of 7
     *  -   Randomly generate currently, so that reduce calling from database.
     *  -   As long as it is unique for this user.
     *  
     *  TODO: Verify no duplicated generated membership code for this user.
     */
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        code += charset.charAt(randomIndex);
    }
    
    return code;
}

export function verifyIsOverLimit(data){
  console.log('verifyIsNotOverLimit(data)', data)
  if(data){
    if(data.length){
      if(LOYALTY_CARD_LIMIT > data.length){
        return true;
      }else{
        return false;
      }
    }else{
      return true;
    }
  }else{
    return true;
  }
}

