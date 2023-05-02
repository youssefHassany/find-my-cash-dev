import React from 'react'

const InsertPurchase = () => {
  return (
    <form className='mx-auto py-5 border-y-2 border-slate-600 w-5/6 mb-10'>
        <input
            type='text'
            required
            placeholder='Purchase Name'
            className='mx-auto bg-transparent rounded border-2 border-slate-600 text-center block mb-4 focus:outline-none text-slate-400'
        />

        <input
            type='number'
            required
            placeholder='Purchase Price'
            className='mx-auto bg-transparent rounded border-2 border-slate-600 text-center block focus:outline-none text-slate-400'
        />

        <div className='mx-auto w-fit'>
            {/* add purchase button */}
            <button id="add" className="btn bg-emerald-600 hover:bg-emerald-500 hover:text-slate-900 mx-auto mt-5 mr-1">Add</button>

            {/* add purchase button */}
            <button id="edit" className="btn bg-indigo-700 hover:bg-indigo-500 hover:text-slate-900 mx-auto mt-5">Edit</button>
        </div>
    </form>
  )
}

export default InsertPurchase