'use client'

import { Collections, OrdersRecord } from "@/pocketbase-types"
import pb from "@/utils/pocketbase"

interface Table {
  name: string,
  vendor_id: string,
  seat: number,
}

export async function getTables(vendorId: string) {
  try {
    return pb.collection(Collections.Tables).getList(1, 10, {
      $autoCancel: false,
      filter: `(vendor_id="${vendorId}")`,
    });

  } catch (error) {
    console.log(error)  
  }
}

export async function createTable(table: Table) {
  try {
    return pb.collection(Collections.Tables).create({
      ...table,
      available: true
    });

  } catch (error) {
    console.log(error)  
  }
};

export async function deleteTable(tableId: string) {
  try {
    return pb.collection(Collections.Tables).delete(tableId);
  } catch (error) {
    console.log(error)  
  }
}