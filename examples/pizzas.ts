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

console.log( menu );