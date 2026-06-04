import type { Locale } from './i18n';
import 'server-only';

const dictionaries: Record<Locale, () => Promise<Record<string, any>>> = {
    en: () => import('@/dictionaries/en.json').then((m) => m.default),
    tr: () => import('@/dictionaries/tr.json').then((m) => m.default),
};

const contents: Record<Locale, () => Promise<Record<string, any>>> = {
    en: () => import('@/contents/en.json').then((m) => m.default),
    tr: () => import('@/contents/tr.json').then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
    return dictionaries[locale]();
}

export async function getContents(locale: Locale) {
    return contents[locale]();
}
