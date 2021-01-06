import React, { useEffect, useContext } from 'react';
import '../style/Gallery.scss';
import ImageGallery from 'react-image-gallery';
import alifutImgs from '../assets/AlifutImgsAPI';
import masabsImgs from '../assets/MasaBsImgsAPI';
import masaganImgs from '../assets/MasaGanImgsAPI';
import megalimImgs from '../assets/MegalimImgsAPI';
import sipurImgs from '../assets/SipurImgsAPI';
import Context from './Context';

const Gallery = () => {
    const { gallery, handleClick } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="gallery">
            <div className="buttons">
                <button id="alifut"
                    onClick={() => handleClick("alifut")}
                    className={gallery === "alifut" ? "button selected" : "button"}
                    >אליפות ישראל בדקה
                    
                </button>
                <button id="masa-bs"
                    onClick={() => handleClick("masa-bs")}
                    className={gallery === "masa-bs" ? "button selected" : "button"}
                    >מסע על כנפי הדמיון - בי"ס
                </button>
                <button id="masa-gan"
                    onClick={() => handleClick("masa-gan")}
                    className={gallery === "masa-gan" ? "button selected" : "button"}
                    >מסע על כנפי הדמיון - גנים
                </button>
                <button id="megalim"
                    onClick={() => handleClick("megalim")}
                    className={gallery === "megalim" ? "button selected" : "button"}
                    >מגלים ארצות
                </button>
                <button id="sipur"
                    onClick={() => handleClick("sipur")}
                    className={gallery === "sipur" ? "button selected" : "button"}
                    >שעת סיפור בהמחשה
                </button>
            </div>
            <div className="galleries">
                <div className={gallery === "alifut" ? "imgs show" : "imgs"}>
                    <ImageGallery items={alifutImgs} className={gallery === "alifut" ? "imgs show" : "imgs"}/>
                </div>
                <div className={gallery === "masa-bs" ? "imgs show" : "imgs"}>
                    <ImageGallery items={masabsImgs} className={gallery === "masa-bs" ? "imgs show" : "imgs"}/>
                </div>
                <div className={gallery === "masa-gan" ? "imgs show" : "imgs"}>
                    <ImageGallery items={masaganImgs} className={gallery === "masa-gan" ? "imgs show" : "imgs"}/>
                </div>
                <div className={gallery === "megalim" ? "imgs show" : "imgs"}>
                    <ImageGallery items={megalimImgs} className={gallery === "megalim" ? "imgs show" : "imgs"}/>
                </div>
                <div className={gallery === "sipur" ? "imgs show" : "imgs"}>
                    <ImageGallery items={sipurImgs} className={gallery === "sipur" ? "imgs show" : "imgs"}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;