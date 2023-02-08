import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="ft-top">
                <div className="ft-top-tx">
                    <Link to="/" className="ft-href">Hakkımda</Link>
                    <Link to="/" className="ft-href">Blog</Link>
                    <Link to="/" className="ft-href">Anketler</Link>
                    <Link to="/" className="ft-href">Yorumlar</Link>
                    <Link to="/" className="ft-href">SearchFinder</Link>
                    <Link to="/" className="ft-href">İletişim</Link>
                    <h6>© 2022 Sitemizin tüm hakları gizlidir.</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;