
export const PLUS_BANKBALANACE = 'plusBankBalance'; 
export function plusBankBalance(balance){
    return {
        type: PLUS_BANKBALANACE,
        balance : balance,
    }
}

export const MINUS_BANKBALANACE = 'minusBankBalance'; 
export function minusBankBalance(balance){
    return {
        type: MINUS_BANKBALANACE,
        balance : balance,
    }
}

export const DONATEMYCASHTOCHARITY = 'donateMyCashToCharity'; 
export function donateMyCashToCharity(balance){
    return {
        type: DONATEMYCASHTOCHARITY,
        balance : balance,
    }
}