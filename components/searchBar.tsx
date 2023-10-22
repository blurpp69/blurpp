import React, { useCallback, useEffect } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Icons } from './icons'
import { Button } from './ui/button'
import useStore from '@/state/store'
import { useRouter } from 'next/navigation'

type Props = {
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  containerStyle?: string
  inputStyle?: string
}

const SearchBar = (props: Props) => {
  const route = useRouter();
  const cart = useStore(state => state.cart)
  const cartItemsCount = useStore(state => state.cartItemsCount)
  const setCartItemsCount = useStore(state => state.setCartItemsCount)
  const getCartItemsCount = useCallback(() => setCartItemsCount(), [setCartItemsCount])

  useEffect(() => {
    getCartItemsCount()
  }, [getCartItemsCount, cart])

  return (
    <div className={props?.containerStyle}>
      <Icons.search className='absolute left-3' />
      <Input
        id='input'
        className={props.inputStyle}
        placeholder={props.placeholder}
      />
      <Button
        variant={'outline'}
        className='bg-white p-2'
        onClick={() => cartItemsCount > 0 && route.push('/checkout')}
      >
        <span className='absolute -right-2 top-0 m-auto rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white'>{cartItemsCount}</span>
        <Icons.cart className='w-6 h-6' />
      </Button>
    </div>

  )
}

export default SearchBar