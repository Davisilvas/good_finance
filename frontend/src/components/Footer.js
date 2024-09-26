import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer id='footer'>
            <section id='footer-section-one'>
                <span>contato@davisantos.dev.br</span>
                <span>24 993287911</span>
                <span>davisantos.dev.br</span>
            </section>
            <section id='footer-section-two'>
                Developed by Davi Santos
            </section>
            <section id='footer-section-three'>
                <span>teste</span>
            </section>
            {/* maybe do 3 sections here, link to my curriculum, links and contact */}
        </footer>
    )
}

export default Footer