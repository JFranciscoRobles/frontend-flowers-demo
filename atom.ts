import { atom } from 'jotai'

export interface cartType {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export const cartAtom = atom<cartType[]>([])
