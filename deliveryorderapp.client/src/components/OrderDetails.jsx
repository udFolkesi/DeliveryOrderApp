import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOrderById } from "../api/orderService";

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const loadOrder = async () => {
            try {
                const data = await fetchOrderById(id);
                setOrder(data);
            } catch (error) {
                console.error("Error during the order loading", error);
            }
        };
        loadOrder();
    }, [id]);

    if (!order) {
        return <p className="text-center">Загрузка данных...</p>;
    }

    return (
        <div className="container">
            <div className="card shadow p-4">
                <h3 className="text-center mb-3">Детали заказа {order.orderNumber}</h3>
                <p><strong>Id заказа:</strong> {order.id}</p>
                <p><strong>Город отправителя:</strong> {order.fromCity}</p>
                <p><strong>Адрес отправителя:</strong> {order.fromAddress}</p>
                <p><strong>Город получателя:</strong> {order.toCity}</p>
                <p><strong>Адрес получателя:</strong> {order.toAddress}</p>
                <p><strong>Вес:</strong> {order.weight} кг</p>
                <p><strong>Дата забора груза:</strong> {order.orderCollectedAt}</p>

                <button className="btn btn-secondary mt-3" onClick={() => navigate("/orders")}>
                    Назад к списку заказов
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;


