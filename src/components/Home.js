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
            <div className="home-info">
                <div className="home-text">
                    <h4>יצירתי הוקמה לפני 13 שנים ע"י חן שחם ארז,</h4>
                    <p>
                        בוגרת 'בית צבי - בית הספר הגבוה לאומנויות הבמה', בעלת תואר BA בחינוך, הוראה ובימוי תיאטרון מטעם "סמינר הקיבוצים".
                    </p>
                    <h4>
                        החברה הוקמה במטרה ליצור תכנים יחודיים, מקוריים ואיכותיים לילדים.
                    </h4>
                    <p>
                        חוגים לילדים בעלי ערך מוסף, כגון: העצמת הילד, חיזוק הביטחון העצמי, פיתוח כישורים אישיים וחברתיים ועוד.
                    </p>
                    <h4>
                        אנו עוסקים בחוגים לילדים למהלך השנה וגם לחגים ולקייטנות,
                    </h4>
                    <p>
                        חוגי תיאטרון, חוגי תנועה, חוגים ספורטיביים, תיאטרון בובות, מסביב לעולם, ועוד.
                    </p>
                    <h4>
                        עבודתנו היא מול
                    </h4>
                    <p>
                        פעוטונים, גנים, בתי ספר, צהרונים, מועדוניות - במגזר הפרטי ובמגזר הציבורי (עיריות, מועצות ומתנ“סים). באמתחתנו מדריכי חוגים איכותיים ומקצועיים ביותר. המדריכים הינם אנשי חינוך ושחקנים בעלי ניסיון רב עם ילדים, שעברו הכשרה מקיפה ב'יצירתי'.
                    </p>
                </div>
                    <img className="main" src="../../assets/images/main.png" alt="תמונות מחוגים" />
            </div>
                {/* <div className="home-img">
                    <img src="../../assets/images/main-row.png" alt="סיפור בהמחשה" />
                </div> */}
                {/* <img className="logo" src="../../assets/images/chenLogo.png" alt="לוגו יצירתי" /> */}
        </div>
    )
}

export default Home;