'use client'

import { useQuery } from "@tanstack/react-query";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { getOrders } from "@/actions/orders";
import React, { useCallback, useEffect, useMemo } from 'react'
import useVendorId from "@/hooks/useVendorId";
import { Button } from "@/components/ui/button";
import SideDrawer from "./sidedrawer";

export default function Page() {
  const { vendorId } = useVendorId();
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [orderId, setOrderId] = React.useState<string | undefined>(undefined);

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["hydrate-orders"],
    queryFn: () => getOrders(vendorId ?? '', page),
    enabled: !!vendorId,
    keepPreviousData: true,
  });

  const sanitizingData = useCallback(() => {
    if (!data) return []
    return data?.items?.map((item: any) => {
      return {
        ...item,
        table_name: item?.expand?.table_id?.name ?? '-',
      }
    })
  }, [data])

  const sanitizedData = useMemo(() => sanitizingData(), [data])

  useEffect(() => {
    if (!vendorId) return
    refetch()
  }, [page, vendorId])

  return (
    <div className="">
      <div className="flex justify-end mb-10">
        <Button variant={'admin'}>Create Table</Button>
      </div>
      <DataTable
        columns={columns}
        data={sanitizedData as any ?? []}
        setOpened={setOpen}
        setOrderId={setOrderId}
      />
      <SideDrawer
        id={orderId ?? ''}
        open={open}
        onOpenChange={setOpen}
      />
      <div className="flex justify-end my-5 gap-5">
        <Button
          variant={'ghost'}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>

        <Button
          variant={'ghost'}
          onClick={() => setPage(page + 1)}
          disabled={data?.totalPages === page}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
