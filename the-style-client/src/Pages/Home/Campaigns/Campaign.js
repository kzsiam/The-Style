import React from 'react';
import Countdown from 'react-countdown';
import { AiOutlineSound } from "react-icons/ai";

const Campaign = () => {
    const campaignsName = [
        { name: 'BASARA' },
        { name: 'DAZZLE' },
        { name: 'ZAAYS' },
        { name: 'ELITE' },
    ]
    const Completionist = () => <span>Campaign Start now</span>;
    return (
        <div className='my-10'>
            <div className='flex items-center gap-2 my-20 mx-5'>
            <AiOutlineSound className='text-2xl'/>
                <h1 className='text-start text-2xl'>Upcoming <span className='text-red-500'>Campaigns</span></h1>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                {
                    campaignsName.map(campaignName =>
                        <div className="rounded-xl bg-base-100 shadow-xl mx-5">
                            <div>
                                <h1 className='text-2xl font-sans font-bold text-center'>{campaignName.name}</h1>
                            </div>
                            <div className="card-body justify-center items-center">
                                <h2 className="card-title text-red-500 text-base mb-2">Campaigns Starts in</h2>
                                <div className="card-actions justify-center">
                                    <Countdown className='bg-stone-300 p-3 rounded-xl text-2xl' date={Date.now() + 5000000000}>
                                        <Completionist />
                                    </Countdown>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Campaign;