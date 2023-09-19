/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner'
import { RotatingLines } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadings, setLoadings] = useState(true)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data => setPhones(data.data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesFakData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesFakData)
                setLoading(false)
                setLoadings(false)
            })
        console.log(phones);
    }, [])
    return (
        <div className="mx-auto container">
           <div className="flex gap-10 mx-[30%] my-20">
            <div>
            {loading && <Audio
                height="100"
                width="100"
                radius="9"
                color='yellow'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />}
            </div>
            <div>
            {loadings && <RotatingLines
                strokeColor="yellow"
                strokeWidth="5"
                animationDuration="1"
                width="150"
                visible={true}
            />}
            </div>
           </div>


            <h2 className="text-3xl font-bold">Phones : {phones.length}</h2>
            <BarChart width={1200} height={300} data={phones}>
                <Bar dataKey='price' fill="#FFCA17"></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;