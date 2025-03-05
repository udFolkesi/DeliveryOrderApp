import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">Delivery Order System</Link>
                <div>
                    <Link className="btn btn-light me-2" to="/">Создать заказ</Link>
                    <Link className="btn btn-light" to="/orders">Список заказов</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
