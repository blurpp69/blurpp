"use client"

import React, { useEffect } from "react"
import { usePathname } from "next/navigation"

import Sidebar from "@/components/admin/Sidebar"

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  useEffect(() => {
    // check if window is defined
    if (typeof window !== "undefined") {
      localStorage.getItem("sidebar-expanded") === "true"
        ? setSidebarOpen(true)
        : setSidebarOpen(false)
    }
  }, []);

  const handleSidebarOpen = () => {
    setSidebarOpen(!isSidebarOpen)
    localStorage.setItem("sidebar-expanded", String(!isSidebarOpen))
  }

  if (pathname.startsWith("/admin/login")) {
    return <div className="flex h-screen w-full">{props.children}</div>
  }
  return (
    <div className="flex min-h-screen w-full bg-[#F6F7FB]">
      <Sidebar setSidebarOpen={handleSidebarOpen} sidebarOpen={isSidebarOpen}>
        {props.children}
      </Sidebar>
    </div>
  )
}

export default Layout
