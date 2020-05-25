class Storage {
  constructor(_array) {
    this.items = _array;
  }
  getItems() {
    return this.items;
  }
  addItem(string) {
    this.items.push(string);
  }
  removeItem(string) {
    const idxArray = this.items.indexOf(string);
    items.splice(idxArray, 1);
    return items;
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
