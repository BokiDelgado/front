import {Divider } from "@heroui/react";

export default function CardDescription() {
    return (
        <div className="card">
            <h2 className="card-title">Explore Your University</h2>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cum laborum numquam ea, accusamus porro itaque id quibusdam maxime voluptate qui doloribus, amet reprehenderit! Facere labore sunt voluptas consequatur modi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt iure quasi voluptatum molestias exercitationem expedita cumque maiores, eligendi consequuntur illo. Error mollitia non tempore laborum nam facilis corporis quibusdam.
            </p>
            <Divider/>
            <div className="card-reminder">
            <span className="card-reminder-item">Entrega: Viernes a las 16:00 hrs</span>
            <span className="card-reminder-item">Canal: MEET</span>
            <span className="card-reminder-item">Fecha inicio de proyecto: Enero 01, 2025</span>
            <span className="card-reminder-item">Fecha fin de proyecto: Enero 31, 2025</span>
            </div>
        </div>
    )
}