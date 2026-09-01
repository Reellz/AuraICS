// import { PortalTopBar, PortalSideBar } from "@/app/components/layout"

export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
            {/* <PortalTopBar />
            <PortalSideBar /> */}
            </div>
            <div className="grow bg-brand-cream">{children}</div>
        </div>
        
    )
}