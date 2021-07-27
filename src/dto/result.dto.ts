export interface resultDto {
    status: boolean;
    message: string;
}

export interface resultAuth extends resultDto{
    user:{
        id:number,
        name:string,
        email:string
    }
}