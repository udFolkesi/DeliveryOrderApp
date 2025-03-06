import { useEffect, useState } from "react";
import { fetchOrders } from "../api/orderService";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadOrders();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center mb-4">Список заказов</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Номер заказа</th>
                        <th>Город отправителя</th>
                        <th>Город получателя</th>
                        <th>Вес</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} onClick={() => navigate(`/orders/${order.id}`)} style={{ cursor: "pointer" }}>
                            <td>{order.id}</td>
                            <td>{order.orderNumber}</td>
                            <td>{order.fromCity}</td>
                            <td>{order.toCity}</td>
                            <td>{order.weight} кг</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
