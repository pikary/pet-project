
interface Geo  {
    lat: string;
    lng: string;
}
interface Address  {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User  {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface RegisterFormValues {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    passwordRepeat: string;
    isConsent: boolean;
}
export interface LoginFormValues {
    email: string;
    password: string;
    isRemember: boolean;
}

export interface RegisterResponse {
    user: User;
    tokens: {
        accessToken: string;
        //TODO: delete refresh token
        refreshToken: string;
    }
}

export interface LoginResponse{
    user:User,
    tokens: {
        accessToken: string;
        //TODO: delete refresh token
        refreshToken: string;
    }
}
