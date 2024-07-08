export class Item {
    constructor(
        public itemText : string, 
        public label : string,
        public itemStack : Array<string>,
        public itemDescription : string = '', 
    ) {
        
    }
}