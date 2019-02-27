export const UPDATE_BANKBALANACE = 'updateBalance'; 
export function updateBankBalance(balance){
    return {
        type: UPDATE_BANKBALANACE,
        playload:{
            balance : balance,
        }
    }
}

export const PLUS_BANKBALANACE = 'plusBankBalance'; 
export function plusBankBalance(balance){
    return {
        type: PLUS_BANKBALANACE,
        playload:{
            balance : balance,
        }
    }
}

export const MINUS_BANKBALANACE = 'minusBankBalance'; 
export function minusBankBalance(balance){
    return {
        type: MINUS_BANKBALANACE,
        playload:{
            balance : balance,
        }
    }
}

export const DONATEMYCASHTOCHARITY = 'donateMyCashToCharity'; 
export function donateMyCashToCharity(balance){
    return {
        type: DONATEMYCASHTOCHARITY,
        playload:{
            balance : balance,
        }
    }
}