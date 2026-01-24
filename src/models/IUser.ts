
export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    image: string;
    birthDate:string;
    address: {
        city: string;
        state: string;
        country: string;
    };
    company: {
        department: string;
        name: string;
        title: string;
    };
    role: 'admin' | 'moderator' | 'user';
}
