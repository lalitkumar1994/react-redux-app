import {PLUS_BANKBALANACE,MINUS_BANKBALANACE,DONATEMYCASHTOCHARITY} 
from './bankbalanceAction';

export default function  bankbalanceReducer (state  = '' ,{type,balance}) {
    switch(type){
        case PLUS_BANKBALANACE:
            return state = state + balance;
        case MINUS_BANKBALANACE:
            return state = state - balance;
        case DONATEMYCASHTOCHARITY:
            return state = 0;
        default:
            return state;
    }
}
