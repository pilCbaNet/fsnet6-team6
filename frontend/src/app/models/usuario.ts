export class Usuario
{
    email: string;
    user: string;
    password: string
    password1: string;

    constructor(email: string, user: string, password: string, password1: string) {
        this.email = email ;
        this.user = user;
        this.password = password ; 
        this.password1 = password1 ;
    }
}
