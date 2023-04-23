import { useEffect } from 'react';
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const withAuth = (Component: any) => {
    const ProtectedComponent = (props: any) => {
        const { isLogged } = useSelector((state: RootState) => state.user)
        const router = useRouter()

        useEffect(() => {
            if(!isLogged) {
                router.push('/login')
            }
        }, [isLogged, router])

        return isLogged ? <Component {...props} /> : null;
    }

    return ProtectedComponent;
}

export default withAuth