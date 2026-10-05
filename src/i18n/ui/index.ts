import { pt } from './pt';
import { en } from './en';
import { es } from './es';
import { it } from './it';
import type { Lang } from '../routes';

export type UiKey = keyof typeof pt;
export const ui: Record<Lang, Record<UiKey, string>> = { pt, en, es, it };
