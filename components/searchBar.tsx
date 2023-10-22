import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Icons } from './icons'
import { Button } from './ui/button'

type Props = {
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  containerStyle?: string
  inputStyle?: string
}

const SearchBar = (props: Props) => {
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
      >
        <Icons.cart className='w-6 h-6' />
      </Button>
    </div>

  )
}

export default SearchBar