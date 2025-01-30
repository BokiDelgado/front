import './UserTeam.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from './../../components/UserTeam/SearchIcon';
import ResourceTable from './../../components/UserTeam/ResourceTable';
import CardDescription from '../../components/UserTeam/CardDescription';
import { Avatar, button, Divider, Input, User } from "@heroui/react";
import React, { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { faProjectDiagram, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";


export default function UserTeam() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            {/* Contenedor */}
            <div className='userTeam-container'>

                {/* Sidebar */}
                <aside
                    className={`sidebar ${isSidebarVisible ? "sidebar-expanded" : "sidebar-collapsed"} 
                  ${isMobile && !isSidebarVisible ? "hidden" : "not-hidden"}
                  ${isSidebarVisible && isMobile ? 'isMobile' : 'notMobile'}
                  `}
                >
                    <div>
                        {(isSidebarVisible && isMobile) &&
                            (<button className="button-close" onClick={toggleSidebar}>X</button>)
                        }
                    </div>
                    <div className="sidebar-toggle-button">
                        <button className={`hamburger-menu-btn-expanded ${isMobile ? "hidden" : 'not-hidden'}
                      }`} onClick={toggleSidebar}>
                            ☰
                        </button>
                    </div>
                    <div className="sidebar-content">
                        {isSidebarVisible && (
                            <>
                                <div >
                                    <p className="sidebar-greeting">Bienvenido de nuevo, Sofia</p>
                                    <span className="sidebar-last-update">
                                        Último movimiento: Enero 11, 2025 a las 12:30 AM
                                    </span>
                                </div>
                                <nav className="sidebar-nav">
                                    <ul className="nav-list">
                                        <li className="nav-item">
                                            <Link to="/user" className="nav-link">
                                                <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/projects" className="nav-link">
                                                <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" />
                                                Tareas
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/user-team" className="nav-link">
                                                <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                                                Equipo
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item">
                              <Link to="/members" className="nav-link">
                                <FontAwesomeIcon icon={faUser} className="nav-icon" />
                                Miembros
                              </Link>
                            </li> */}
                                    </ul>

                                    <ul className='closed'>
                                        <li className="nav-item_closed">
                                            <Link to="/iniciar-sesion" className="nav-link_closed">
                                                Cerrar Sesión
                                            </Link>
                                        </li>
                                    </ul>

                                </nav>
                            </>
                        )}
                    </div>
                </aside>


                {/* Main-container */}
                <main className='main-content'>

                    <header className="header">
                        <button className="hamburger-menu-btn" onClick={toggleSidebar}>
                            ☰
                        </button>
                        <div className="search-bar">
                            {/* Botón de menú para móviles */}

                            <Input
                                isClearable
                                classNames={{
                                    label: "input-label text-gray-500 dark:text-white/90",
                                    input: [
                                        "input-field text-gray-800 dark:text-white/80",
                                        "placeholder:text-gray-500 dark:placeholder:text-white/60",
                                    ],
                                    innerWrapper: "input-wrapper bg-transparent",
                                    inputWrapper: [
                                        "input-wrapper-bg bg-gray-200/50",
                                        "dark:bg-gray-600/60",
                                        "backdrop-blur-xl",
                                        "backdrop-saturate-200",
                                        "hover:bg-gray-200/70",
                                        "dark:hover:bg-gray-700/70",
                                        "focus:bg-gray-200/50",
                                        "dark:focus:bg-gray-600/60",
                                        "!cursor-text",
                                    ],
                                }}
                                // className="hidden"
                                //label="Buscar"
                                placeholder="Buscar"
                                radius="lg"
                                startContent={
                                    <SearchIcon className="search-icon text-gray-500 mb-0.5 dark:text-white/90 text-gray-400 pointer-events-none flex-shrink-0" />
                                }
                            />
                        </div>

                        {/* Acciones en el header */}
                        <div className="container-actions">
                            {/* <div className="search-icon">
                                            <FontAwesomeIcon icon={faSearch} size="lg" className="search-icon" />
                                          </div> */}

                            <div className="notifications">
                                <FontAwesomeIcon icon={faBell} size="2x" />
                            </div>

                            <div className="user-info">
                                <User
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                    }}
                                    description="Diseñadora"
                                    name="Sofía Vazquez"
                                />
                            </div>
                        </div>
                    </header>


                    {/* Secciones */}

                    <section className="projects-section">
                        <div className="projects-container">
                            <h2 className="section-title">Equipo de Trabajo</h2>
                            <ul className="projects-list">
                                {[...Array(4)].map((_, index) => (
                                    <React.Fragment key={index}>
                                        <li className="project-item">
                                            <div className="project-details">
                                                <div className="project-avatar">
                                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                                </div>
                                                <div className="project-info">
                                                    <h3 className="project-member">Guadalupe Villa</h3>
                                                    <p className="project-rol">Programadora</p>
                                                </div>
                                            </div>
                                            {/* <span className="project-due-date">13/03/25</span> */}
                                        </li>
                                        <Divider />
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>

                        <div className="projects-card">
                            {/* <div className="project-chart">Chart Avances Proyectos</div> */}
                            <CardDescription />
                        </div>
                    </section>

                    <section className="resource-section">
                        <h2 className="section-title">Recursos</h2>
                        <div className="resource-table">
                            < ResourceTable />
                        </div>
                    </section>

                </main>

            </div>

        </>
    )
}