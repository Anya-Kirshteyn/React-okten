export type ProductType = {
     id: number;
     title: string;
     price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
};

export type IOrderType = {
    id: number;
    products: ProductType[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
};



export interface IDummyJsonPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}

export interface Reactions {
    likes: number;
    dislikes: number;
}




export interface IDummyJsonComment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: CommentUser;
}

export interface CommentUser {
    id: number;
    username: string;
    fullName: string;
}




export interface IDummyJsonUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
    role: 'admin' | 'moderator' | 'user';
}

export interface Hair {
    color: string;
    type: string;
}

export interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface Company {
    department: string;
    name: string;
    title: string;
    address: Address;
}

export interface Crypto {
    coin: string;
    wallet: string;
    network: string;
}