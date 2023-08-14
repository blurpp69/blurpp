"use client"

import OrderBadge from "@/components/orderBadge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { parseMoney } from "@/lib/parseMoney"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  table_name: string
  order_status: "pending" | "paid"
  total_price: number
  name: string
  phone_number: string,
  created: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="border-admin data-[state=checked]:bg-admin"
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
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
    header: "Table",
    cell: (value) => {
      const table = value.row.original.table_name
      if (table === '-') return <span>-</span>
      return <span className="text-gray-400">#{table}</span>
    }
  },
  {
    accessorKey: "order_status",
    header: "Status",
    cell: (value) => {
      const status = value.row.original.order_status
      return <OrderBadge type={status} />
    }
  },
  {
    accessorKey: "total_price",
    header: "Total price",
    cell: (value) => {
      const price = value.row.original.total_price
      return <span>{parseMoney(price)}</span>
    }
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone_number",
    header: "Phone number",
  },
  {
    accessorKey: "created",
    header: "Created at",
    cell: (value) => {
      const date = value.row.original.created
      const time = new Date(date).getTime()
      const formattedDate = new Intl.DateTimeFormat("en-bg", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(time)

      return <span>{formattedDate}</span>
    }
  }
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const payment = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]
