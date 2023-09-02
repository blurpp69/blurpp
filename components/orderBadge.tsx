import React from 'react'
import { Badge } from './ui/badge'

type Props = {
  type: 'pending' | 'paid' | 'Available' | 'Reserved'
}

const OrderBadge = (props: Props) => {
  const color = {
    pending: 'text-yellow-600 border-yellow-500 bg-yellow-100',
    paid: 'text-green-600 border-green-500 bg-green-100',
    Available: 'text-green-600 border-green-500 bg-green-100',
    Reserved: 'text-yellow-600 border-yellow-500 bg-yellow-100'
  }

  return (
    <Badge
      variant={'outline'}
      className={`text-xs ${color[props.type]}`}
    >
      {props.type?.charAt(0)?.toUpperCase() + props?.type?.slice(1)}
    </Badge>
  )
}

export default OrderBadge