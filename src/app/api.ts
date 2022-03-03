import axios from 'axios';

import { CardElement } from '../types/enums';

const api = axios.create({
    baseURL: 'https://api.scryfall.com'
});

export const fetchCards = async () =>{
    try {
        const element = "black"
        const res = await api.get(`/cards/search?order=color&q=c:${element}`)
        if(res){
            return res.data;
        }
    } catch (err){
        console.log(err)
    }
}

export const fetchByElement = async (elements : CardElement[]) =>{

    try {
        const res  = await api.get(`/cards/search?order=cmc&q=c:${elements.join('&')}`)
        if(res){
            return res.data;
        }
    } catch (err){
        console.log(err)
    }
}


export const fetchCardByName = async (id: string) =>{
    try {
        const res = await api.get(`/v1/cards/${id}`);
        if(res){
            return res.data;
        }
    } catch (err){
        console.log(err)
    }
}
