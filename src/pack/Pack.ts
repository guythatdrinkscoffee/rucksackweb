export interface Pack {
    createdAt: string;
    id:        string;
    name:      string;
    totalWeight: string;
    baseWeight: string;
    totalPrice: string;
    packItems: PackItem[];
}

export interface PackItem {
    gear:     Gear;
    quantity: number;
    inBaseWeight: boolean;
}

export interface Gear {
    id: string;
    category: string;
    desc:     string;
    name:     string;
    price:    string;
    weight:   string;
}
