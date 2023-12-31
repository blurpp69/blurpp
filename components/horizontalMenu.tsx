import React from 'react'
import Image from 'next/image'
import { Icons } from './icons'
import { Button } from './ui/button'
import { parseMoney } from '@/lib/parseMoney'

type Props = {
  imageUrl: string
  price: number
  name: string
  quantity: number
  addToCart?: () => void
  removeFromCart?: () => void
  showActions?: boolean
}

const HorizontalMenu = (props: Props) => {
  return (
    <div className='my-5 flex items-center justify-between'>
      <img
        src={props?.imageUrl}
        alt={props.name}
        width={70}
        height={70}
      />
      <div className='flex w-[40%] flex-col justify-between'>
        <span className='text-sm'>{props.name}</span>
        <span className='text-sm'>{parseMoney(props.price)}</span>
      </div>
      {!props.showActions && (
        <div className='flex w-[20%] justify-between'>
          <Button className='h-6 w-6 rounded-full bg-gray-200 p-2' onClick={props.addToCart}>
            <Icons.plus className='h-2 w-2 text-black' />
          </Button>
          <span className='mx-2'>{props?.quantity}</span>
          <Button className='h-6 w-6 rounded-full bg-gray-200 p-2' onClick={props.removeFromCart}>
            <Icons.minus className='h-2 w-2 text-black' />
          </Button>
        </div>
      )}
    </div>
  )
}

export default HorizontalMenu