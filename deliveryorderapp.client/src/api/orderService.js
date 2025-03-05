const url = "http://localhost:5264/api/order";

export async function fetchOrders() {
    const response = await fetch(`${url}`);
    return response.json();
}

export async function fetchOrderById(id) {
    const response = await fetch(`${url}/${id}`);
    return response.json();
}

export async function createOrder(order) {
    const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order),
    });
    return response.json();
}


