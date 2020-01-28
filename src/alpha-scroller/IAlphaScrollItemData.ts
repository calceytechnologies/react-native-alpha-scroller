import {
  Region,
  Subregion,
  CurrencyCode,
  CallingCode,
  CountryCode,
  TranslationLanguageCodeMap,
} from './types';

export interface IAlphaScrollItemData {
  region: Region;
  subregion: Subregion;
  currency: CurrencyCode[];
  callingCode: CallingCode[];
  flag: string;
  name: string | TranslationLanguageCodeMap;
  cca2: CountryCode;
  mask?: string;
  phoneNumberLength?: number;
  textMask?: string;
}
