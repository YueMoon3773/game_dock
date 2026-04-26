import { VideoBgChangeProvider } from '../hooks/useVideoBgChange';

import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import ViewGames from '../components/pages/ViewGames/ViewGames';

const routes = [
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
];

export default routes;
