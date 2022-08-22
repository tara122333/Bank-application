import React from 'react'
import { airbnb, binance, coinbase, dropbox } from "../assets";

const Client = () => {
    const clients = [
        {
          id: "client-1",
          logo: airbnb,
        },
        {
          id: "client-2",
          logo: binance,
        },
        {
          id: "client-3",
          logo: coinbase,
        },
        {
          id: "client-4",
          logo: dropbox,
        },
      ];
  return (
    <div className='flex justify-center items-start my-4'>
        <div className='flex justify-center items-center flex-wrap w-full'>
            {clients.map((client) => (
                <div className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5`}>
                <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Client