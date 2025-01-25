import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
  const handleChange = () => {

  }
  return (
    <div className='p-5 border rounded-md flex'>
      <div >
        <Radio
         checked={true}
         onChange={handleChange}
         value=""
         name='radio-button'
         />
      </div>
      <div className='space-y-3 pt-3'>
        <h1>User 1</h1>
        <p className='w-[320px]'>gagag gagdg, aggag ag ag , agg , 201100</p>
        <p><strong>Mobile :</strong> 53535235</p>
      </div>
    </div>
  )
}

export default AddressCard
