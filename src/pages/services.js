import React from "react"

const services = [
    { name: "Service public 1", status: "up" },
    { name: "Service public 2", status: "down" },
    { name: "Service privé 1", status: "up" },
    { name: "Service privé 2", status: "down" },
]

const Service = ({ name, status }) => (
    <div
        style={{
            border: `2px solid ${status === "up" ? "green" : "red"}`,
            padding: "1rem",
            marginBottom: "1rem",
        }}
    >
        <h3>{name}</h3>
        <p>Status: {status === "up" ? "En ligne" : "Hors ligne"}</p>
    </div>
)

const PublicServices = () => (
    <>
        <h2>Services publics</h2>
        {services
            .filter((service) => service.status === "up")
            .map((service) => (
                <Service key={service.name} {...service} />
            ))}
    </>
)

const PrivateServices = () => (
    <>
        <h2>Services privés</h2>
        {services
            .filter((service) => service.status === "down")
            .map((service) => (
                <Service key={service.name} {...service} />
            ))}
    </>
)

const ServicesPage = () => (
        <><h1>Services hébergés</h1><PublicServices /><PrivateServices /></>
)

export default ServicesPage
