interface Pizza {
    name: string;
    price: number;
}

interface Order {
    id: number;
    pizzaIn: Pizza | undefined;
    status: string;
}

const menu: Pizza[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 9 },
    { name: "Veggie", price: 7 },
];

let cashInRegister: number = 100
const nextOrderId: number = 1;
let orderQueue: Order[] = []

function addNewPizzaToMenu(pizzaObj: Pizza): void {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order {
    const selectedPizza = menu.find( pizzaObj => pizzaObj.name === pizzaName );
    cashInRegister += selectedPizza ? selectedPizza.price : 0;
    const newOrder: Order = { id: nextOrderId, pizzaIn: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find( order => order.id === orderId );
    if (order) {
        order.status = "completed";
    }
    return order;
}

addNewPizzaToMenu({ name: "Chicken Bacon Ranch", price: 11 });
addNewPizzaToMenu({ name: "BBQ Chicken", price: 12 });
addNewPizzaToMenu({ name: "Spicy Sausage", price: 13 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order Queeue:", orderQueue);