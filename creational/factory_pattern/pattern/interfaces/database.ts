export interface Database{
    Connect(): string;
    GetOne():Promise< Error | null | Object >;
    GetAll():Promise< Error | null | [] >;
    Create():Promise< Error | null | boolean >;
    Update():Promise< Error | boolean >;
    Delete():Promise< Error | boolean >;
}