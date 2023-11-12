import RU from 'app/assets/locales/ru/translation.json'
import RO from 'app/assets/locales/ro/translation.json'

export type JSONDataLanguage = typeof RU | typeof RO

export const loadROJson = (): Promise<JSONDataLanguage> => {
    return new Promise((res) => {
        import(`app/assets/locales/ro/translation.json`).then((data) => {
            res(data?.default);
        });
    });
};

export const loadRUJson = (): Promise<JSONDataLanguage> => {
    return new Promise((res) => {
        import(`app/assets/locales/ru/translation.json`).then((data) => {
            res(data?.default);
        });
    });
};