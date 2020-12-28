import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.scss';
import Context from './Context';

const Home = () => {
    const { setNavClass } = useContext(Context);

    useEffect(() => {
        setNavClass(window.location.pathname);
      }, []);

    return (
        <div className="home">
            {/* <div className="home-info"> */}
                <div className="home-text">
                    <p>
                        <div className="home-line">
                            יצירתי הוקמה לפני 13 שנים ע"י חן שחם ארז,
                        </div>
                        בוגרת 'בית צבי - בית הספר הגבוה לאומנויות הבמה', בעלת תואר BA בחינוך, הוראה ובימוי תיאטרון מטעם "סמינר הקיבוצים".
                    </p>
                    <p>
                        <div className="home-line">
                            החברה הוקמה במטרה ליצור תכנים יחודיים, מקוריים ואיכותיים לילדים.
                        </div>
                        חוגים לילדים בעלי ערך מוסף, כגון: העצמת הילד, חיזוק הביטחון העצמי, פיתוח כישורים אישיים וחברתיים ועוד.
                    </p>
                    <p>
                        <div className="home-line">
                            אנו עוסקים בחוגים לילדים למהלך השנה וגם לחגים ולקייטנות,
                        </div>
                        חוגי תיאטרון, חוגי תנועה, חוגים ספורטיביים, תיאטרון בובות, מסביב לעולם, ועוד.
                    </p>
                    <p>
                        <div className="home-line">
                            עבודתנו היא מול
                        </div>
                        פעוטונים, גנים, בתי ספר, צהרונים, מועדוניות - במגזר הפרטי ובמגזר הציבורי (עיריות, מועצות ומתנ“סים). באמתחתנו מדריכי חוגים איכותיים ומקצועיים ביותר. המדריכים הינם אנשי חינוך ושחקנים בעלי ניסיון רב עם ילדים, שעברו הכשרה מקיפה ב'יצירתי'.
                    </p>
                </div>
                <div className="home-img">
                    <img src="../../assets/images/main.png" alt="סיפור בהמחשה" />
                </div>
            {/* </div> */}
        </div>
    )
}

export default Home;