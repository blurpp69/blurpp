"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { parseMoney } from "@/lib/parseMoney"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import OrderBadge from "@/components/orderBadge"
import { Icons } from "@/components/icons"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  table_name: string
  available: boolean
  updated: string
  seat: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="mx-auto text-center">
        <Checkbox
          className="border-admin data-[state=checked]:bg-admin"
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        className="border-admin data-[state=checked]:bg-admin"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "table_name",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tables
          <span className="ml-2">
            <Icons.ArrowUpDown />
          </span>
        </Button>
      </div>
    ),
    cell: (value) => {
      const table = value.row.original.table_name
      if (table === "-") return <span>-</span>
      return <span className="">{table}</span>
    },
    enableSorting: true
  },
  {
    accessorKey: "updated",
    header: () => <div className="text-center">Last Transaction</div>,
    cell: (value) => {
      const table = value.row.original.updated
      const formattedDate = new Date(table).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })

      if (table === "-") return <span>-</span>
      return <span className="">{formattedDate}</span>
    },
  },
  {
    accessorKey: "available",
    header: () => <div className="text-center">Status</div>,
    cell: (value) => {
      const available = value.row.original.available
      return <OrderBadge type={available ? "Available" : "Reserved"} />
    },
  },
  {
    accessorKey: "seat",
    header: () => <div className="text-center">Seat</div>,
    cell: (value) => {
      const seat = value.row.original.seat
      return <span className="">{seat}</span>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Generate QR code
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
            {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
