import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'
import { parseMoney } from '@/lib/parseMoney'
import { Icons } from './icons'

type Props = {
  imageUrl: string
  price: number
  name: string
  onClick?: () => void
}

const Menu = (props: Props) => {
  return (
    <Card onClick={props.onClick} className='flex p-3 rounded-lg w-full'>
      <img
        src={props.imageUrl}
        alt={props.name}
        width={150}
        height={150}
        className='max-h-[120px] rounded-lg object-cover w-20'
      />
      <CardContent className='flex flex-col w-full px-3 py-0 justify-center'>
        <div className='flex gap-2'>
          <div className="flex items-center gap-1">
            <Icons.Clock className="w-2 h-2 mt-1" />
            <p className="secondary-text text-[9px]">22 min</p>
          </div>
          <div className="flex items-center gap-1">
            <Icons.Star className="w-2 h-2 mt-1" />
            <p className="secondary-text text-[9px]">4.9</p>
          </div>
        </div>
        <h1 className='font-bold'>
          {props.name}
        </h1>
        <div className='border-t-[1px] flex border-[#F3F3F3] justify-between mt-2 pt-2'>
          <p className='secondary-text'>Price start from:</p>
          <h1 className='font-bold'>{parseMoney(props.price)}</h1>
        </div>
      </CardContent>
    </Card >
  )
}
export default Menu