import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Контакты</h5>
            <p>Email: info@example.com</p>
            <p>Телефон: +1 (234) 567-890</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Быстрые ссылки</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Подписка на новости</h5>
            <form>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Ваш email"
              />
              <button type="submit" className="btn btn-primary">
                Подписаться
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
