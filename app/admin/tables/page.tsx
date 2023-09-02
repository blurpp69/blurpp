'use client'

import { useMutation, useQuery } from "@tanstack/react-query";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { deleteTable, getTables } from "@/actions/tables";
import React, { useCallback, useEffect, useMemo } from 'react'
import useVendorId from "@/hooks/useVendorId";
import { Button } from "@/components/ui/button";
import { CreateTable } from "./create-table";
import { useConfirmationModal } from "@/components/confirmationModal";
import tableStore from "@/state/admin/tables.store";

export default function Page() {
  const { vendorId } = useVendorId();
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const { Modal, closeModal, openModal } = useConfirmationModal();
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["hydrate-orders"],
    queryFn: () => getTables(vendorId ?? ''),
    enabled: !!vendorId,
    keepPreviousData: true,
  });

  const { mutateAsync: removeTable, isError } = useMutation(deleteTable, {
    onSuccess: (data) => {
      refetch();
    }
  });

  const sanitizingData = useCallback(() => {
    if (!data) return []
    return data?.items?.map((item: any) => {
      return {
        ...item,
        table_name: item?.name ?? '-',
      }
    })
  }, [data])

  const sanitizedData = useMemo(() => sanitizingData(), [data])

  useEffect(() => {
    if (!vendorId) return
    refetch()
  }, [page, vendorId]);

  return (
    <div className="">
      <Modal action={() => removeTable(tableStore.getState().selectedId)} />
      <div className="flex justify-end mb-10">
        <Button variant={'admin'} onClick={() => setOpen(true)}>Create Table</Button>
      </div>
      <CreateTable open={open} onOpenChange={(value: boolean) => setOpen(value)} refetch={refetch} />
      <DataTable
        columns={columns}
        data={sanitizedData as any ?? []}
        deleteModal={openModal}
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
