import { AnimatePresence } from 'framer-motion';
import { useLocation, Outlet } from 'react-router';

export default function AnimatedLayout() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
        </AnimatePresence>
    );
}
