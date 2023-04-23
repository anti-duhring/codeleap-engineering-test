import { useEffect } from 'react';
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { useAppSelector } from '@/redux/hooks';

const withAuth = (Component: any) => {
    const ProtectedComponent = (props: any) => {
        const { isLogged } = useAppSelector((state: RootState) => state.user)
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