import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import OrderDetails from "./components/OrderDetails";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<OrderForm  />} />
                    <Route path="/orders" element={<OrderList  />} />
                    <Route path="/orders/:id" element={<OrderDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
