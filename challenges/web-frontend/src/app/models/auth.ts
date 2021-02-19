import { Userbase } from "./user";

export class Auth extends Userbase{
    authenticated: boolean;
    userId: string;
    token: string;
    authenticationChallenge: string
}