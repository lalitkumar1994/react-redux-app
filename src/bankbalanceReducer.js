import {PLUS_BANKBALANACE,MINUS_BANKBALANACE,DONATEMYCASHTOCHARITY} 
from './bankbalanceAction';

export default function  bankbalanceReducer (state  = '' ,{type,playload}) {
    switch(type){
        case PLUS_BANKBALANACE:
            return state = state + playload.balance;
        case MINUS_BANKBALANACE:
            return state = state - playload.balance;
        case DONATEMYCASHTOCHARITY:
            return state = 0;
        default:
            return state;
    }
}
