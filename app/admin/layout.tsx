import type {Metadata} from "next";
import AdminHeader from "@/components/defaultcompo/AdminHeader";
import {TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
export const metadata: Metadata = {
    title: "Travel Blog V2",
    description: "Next Gen Blogging Platform",
};

export default async function RootLayout({
                                             children,
                                             category,
                                             users,
                                         }: Readonly<{
    children: React.ReactNode
    category: React.ReactNode
    users: React.ReactNode
}>) {
    return(
        <div>
            <AdminHeader>
                <div className="mt-4">
                    <TabsContent value="posts">
                        <Card>
                            {children}
                        </Card>
                    </TabsContent>
                    <TabsContent value="category">
                        <Card>
                            {category}
                        </Card>
                    </TabsContent>
                    <TabsContent value="users">
                        <Card>
                            {users}
                        </Card>
                    </TabsContent>
                </div>
            </AdminHeader>

        </div>
    )
}