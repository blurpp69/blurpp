'use client'

import React, { useEffect, useState } from 'react'

const useVendorId = () => {
  const [vendorId, setVendorId] = useState<string | null>(null);

  useEffect(() => {
    // Check if the window object is defined (i.e., running in a browser)
    if (typeof window !== "undefined") {
      // Get the vendor ID from localStorage
      const initialVendorId = localStorage.getItem("vendor") ?? null;
      // Set the initial vendor ID
      setVendorId(initialVendorId);
    }
  }, []);

  // Return the vendor ID and the function to update it
  return { vendorId }
}

export default useVendorId