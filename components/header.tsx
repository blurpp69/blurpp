import React from "react"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { parseMoney } from "@/lib/parseMoney"

type Props = {
  promoData: any
}

const Header = (props: Props) => {

  const calculateDiscountPercentage = (price: number, discountPrice: number) => {
    return Math.round((price - discountPrice) / price * 100)
  }

  return (
    <div className="mb-4 w-full">
      <div className="mb-3 relative">
        <img src="/header.png" alt="logo" className="w-full" />
        <Button variant={"admin"} className="p-3 h-5 absolute bottom-2 left-2">
          Order Now
        </Button>
      </div>
      {/* ============================ CATEGORIES ======================================== */}
      <div>
        <h1 className="font-bold">Food Categories</h1>
        <div className="flex items-center gap-3 my-2 w-full justify-evenly">
          <div>
            <div className=" bg-white w-16 h-16 flex justify-center items-center rounded-xl">
              <Icons.Burger className="w-10 h-10" />
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">Fast Food</p>
          </div>
          <div>
            <div className=" bg-white w-16 h-16 flex justify-center items-center rounded-xl">
              <Icons.Desert className="w-10 h-10" />
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">Fast Food</p>
          </div>
          <div>
            <div className=" bg-white w-16 h-16 flex justify-center items-center rounded-xl">
              <Icons.Healthy className="w-10 h-10" />
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">Fast Food</p>
          </div>
          <div>
            <div className=" bg-white w-16 h-16 flex justify-center items-center rounded-xl">
              <Icons.Drinks className="w-10 h-10" />
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">Fast Food</p>
          </div>
        </div>
      </div>
      {/* ============================ PROMO ======================================== */}
      <div>
        <h1 className="font-bold">Promo</h1>
        <div className="flex items-center gap-3 my-2 overflow-x-auto">
          {props.promoData?.map((menu: any) => (
            <Card className="rounded-xl min-w-max">
              <CardContent className="p-3">
                <div className="relative">
                  <img
                    src={menu?.image_url}
                    alt="promo"
                    className="rounded-xl w-full h-32 object-cover mb-1"
                  />
                  <p className="text-xs text-white absolute top-3 left-0 bg-red-500 px-2 py-1 rounded-sm">
                    {calculateDiscountPercentage(menu?.product_price, menu?.discount_price)}% Off
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <Icons.Clock className="w-2 h-2 mt-1" />
                    <p className="secondary-text text-[9px]">22 min</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icons.Star className="w-2 h-2 mt-1" />
                    <p className="secondary-text text-[9px]">4.9</p>
                  </div>
                </div>
                <h1 className="font-bold text-sm">{menu?.product_name}</h1>
              </CardContent>
              <CardFooter className="border-t-[1px] mx-3 p-2 border-[#F3F3F3;]">
                <div className="flex items-center justify-between w-full">
                  <p className="secondary-text text-[9px]">Price start from:</p>
                  <p className="font-bold text-sm">{parseMoney(menu?.product_price - menu?.discount_price)}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
