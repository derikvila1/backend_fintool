export interface UserCreateDto{
    name: string;
    email: string;
    password: string;
}

export interface UserAuth{
    email: string;
    password: string;
}