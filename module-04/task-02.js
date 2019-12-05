"use strict";

const inventory = {
    items: ["Монорельса", "Фильтр"],
    add(itemName) {
        this.items.push(itemName);
    },
    remove(itemName) {
        this.items = this.items.filter(item => item !== itemName);
    }
};

const invokeInventoryOperation = function (object, inventoryAction, itemName) {
    console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
    const action = inventoryAction.bind(object, itemName);
    action();
};

invokeInventoryOperation(inventory, inventory.add, 'Аптечка');
console.log(inventory.items);

invokeInventoryOperation(inventory, inventory.remove, 'Фильтр');
console.log(inventory.items);