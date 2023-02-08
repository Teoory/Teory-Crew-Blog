import React from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    return (
    <div>
        {/* Start-page-top */}
        <div className="page-top">
          <div id='show_bg_2'></div>
          <div className="bottom-left">
              <h1>Teory Crew'e Hoş Geldiniz!</h1>
              <Link to="/" className="li-item"><i className="fa-brands fa-42-group"></i>DETAYLI BILGI →</Link>
          </div>
        </div>
        {/* End-Page-Top */}
        
        {/* Start-Programs */}
        <div className="programs">
            <div className="pm-gr">
                <div className="program-item">
                    <Link to="/blogs" className='pg-text'>
                        <h5><i className="fa-solid fa-square-rss fa-2x"></i> BLOG</h5>
                        <p className="text-1">Yeni içeriklerin ve fikirlerin buluşma noktası.</p>
                        <Link to="/" className="pm-item"> DETAYLI BILGI →</Link>
                    </Link>
                </div>

                <div className="program-item">
                    <Link to="/anketler" className='pg-text'>
                        <h5><i className="fa-solid fa-circle-question fa-2x"></i> ANKETLER</h5>
                        <p className="text-1">Her konuda çeşitli anketler ve sınavlar.</p>
                        <Link to="/" className="pm-item"> DETAYLI BILGI →</Link>
                    </Link>
                </div>

                <div className="program-item">
                    <Link to="/" className='pg-text'>
                        <h5><i className="fa-solid fa-comment-dots fa-2x"></i> YORUMLAR</h5>
                        <p className="text-1">Sitemize gönderilen yorumlar.</p>
                        <Link to="/" className="pm-item"> DETAYLI BILGI →</Link>
                    </Link>
                </div>

                <div className="program-item">
                    <Link to="/" className='pg-text'>
                        <h5><i className="fa-solid fa-circle-arrow-right fa-2x"></i> İLETİŞİM</h5>
                        <Link className="pm-item"> DETAYLI BILGI →</Link>
                    </Link>
                </div>

                <div className="left">            </div>
            </div>
        </div>
        {/* End-Programs */}

        
        {/* Start-Activities */}
        <div className="activites">
            <div className="ac-top"><h1>yenilikler</h1></div>
            <div className="ac-items">
                <div className="ac-item"> 
                    <img alt="ac-img" className="ac-img" />
                    <h2 className="ac-name">BLOG Artık Kullanılabilir!<span className="badge">Yeni</span></h2>
                    <p>İçeriklerimin ve keşfettiğim içeriklerin paylaşıldığı küçük odacık…</p>
                    <Link to="/" className="ac-href"> <h4>İÇERİĞE ULAŞMAK İÇİN →</h4></Link>
                </div>

                <div className="ac-item"> 
                    <img alt="ac-img" className="ac-img" />
                    <h2 className="ac-name">Anketler Artık Kullanılabilir!<span className="badge">Yeni</span></h2>
                    <p>Tam olarak bu odada ne olduğunu ben de bilmiyorum burası tam bir gizemli kutu. Burada her an her şey olabilir. Harry Poter olacakken belki aniden Bill Gates gibi bir yazılımcı olabilirsin…</p>
                    <Link to="/" className="ac-href"> <h4>İÇERİĞE ULAŞMAK İÇİN →</h4></Link>
                </div>
                <div className="ac-item" id="ac-item-right">
                    <img alt="ac-img" className="ac-img" />
                    <h2 className="ac-name">Yorumlar Artık Kullanılabilir!<span className="badge">Yeni</span></h2>
                    <p>Burası ortak salon, burada ne yapacağın tamamen sana kalmış. Ister yazılım ile ilgili yorum yap ister mitoloji burada sana karışacağımız tek konu NSFW paylaşım yapmaman! bu tarz paylaşım yapanlar sitemizde ciddi yaptırımlara uğrar bunu unutmamalısın!</p>
                    <Link to="/" className="ac-href"> <h4>İÇERİĞE ULAŞMAK İÇİN →</h4></Link>
                </div>

            </div>
        </div>
        {/* End-Activities */}

        {/* Start-Guncel-Post-Sayac */}
        <div className="sayac">
        <div className="post-sayac">
            <div className="sayac-col">
                <div className="sayac-card">
                    <p><i className="fa fa-user"></i></p>
                    <h3>2+</h3>
                    <p>BLOG</p>
                </div>
            </div>
            <div className="sayac-col">
                <div className="sayac-card">
                    <p><i className="fa fa-check"></i></p>
                    <h3>2+</h3>
                    <p>ANKET</p>
                </div>
            </div>
            <div className="sayac-col">
                <div className="sayac-card">
                    <p><i className="fa fa-comment-dots"></i></p>
                    <h3>10+</h3>
                    <p>YORUM</p>
                </div>
            </div>
            <div className="sayac-col">
                <div className="sayac-card">
                    <p><i className="fa fa-smile"></i></p>
                    <h3>100+</h3>
                    <p>İCERİK</p>
                </div>
            </div>
        </div>
        </div>
        {/* End-Guncel-Post-Sayac */}
    </div>
    
    )
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("navbar").style.backgroundColor = "#444444";
      // document.getElementById("logo").src = "/assets/Groupe 16.svg";
    } else {
      document.getElementById("navbar").style.background = "";
      // document.getElementById("logo").src = "/assets/Groupe 7.svg";
    }
    if ( document.body.clientWidth < 768 ) {
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("navbar").style.background = "rgb(0, 0, 0, 0.15)";
    }
}

export default HomePage;