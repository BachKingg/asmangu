import { Inhanvien } from "./inhanvien";

export interface Iduan {
    id: number;
    tenDuAn: string;
    ngayStart: string;
    tien: number;
    leader: number;
    thanhvien: number[];
}
