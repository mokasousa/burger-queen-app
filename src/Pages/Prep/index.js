import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js';
import PrepOrders from '../../Components/PrepOrders';

const Prep = () => {

    const [ordersToPrep, setOrdersToPrep] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('Orders')
            .get()
            .then((response) => {
                let itensOrders = [];
                response.forEach(item => itensOrders.push(item.data()))
                setOrdersToPrep(itensOrders);
            })
    }, [])

    console.log(ordersToPrep);


    return(
        <>
            <PrepOrders ordersToPrep={ordersToPrep} />
        </>
    )
}

export default Prep;