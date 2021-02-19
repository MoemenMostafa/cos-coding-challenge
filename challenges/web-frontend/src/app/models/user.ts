export class Userbase {
    "internalUserId": number;
    "internalUserUuid": string;
    "privileges": string; // {PUBLIC_USER} ~ {DEALERSHIP_USER} ~ {SALESMAN_USER}
    "type": IUsertype;
    "userRole": IUserRole;
}

export class User extends Userbase {
    "mailAddress": string;
}

export enum IUsertype {
    dealership = 0,
    salesman = 1,
    type2 = 2,
    type3 = 3,
    type4 = 4
}

export enum IUserRole {
    buyers = "buyers", 
    sellers = "sellers", 
    sellersSupervisors = "sellersSupervisors", 
    internalUsers = "internalUsers", 
    sysadmins = "sysadmins", 
    transportationProviders = "transportationProviders"
}