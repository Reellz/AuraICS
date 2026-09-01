import React from "react";
// import { PulicNav, Footer } from "@/components/ui/layout"

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        // <div>
        //     <PulicNav />
        // </div>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="grow">{children}</div>
        </div>
        // <div> 
        // </div>
    )
}