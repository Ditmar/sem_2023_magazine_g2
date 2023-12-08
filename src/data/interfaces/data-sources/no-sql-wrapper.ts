interface NoSQLWrapper {
    CreateUser: (user: any) => Promise<any>;
    FindAllUsers: () => Promise<any[]>;
    UpdateUsers: (id:any, data:any) => Promise<any>;
    DeleteUsers:(id:string) => Promise<any>;

    FindAllArticles: () => Promise<any[]>;

}
export default NoSQLWrapper;