import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailedService = () => {
    const {id} = useParams()
    const [service,setService] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    } , [id])
    return (
        <div></div>
    );
};

export default DetailedService;