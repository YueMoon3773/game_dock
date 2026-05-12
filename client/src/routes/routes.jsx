import { motion } from 'framer-motion';
import { VideoBgChangeProvider } from '../hooks/useVideoBgChange';
import AnimatedLayout from '../components/layout/AnimatedLayout/AnimatedLayout';

import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import ViewGames from '../components/pages/ViewGames/ViewGames';
import GameDetails from '../components/pages/GameDetails/GameDetails';

const routes = [
    {
        element: <AnimatedLayout />,
        children: [
            {
                path: '/',
                element: (
                    <VideoBgChangeProvider>
                        <App />
                    </VideoBgChangeProvider>
                ),
                errorElement: (
                    <VideoBgChangeProvider>
                        <ErrorPage />
                    </VideoBgChangeProvider>
                ),
            },
            {
                path: '/games',
                element: <ViewGames />,
                // element: (
                //     <motion.div
                //         initial={{ opacity: 0, x: -60 }}
                //         animate={{ opacity: 1, x: 0 }}
                //         exit={{ opacity: 0, x: -60 }}
                //         transition={{ duration: 0.66, ease: 'easeInOut' }}
                //     >
                //         <ViewGames />
                //     </motion.div>
                // ),
                errorElement: (
                    <VideoBgChangeProvider>
                        <ErrorPage />
                    </VideoBgChangeProvider>
                ),
            },
            {
                path: '/game-detail',
                // element: (
                //     <motion.div
                //         initial={{ opacity: 0, x: -60 }}
                //         animate={{ opacity: 1, x: 0 }}
                //         exit={{ opacity: 0, x: -60 }}
                //         transition={{ duration: 0.66, ease: 'easeInOut' }}
                //     >
                //         <GameDetails />
                //     </motion.div>
                // ),
                element: <GameDetails />,
                errorElement: (
                    <VideoBgChangeProvider>
                        <ErrorPage />
                    </VideoBgChangeProvider>
                ),
            },
        ],
    },
];

export default routes;
