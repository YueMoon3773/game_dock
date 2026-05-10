import { z } from 'zod';

const baseGameApiUrl = import.meta.env.VITE_API_GAMES_URL;
const gameApiUrlKey = import.meta.env.VITE_API_GAMES_URL_KEY;

const apiHelper = () => {
    const STORE_DOMAINS = {
        steam: 'https://store.steampowered.com',
        'playstation-store': 'https://store.playstation.com',
        'xbox-store': 'https://www.xbox.com',
        nintendo: 'https://www.nintendo.com',
        'epic-games': 'https://www.epicgames.com',
        gog: 'https://www.gog.com',
        'apple-appstore': 'https://apps.apple.com',
        'google-play': 'https://play.google.com',
    };

    const storeById = (storeId) => {
        return `${baseGameApiUrl}/stores/${storeId}?key=${gameApiUrlKey}`;
    };

    return {
        STORE_DOMAINS,
        storeById,
    };
};

export default apiHelper;
