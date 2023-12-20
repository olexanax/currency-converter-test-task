export type CurrenciesType = "USD" | "UAH" | "PLN" | "EUR";

export enum CurrenciesEnum {
    "USD" = "USD",
    "UAH" = "UAH",
    "PLN" = "PLN",
    "EUR" = "EUR",
}

export interface CurrencyApiItemType {
    alphaCode: string;
    code: string;
    date: string;
    inverseRate: number;
    name: string;
    numericCode: string;
    rate: number;
}

export type CurrencyDataType = Record<
    CurrenciesType,
    CurrencyApiItemType | undefined
>;

export interface CurrencyApiResponseType {
    [key: string]: CurrencyApiResponseType;
}
