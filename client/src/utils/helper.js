const helperFunctions = () => {
    const svgPlatformsSelection = (platform) => {
        const ret = [];

        if (platform === null) return null;

        platform.forEach((item) => {
            if (item.platform.slug.includes('pc') && !ret.includes('pc')) {
                ret.push('pc');
            } else if (item.platform.slug.includes('xbox') && !ret.includes('xbox')) {
                ret.push('xbox');
            } else if (item.platform.slug.includes('3do') && !ret.includes('3do')) {
                ret.push('3do');
            } else if (
                (item.platform.slug.includes('playstation') || item.platform.slug.includes('ps')) &&
                !ret.includes('playstation')
            ) {
                ret.push('playstation');
            } else if (
                (item.platform.slug.includes('nintendo') ||
                    item.platform.slug.includes('wii') ||
                    item.platform.slug.includes('game-boy') ||
                    item.platform.slug.includes('snes') ||
                    item.platform.slug.includes('nes') ||
                    item.platform.slug.includes('gamecube')) &&
                !ret.includes('nintendo')
            ) {
                ret.push('nintendo');
            } else if (
                (item.platform.slug.includes('sega') ||
                    item.platform.slug.includes('genesis') ||
                    item.platform.slug.includes('dreamcast') ||
                    item.platform.slug.includes('game-gear')) &&
                !ret.includes('sega')
            ) {
                ret.push('sega');
            } else if (item.platform.slug.includes('ios') && !ret.includes('ios')) {
                ret.push('ios');
            } else if (item.platform.slug.includes('android') && !ret.includes('android')) {
                ret.push('android');
            } else if (
                (item.platform.slug.includes('macos') ||
                    item.platform.slug.includes('macintosh') ||
                    item.platform.slug.includes('mac') ||
                    item.platform.slug.includes('apple')) &&
                !ret.includes('macos')
            ) {
                ret.push('macos');
            } else if (item.platform.slug.includes('linux') && !ret.includes('linux')) {
                ret.push('linux');
            } else if (item.platform.slug.includes('amiga') && !ret.includes('amiga')) {
                ret.push('amiga');
            } else if (item.platform.slug.includes('web') && !ret.includes('web')) {
                ret.push('web');
            } else if (
                (item.platform.slug.includes('atari') || item.platform.slug.includes('jaguar')) &&
                !ret.includes('atari')
            ) {
                ret.push('atari');
            }
        });

        return ret;
    };

    return { svgPlatformsSelection };
};

export default helperFunctions;
