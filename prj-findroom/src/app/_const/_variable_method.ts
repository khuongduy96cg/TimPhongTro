export class Var_Meth {
    public static showDel: boolean = false;
    public static showDelMess: string = 'Xóa';


    public static showDeleteButton() {
        this.showDel = !this.showDel;

        if (this.showDel) {
            this.showDelMess = 'Hủy';
        }
        else {
            this.showDelMess = 'Xóa';
        }
    }
}