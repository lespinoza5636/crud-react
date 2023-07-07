import { Navigate } from "react-router-dom";
import { useDb } from "../context/dbContex";

export function ProtectedRoutes({children})
{
    const {user} = useDb();

    if(!user) return <Navigate to={'/login'}/>

    return <>{children}</>;
}