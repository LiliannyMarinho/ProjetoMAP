import React from 'react';
import '../styles/contato.css';
import mapa from '../assets/mapa.jpeg';

const Contato = () => {
    return (
        <>
            <div className="column left">
                <div className="text">Entre em contato</div>
                <p>Tem alguma dúvida, sugestão ou precisa de suporte? Entre em contato através de um dos
                    métodos abaixo ou também pode preencher o formulário abaixo com sua mensagem e entraremos em
                    contato com você. Agradeço o interesse e aguardo seu contato!</p>
                <div className="icons">
                    <div className="row">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <div className="head">E-mail</div>
                            <div className="sub-title">patanaporta@gmail.com</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <div className="head">Endereço:</div>
                            <div className="sub-title">R. Alfredo Lustosa Cabral, s/n - Salgadinho, Patos - PB, 58706-550, Paraíba</div>
                        </div>
                    </div>
                </div>
                <div className='mapa'><img src={mapa} alt="Mapa de localização" className="info-image" /></div>
            </div>
            <div className="column right">
                <div className="text">Envie-me uma mensagem</div>
                <div className="my-form-status"></div>
                <form action="" method="POST">
                    <div className="fields">
                        <div className="field name">
                            <input type="text" name="name" placeholder="Nome" required />
                        </div>
                        <div className="field email">
                            <input type="email" name="email" placeholder="E-mail" required />
                        </div>
                    </div>
                    <div className="field">
                        <input type="text" name="subject" placeholder="Assunto" required />
                    </div>
                    <div className="field textarea">
                        <textarea name="message" placeholder="Mensagem" required></textarea>
                    </div>
                    <div className="button-area">
                        <button type="submit" id="my-form-button">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contato;