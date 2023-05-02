import React from 'react'
import InsertPurchase from './InsertPurchase'

const PurchasesMenu = () => {
  return (
    <section id="purchases-menu" className="w-3/4 md:w-1/2 mx-auto mt-8 bg-gray-300 dark:bg-gray-800 rounded p-5 flex justify-center flex-col">
        <h1 className="text-3xl text-slate-700 dark:text-slate-300 font-medium mb-8">Your Purchases:-</h1>
        <ul id="purchases" className="w-full mx-auto p-3 overflow-x-scroll overflow-y-hidden h-44 flex flex-nowrap">

             {/* purchase item  */}
            <li className="bg-slate-400 dark:bg-gray-600 rounded-xl w-32 h-32 flex-custom md:flex-customMd inline-block justify-around text-slate-900 dark:text-slate-300 p-1 mb-4 mr-2 cursor-pointer shadow-lg">
                <p className='text-xl my-4'>Taxi</p>
                <p className='text-4xl font-bold'>20</p>
            </li> 
            
        </ul>


        <InsertPurchase />

        {/* remainings  */}
        <h2 className="text-xl font-medium text-slate-700 dark:text-slate-400">Remaining: <span id="remaining-cash"></span> / <span id="total-cash"></span></h2>
    </section>
  )
}

export default PurchasesMenu