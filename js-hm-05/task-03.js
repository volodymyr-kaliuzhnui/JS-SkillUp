class Storage {
    constructor(arr) {
        this.items = arr;
    }

    getItems () {
        return this.items;
    }

    addItem(item) {
        return  this.items.push(item);
    }

    removeItem (item) {
        let itemIndex = this.items.indexOf(item);
        if (itemIndex >= 0) {
            return  this.items.splice(item,1);
        }
    }

}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]