'use client'

import SearchBar from "@/components/searchBar"
import Menu from "@/components/menu"
import GridContainer from "@/components/gridContainer"
import { useQuery } from "@tanstack/react-query"
import getImageLink from "@/utils/getImageLink"
import { BottomDrawer } from "@/components/bottomDrawer"
import { useState } from "react"
import { GetProducts } from "@/actions/products"
import useInput from "@/hooks/useInput"
import useVendorId from "@/hooks/useVendorId"
import Header from "@/components/header"

export default function IndexPage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [product, setProduct] = useState({});
  //@ts-ignore
  const { vendorId } = useVendorId();
  const { value: search, onChange: setSearch } = useInput();

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => GetProducts(),
  });

  const promoData = data?.filter((menu: any) => menu?.discount_price > 0)?.map((menu: any) => ({
    id: menu.id,
    product_name: menu.product_name,
    product_price: menu.product_price,
    image_url: getImageLink(menu?.expand?.image_url as any),
    addons: menu?.expand?.addons_id ?? [],
    discount_price: menu?.discount_price
  }))

  const sanitizedData = data?.filter((menu: any) => menu?.discount_price === 0)?.map((menu: any) => ({
    id: menu.id,
    product_name: menu.product_name,
    product_price: menu.product_price,
    image_url: getImageLink(menu?.expand?.image_url as any),
    addons: menu?.expand?.addons_id ?? []
  }))

  return (
    <>
      <SearchBar
        containerStyle="my-3 relative flex justify-between items-center w-full gap-3"
        inputStyle="px-2 py-5 my-2 rounded-lg bg-white border border border-white shadow pl-10"
        placeholder="What do you want to eat today?"
        value={search}
        onChange={setSearch}
      />
      <Header
        promoData={promoData}
        onClick={(menu: any) => {
          setProduct(menu)
          setOpenDrawer(true)
        }}
      />
      <div>
        <h1 className="font-bold">Menu</h1>
        <div className="mt-4 flex flex-col gap-3">
          {sanitizedData?.map((menu: any) => (
            <Menu
              key={menu?.id}
              imageUrl={menu?.image_url}
              name={menu?.product_name}
              price={menu?.product_price}
              onClick={() => {
                setProduct(menu)
                setOpenDrawer(true)
              }}
            />
          ))}
        </div>
      </div>
      <BottomDrawer
        open={openDrawer}
        onOpenChange={() => setOpenDrawer(false)}
        product={product}
      />
    </>
  )
}
