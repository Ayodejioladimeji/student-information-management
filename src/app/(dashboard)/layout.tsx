"use client"
import DashboardTopBar from "@/components/layout/dashboard-topbar";
import Sidebar from "@/components/layout/sidebar";
import ProtectedRoute from "@/components/routes/protected-routes";
import { useState } from "react";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [openSidebar, setOpenSidebar] = useState(false)
    

    // 

    return (
        <ProtectedRoute>
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>

            <div className="lg:ml-[250px]">
                <DashboardTopBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                {children}
            </div>
        </ProtectedRoute>
    );
}
