export interface IEmployee {
    id: Number;
    firstName: string;
    lastName: string;
    email: string
}

// export const dummyEmployeeList: IEmployee[] = [
//     {
//         id: new Date().toJSON().toString(),
//         firstName: 'Dummy1',
//         lastName: 'Dummy11',
//         email: 'dummy1@gmail.com'
//     }
// ]

export enum PageEnum {
    list,
    add,
    edit
}