'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  label: string
  icon: React.ReactNode
  onClick?: () => void
  showLabel?: boolean
}

const Navlink = (props: Props) => {
  const pathname = usePathname()
  const isActive = pathname.includes(props.href)

  return (
    <Link onClick={props.onClick} href={props.href} className={`my-2 flex items-center rounded-lg p-3 hover:bg-secondary hover:text-black ${isActive ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      {props.icon}
      {props.showLabel && <h1 className='ml-3 text-lg duration-300 ease-linear'>{props.label}</h1>}
    </Link>
  )
}

export default Navlink