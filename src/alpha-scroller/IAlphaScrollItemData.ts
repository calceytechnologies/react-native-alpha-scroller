import {
  Region,
  Subregion,
  CurrencyCode,
  CallingCode,
  CountryCode,
} from './types';

export interface IAlphaScrollItemData {
  region: Region;
  subregion: Subregion;
  currency: CurrencyCode[];
  callingCode: CallingCode[];
  flag: string;
  name: string;
  cca2: CountryCode;
  mask?: string;
  phoneNumberLength?: number;
  textMask?: string;
}
