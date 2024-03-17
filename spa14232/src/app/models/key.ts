import { LockModel } from "./lock";

export interface KeyModel{
    id: number;
    code: string;
    quantity: number;
    lock: LockModel;
}