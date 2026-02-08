export interface ILoginModel {
    username: string;
    password: string;
    expiresInMins:number;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    thumbnail: string
}