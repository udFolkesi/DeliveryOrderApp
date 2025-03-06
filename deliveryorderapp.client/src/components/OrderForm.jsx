import { useState } from 'react';
import { createOrder } from "../api/orderService";

const OrderForm = () => {
    const [order, setOrder] = useState({
        fromCity: '',
        fromAddress: '',
        toCity: '',
        toAddress: '',
        weight: '',
        orderCollectedAt: '',
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createOrder(order);
            setSuccessMessage("Заказ успешно создан.");
            setOrder({
                fromCity: '',
                fromAddress: '',
                toCity: '',
                toAddress: '',
                weight: '',
                orderCollectedAt: '',
            });

            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="card shadow p-4">
                <h3 className="text-center mb-3">Создание заказа</h3>

                {successMessage && (
                    <div className="alert alert-success text-center">{successMessage}</div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Город отправителя</label>
                            <input type="text" name="fromCity" className="form-control" value={order.fromCity} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Адрес отправителя</label>
                            <input type="text" name="fromAddress" className="form-control" value={order.fromAddress} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Город получателя</label>
                            <input type="text" name="toCity" className="form-control" value={order.toCity} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Адрес получателя</label>
                            <input type="text" name="toAddress" className="form-control" value={order.toAddress} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Вес груза, кг</label>
                            <input type="number" name="weight" className="form-control" value={order.weight} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Дата забора груза</label>
                            <input type="date" name="orderCollectedAt" className="form-control" value={order.orderCollectedAt} onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Создать заказ</button>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
