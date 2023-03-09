import type { Locales } from '$i18n/i18n-types';
import { writable as writableLocal } from 'svelte-local-storage-store';

export const localeLS = writableLocal<Locales | undefined>('localeLS', undefined);
