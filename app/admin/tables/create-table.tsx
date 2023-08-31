'use client'


import { createTable } from "@/actions/tables";
import { Icons } from "@/components/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import useInput from "@/hooks/useInput";
import useVendorId from "@/hooks/useVendorId";
import { useMutation } from "@tanstack/react-query";

type Props = {
  open: boolean
  onOpenChange?: (open: boolean) => void
}

export function CreateTable(props: Props) {
  const { value: name, onChange: setName } = useInput();
  const { value: number, onChange: setNumber } = useInput();
  const { vendorId } = useVendorId();

  const { mutateAsync: create, isLoading, isError } = useMutation(createTable, {
    onSuccess: () => {
      props.onOpenChange?.(false);
    }
  })

  const onSubmit = async () => {
    if (!vendorId) return

    await create({
      name,
      seat: parseInt(number),
      vendor_id: vendorId
    });
  }

  return (
    <AlertDialog open={props.open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Table</AlertDialogTitle>
          <AlertDialogDescription>
            <form action={onSubmit}>
              <div className="flex flex-col gap-5 my-5">
                <div>
                  <label htmlFor="table_name">Table Name</label>
                  <Input name="table_name" placeholder="eg: table 1" value={name} onChange={setName} />
                </div>
                <div>
                  <label htmlFor="seat">Number of seat</label>
                  <Input name="seat" type="number" value={number} onChange={setNumber} />
                </div>
              </div>

              <div>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => props.onOpenChange?.(false)}>
                    Cancel
                  </AlertDialogCancel>
                  <Button type="submit" variant="admin" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Icons.loader className="animate-spin mr-2" />
                        Creating...
                      </>
                    ) : 'Create'}
                  </Button>
                </AlertDialogFooter>
              </div>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}
