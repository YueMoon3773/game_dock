import { VideoBgChangeProvider } from '../hooks/useVideoBgChange';
import AnimatedLayout from '../components/layout/AnimatedLayout/AnimatedLayout';

import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import ViewGames from '../components/pages/ViewGames/ViewGames';

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
