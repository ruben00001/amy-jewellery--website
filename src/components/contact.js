import React from 'react';

const Contact = () => (
  <div className="container--contact">
    <img className="contact-img" src={require("../img/22118947_10159649787355647_624928218_n (1).jpg")} alt="jewellery" />
    <div className="container--contact-details">
        <p>amy@amyrodriguez.co.uk</p>
        <a target="__blank" href="https://www.instagram.com/amyrodriguezjewellery/">
            <p>@amy_rodriguez___</p>
        </a>
    </div>
  </div>
);

export default Contact;