import React, { useState, useEffect } from 'react';
import { Data } from "../Data/data";
import TourCard from './tourCard';
import  '../styles/Tours.css';


const Tours = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getData = () => {
        setData(Data);
        setLoading(false);
    }

    const removeInterest = ((id) => {
       const newData =data.filter(data => data.id !== id);
        setData(newData);
    })
    const refreshData = () => {
        setData(Data);
        setLoading(false);
    }
  

    useEffect(() => {
        getData();
       
    }, [])
    

    return (
        <>
            <div className='Tours'>
                <h2>Travel</h2>
              
                <TourCard Tdata={data} loader={loading} remove={removeInterest} Refresh={refreshData}/>
          </div>
            
        </>
    )
}

export default Tours
