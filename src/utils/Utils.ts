export const randomNumberGenerator = (min: number, max: number) => {
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

export const capitalize = (string: string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const replaceAll = (string: string, mapObj: any) => {
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return string.replace(re, function(matched){
        return mapObj[matched];
    });
}

export const truncateString = (string: string, limit: number) => {
    return (string.length > limit) ? string.slice(0, limit - 1) + '...' : string;
};

export function getViewedUIExperience() {
    if (window) {
        if (window.innerWidth > 1024) {
            return 'Desktop';
        } else if (768 <= window.innerWidth && window.innerWidth <= 1024) { 
            return 'Tablet';
        } else {
            return 'Smartphone';
        }
    }
    return '';
}
