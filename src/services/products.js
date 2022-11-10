import { useState } from 'react';
import { resolvePath } from 'react-router-dom'
import products from '../assets/data.json'

export const getProducts = () => {
    const task = new Promise((resolve, reject) => {
        resolve(products);
    });

    return task;
}

export const getSingleProduct = (id) => {
    const task = new Promise((resolve, reject) => {
        let item;

        for (let i = 0; i < products.length; i++){
            if (products[i].id == id){
                item = products[i];
                resolve(item);
                return;
            }
        }

        
    });
    return task;
}