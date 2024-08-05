import type {Metadata} from "next";
import AdminHeader from "@/components/defaultcompo/AdminHeader";
import {TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
    title: "Travel Blog V2",
    description: "Next Gen Blogging Platform",
};

export default async function RootLayout({
                                             children,
                                             category,
                                             users,
                                             settings,
                                         }: Readonly<{
    children: React.ReactNode
    category: React.ReactNode
    users: React.ReactNode
    settings: React.ReactNode
}>) {
    return(
        <div>
            
            <AdminHeader>
                <div className="mt-4">
                    <TabsContent value="posts">
                            {children}
                    </TabsContent>
                    <TabsContent value="category">
                            {category}
                    </TabsContent>
                    <TabsContent value="users">
                            {users}
                    </TabsContent>
                    <TabsContent value="settings">
                            {settings}
                    </TabsContent>
                </div>
            </AdminHeader>
            <Toaster />
        </div>
    )
}