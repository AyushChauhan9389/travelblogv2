import adminControl from "@/lib/AdminControl";
import { error } from "console";

export default async function AdminPage(){
    const isAdmin = await adminControl()
    if(!isAdmin){
        throw error
    }
    return (
        <div>
            Hello Admin
        </div>
    )
}