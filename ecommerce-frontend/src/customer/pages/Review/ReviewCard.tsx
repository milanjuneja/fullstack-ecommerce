import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      <Grid2 container spacing={9}>
        <Grid2 size={{xs:1}}>
          <Box>
            <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155FD"}}>
                Z
            </Avatar>
          </Box>
        </Grid2>

        <Grid2 size={{xs:9}}>
          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg'>User 1</p>
              <p className='opacity-70'>Date</p>
            </div>
          </div>
          <Rating 
          readOnly 
          value={4.5}
          precision={.5}
          sx={{marginLeft:"-5px"}}
          />
          
          <p>Value for money product, great product</p>
            <div>
              <img className='w-24 h-24 object-cover' src="https://thesstudioonline.com/cdn/shop/products/sd5024-1-65dc7ec37060d.webp?v=1709019680" alt="" />
            </div>

        </Grid2>

        

      </Grid2>
      <div>
      <IconButton >
          <Delete sx={{color:red[700]}}/>
        </IconButton>
      </div>
    </div>
  )
}

export default ReviewCard
