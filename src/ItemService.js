import { Item } from "./Item";

export class ItemService
{
    constructor()
    {
        this.array=[];
        this.array.push(new Item("Kupiti mleko"));
        this.array.push(new Item("Nahrani psa"));
        this.array.push(new Item("Spremi rucak"));
    }

    getCb(cbf){
        setTimeout(() => cbf(array), 1000)
    }

    get(i){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.array[i]), 1000)
        })
    }

    get(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.array), 1000)
        })
    }
}