export default function Navbar() {
    return(
        <header>
            <nav className="nav-tdev flex space-grotesk-600">
                <div className="nav-container">
                    <a href="/"><img src="../../public/t-dev.svg" alt="" className="nav-logo"/></a>
                    <a href="#menu" className="nav-menu">
                        <img src="/src/assets/burguer-dark.png" alt="Ícono menú hamburguesa" className="nav-icon"/>
                    </a>

                    <a href="#" className="nav-menu nav-menu-second">
                        <img src="src/assets/cross-dark.png" alt="Ícono cerrar menú hamburguesa" className="nav-icon" />
                    </a>

                    <ul className="nav-dropdown" id="menu">
                        <a href="#" className="nav-dropdown-link">
                            <img src="src/assets/serv-dark.png" alt="Icono de servicios" />
                            <span>Servicios</span>
                        </a>
                        <a className="nav-dropdown-link">
                            <img src="src/assets/me-dark.png" alt="Icono de persona" />
                            <span>Sobre mí</span>
                        </a>
                        <a className="nav-dropdown-link">
                            <img src="src/assets/job-dark.png" alt="Icono de maletín" />
                            <span>Proyectos</span>
                            <img src="src/assets/down-arrow-dark.png" alt="Flecha hacia abajo de submenú" id="nav-dropdown-img"/>
                            <input type="checkbox" name="" id="" className="nav-dropdown-check" />
                        </a>
                        <div className="nav-dropdown-content">
                            <ul className="nav-dropdown-sub">
                                <li className="nav-dropdown-li">
                                    <a href="#" className="nav-dropdown-anchor">Programación</a>
                                </li>
                                <li className="nav-dropdown-li">
                                    <a href="" className="nav-dropdown-anchor">Diseño Gráfico</a>
                                </li>
                                <li className="nav-dropdown-li">
                                    <a href="" className="nav-dropdown-anchor">Redes Sociales</a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

