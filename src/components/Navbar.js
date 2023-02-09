export function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-success'>
                <ul className='container navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='https://home24h.epizy.com'><h3 className="text-center text-dark bg-warning p-4 rounded"><i className="bi bi-house-door"></i> Quay lại Home24h</h3></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='https://home24h.epizy.com/admin/'><h3 className="text-center text-dark bg-warning p-4 rounded"><i className="bi bi-person-lock"></i> Quay lại trang quản trị</h3></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}