import React, { use, useCallback, useEffect, useMemo } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Icons } from '@/components/icons'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import HorizontalMenu from '@/components/horizontalMenu'
import { getOrder, payOrder } from '@/actions/orders'
import { useMutation, useQuery } from '@tanstack/react-query'
import pb from '@/utils/pocketbase'
import { Collection } from 'pocketbase'
import getImageLink from '@/utils/getImageLink'
import { Button } from '@/components/ui/button'

type Props = {
  open: boolean,
  onOpenChange?: (open: boolean) => void,
  id: string,
}

const SideDrawer = (props: Props) => {

  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["hydrate-order"],
    queryFn: () => getOrder(props.id),
    enabled: !!props.id && props.open,
  });

  const { mutateAsync: pay, isLoading, isError } = useMutation(payOrder, {
    onSuccess: () => {
      console.log("success")
    },
    onError: () => {
      console.log("error")
    }
  })

  const paidAction = async () => {
    try {
      return await pay(props.id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (props.id && props.open) {
      refetch()
    }
  }, [props.id, props.open])

  const products = useMemo(() => {
    if (!data) return []

    return data?.expand?.product_id?.map((product: any) => {
      const quantity = [data?.orders_detail].find((item: any) => item?.product_id === product?.id)?.quantity ?? 0

      return {
        ...product,
        quantity,
      }
    }
    )

  }, [data])

  return (
    <Sheet open={props.open} onOpenChange={props.onOpenChange} >
      <SheetContent side={'right'} className="" >
        <form action={paidAction}>
          <SheetHeader className="flex-row items-center justify-between">
            <SheetTitle className="text-lg font-semibold">Order Details</SheetTitle>
            <Icons.X className="w-6 h-6 cursor-pointer" onClick={() => props.onOpenChange?.(false)} />
          </SheetHeader>
          <div className='mt-16'>
            <div className='flex gap-3'>
              <div>
                <Label htmlFor="table">Table</Label>
                <Input
                  type="text"
                  disabled={true}
                  //@ts-ignore
                  value={data?.expand?.table_id?.name ?? '-'}
                  id='table'
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  type="text"
                  disabled={true}
                  value={data?.created ?? '-'}
                  id='date'
                />
              </div>
            </div>
            <div className='mt-10'>
              <Label htmlFor="orders">Details</Label>
              {products?.map((product: any) => {
                return <HorizontalMenu
                  key={product.id}
                  imageUrl={getImageLink(product?.expand?.image_url)}
                  name={product?.product_name}
                  price={product?.product_price}
                  quantity={product?.quantity}
                />
              })}
            </div>
          </div>
          <SheetFooter className="absolute bottom-7 left-7 right-7 flex-row items-center justify-between">
            <Button className='w-full' variant={'admin'} type='submit'>
              Pay
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

export default SideDrawer;