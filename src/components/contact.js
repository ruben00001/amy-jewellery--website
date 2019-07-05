import React from 'react';

const Contact = () => (
  <div className="container--contact">
    <img className="contact-img" src={require("../img/22118947_10159649787355647_624928218_n (1).jpg")} alt="jewellery" />
    <div className="container--contact-details">
        <p className="container--contact-details_email">amy@amyrodriguez.co.uk</p>
        <a className="container--contact-details_insta" target="__blank" href="https://www.instagram.com/amyrodriguezjewellery/">
            <img src={require("../img/IG_Glyph_Fill.png")}></img>
        </a>
    </div>
  </div>
);

export default Contact;