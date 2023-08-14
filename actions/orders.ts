'use client'

import { Collections, OrdersRecord } from "@/pocketbase-types"
import pb from "@/utils/pocketbase"

export async function placeOrder(props: OrdersRecord) {
  try {
    return pb.collection(Collections.Orders).create({
      ...props
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getOrders(vendorId: string, page: number) {
  try {
    return pb.collection(Collections.Orders).getList(page, 10,{
      $autoCancel: false,
      expand: "table_id",
      filter: `(vendor_id="${vendorId}")`,
    })

  } catch (error) {
    console.log(error)  
  }
}

export async function getOrder(orderId: string) {
  try {
    return pb.collection(Collections.Orders).getOne(orderId, {
      $autoCancel: false,
      expand: "table_id,product_id.image_url",
    })
  } catch (error) {
    console.log(error)
  }
}

export async function payOrder(orderId: string) {
  try {
    return pb.collection(Collections.Orders).update(orderId, {
      order_status: "paid",
    })
  } catch (error) {
    console.log(error)
  }
}