import "./style.scss";
import { icons, images } from "./assets";
import { pricesRU, pricesUZ } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  const prices = i18n.language === "ru" ? pricesRU : pricesUZ;
  const openTable = () => {
    if (i18n.language === "ru") {
      window.open(
        "https://docs.google.com/spreadsheets/d/10oHQPX4omSs89IofSbrhePtunuoE6aq4cAZWlHD_vpw/edit?pli=1#gid=1559566287"
      );
    }
    window.open(
      "https://docs.google.com/spreadsheets/d/10oHQPX4omSs89IofSbrhePtunuoE6aq4cAZWlHD_vpw/edit?pli=1#gid=0"
    );
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <input type="checkbox" name="" id="hamburger" />
            <label htmlFor="hamburger">
              <img src={icons.hamburger} alt="" />
            </label>
            <div className="header-inner__hamburger">
              <div className="header-inner__hamburger_lang">
                <label htmlFor="language">
                  {i18n.language === "uz" ? (
                    <img src={icons.uz} alt="" />
                  ) : (
                    <img src={icons.ru} alt="" />
                  )}
                  Язык:
                </label>
                <select
                  name="language"
                  defaultValue="uz"
                  id="language"
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <option value="uz">Узбекский</option>
                  <option value="ru">Русский</option>
                </select>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#">{t("header.address")}</a>
                  </li>
                  <li>
                    <a href="#">{t("header.connection")}</a>
                  </li>
                  <li>
                    <a href="#">{t("header.services")}</a>
                  </li>
                </ul>
              </nav>
              <div className="header-inner__hamburger_adress">
                <a href="#">+998 97 710 16 92</a>
                <p>{t("header.street")}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="main-inner"></div>
        </div>
      </main>

      <section className="prices">
        <div className="container">
          <div className="prices-inner">
            <ul>
              {prices.map((price) => (
                <li key={price.id}>
                  <img src={price.images} alt={(price.images, price.title)} />
                  <span>
                    {t("prices.price")}: {price.price} (so‘m)
                  </span>
                  <h3>{price.title}</h3>
                  <p>{price.description}</p>
                </li>
              ))}
            </ul>

            <button onClick={openTable}>{t("prices.btn")}</button>
          </div>
        </div>
      </section>

      <section className="armor">
        <div className="armor-inner">
          <div className="armor-inner__title">
            <p>
              Bizning kichik LOR-klinikamiz Yunusobodda. Biz yuqori malakali
              yordam va istalgan vaqtda kun yoki tun patsiyentlarni samarali
              davolashni kafolatlaymiz. Biz o‘z xizmatlarimiz sifatiga
              ishonchimiz komil va sizga tez fursatda sog‘ayib, to‘liq hayotga
              qaytishingizni va‘da qilamiz.
            </p>
          </div>
          <div className="armor-inner__pic">
            <img src={images.armor01} alt="Картинка лор-врача" />
            <img src={images.armor02} alt="Картинка лор-врача" />
          </div>
          <div className="armor-inner__info">
            <ul>
              <li>
                <img src={icons.armorIcon01} alt="Картинка возможностей" />
                <p>Ish vaqti 24/7</p>
              </li>
              <li>
                <img src={icons.armorIcon02} alt="Картинка возможностей" />
                <p>Ish vaqti 24/7</p>
              </li>
              <li>
                <img src={icons.armorIcon03} alt="Картинка возможностей" />
                <p>Ish vaqti 24/7</p>
              </li>
            </ul>
            <h3>
              Biz tushunamizki, ishonchingizni qozonadigan mutaxassisni topish
              qiyin. Shuning uchun biz doimiy ravishda o‘z kasbiy va ijtimoiy
              ko‘nikmalarimizni rivojlantirib, siz konsultatsiya va muolajalar
              vaqti da o‘zingizni ishonchli va qulay his qilishingiz uchun
              harakat qilamiz.
            </h3>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="review-inner">
          <h2>Bizning bemorlarimizning sharhlari</h2>
          <div className="review-inner__content">
            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              pagination
              navigation
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <p>
                    спасибо за быструю и качественную медицинскую помощь. Нос
                    промыли - что надо. Теперь хоть могу дышать и даже говорить
                  </p>
                  <img src={icons.user} alt="Иконка пользователь" />
                  <h4>Аслан Иноятов</h4>
                  <a href="#">clinics.uz</a>
                  <img src={icons.link} alt="" className="link" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <p>
                    спасибо за быструю и качественную медицинскую помощь. Нос
                    промыли - что надо. Теперь хоть могу дышать и даже говорить
                  </p>
                  <img src={icons.user} alt="Иконка пользователь" />
                  <h4>Аслан Иноятов</h4>
                  <a href="#">clinics.uz</a>

                  <img src={icons.link} alt="" className="link" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="social">
        <div className="social-inner">
          <h2>Bizning ijtimoiy tarmoqlar</h2>
          <p>
            LOR kasalliklarining oldini olish haqida foydali ma‘lumotlar va
            boshqalar
          </p>
          <ul>
            <li>
              <a href="#">
                <img src={icons.instagram} alt="Иконка инстраграм" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.facebook} alt="Иконка фейсбук" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.telegram} alt="Иконка телеграм" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.youtube} alt="Иконка ютуб" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="contacts">
        <div className="contain">
          <div className="contacts-inner">
            <div className="contacts-inner__left">
              <h2>Aloqa</h2>
              <ul>
                <li>
                  <a href="#">+998 97 710 16 92</a>
                </li>
                <li>
                  <a href="#">+998 97 710 16 92</a>
                </li>
                <li>
                  <a href="#">+998 97 710 16 92</a>
                </li>
              </ul>
              <a href="#">ali.med.xz1991@gmail.com</a>
              <div className="address">
                <p>Toshkent, Yunusobod 15-chi kv,</p>
                <span>Ahmad Donish ko‘chasi, 7-uy.</span>
                <p>Orientir: "Turkiston" metrosi</p>
              </div>
              <p>Ish vaqti: 24/7</p>
            </div>

            <img src={images.map} alt="Картинка яндекс карты" />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-inner__item">
              <h4>
                Alisher Bahromovich Qurbonovning LOR-xirurgiya klinikasi:
                Sog'lig'ingiz ishonchli qo'llarda
              </h4>
              <p>
                Yunusobod, Toshkentning yuragida joylashgan bizning LOR
                kasalliklari klinikamizga xush kelibsiz. Bu yerda, sohaning
                yetakchi mutaxassisi, doktor Alisher Bahromovich Qurbonov
                rahbarligida, biz quloqlar, burun va tomog'ning kasalliklarini
                aniqlash, davolash va oldini olish bo'yicha keng ko'lamli
                xizmatlarni taklif etamiz. Bizning klinikamiz kechayu kunduz
                ishlaydi, sizga qulay vaqtda yuqori sifatli tibbiy yordamga
                kirish imkoniyatini ta'minlaydi.
              </p>
            </div>

            <div className="footer-inner__item ">
              <h4>Keng ko'lamli LOR xizmatlari</h4>
              <p>
                Bizning klinikamiz gajmorit, sinusit, adenoidlar, otit kabi
                kasalliklarni davolashdan tashqari, boshqa LOR muammolari uchun
                ham to'liq xizmatlarni taklif etadi. Biz eng zamonaviy
                diagnostika va davolash usullaridan foydalanib, bemorlarimiz
                uchun eng yaxshi natijalarga erishishni maqsad qilamiz:
              </p>
              <div className="footer-inner__item_dp">
                <p>
                  <span>Gajmorit va sinusitni davolash:</span>
                  Innovatsion yondashuvlar yordamida biz burun bo'shliqlarining
                  yallig'lanishini samarali tarzda davolaymiz, takroriy
                  kasallanish xavfini kamaytiramiz.
                </p>
                <p>
                  <span>Adenoidlarni olib tashlash va otitni davolash:</span>
                  Kam invaziv texnikalardan foydalanib, biz bolalar va kattalar
                  bemorlarni adenoidlar va quloq yallig'lanishlari muammolaridan
                  muvaffaqiyatli davolaymiz.
                </p>
                <p>
                  <span>Zamonaviy LOR kasalliklarini davolash usullari:</span>
                  Endoskopik operatsiyalar, lazer va radioto'lqinli usullar
                  kabi, tiklanish davrini minimal darajaga tushiradigan va
                  davolashning yuqori samaradorligini ta'minlaydigan.
                </p>
              </div>
            </div>

            <div className="footer-inner__item ">
              <h4>Bizning afzalliklarimiz</h4>
              <div className="footer-inner__item_dp">
                <p>
                  <span>Kechayu kunduz ishlash:</span>
                  Har qanday vaqtda yordam berishga tayyorligimiz - bizning
                  ustuvorligimiz.
                </p>
                <p>
                  <span>Tajribali mutaxassis:</span>
                  Doktor Qurbonov otolaringologiya sohasida boy tajribaga va
                  chuqur bilimga ega, bu esa bizga eng so'nggi ilmiy yutuqlarga
                  asoslangan davolashni taklif etish imkonini beradi.
                </p>

                <p>
                  <span>Shaxsiy yondashuv:</span> Biz har bir bemorga individual
                  e'tibor beramiz, ularning noyob ehtiyoj va sharoitlariga eng
                  mos keladigan davolash rejalarini ishlab chiqamiz.
                </p>
                <p>
                  <span>Yuqori texnologiyali uskunalar: </span> Bizning
                  klinikamiz aniq diagnostika va samarali davolash uchun
                  zamonaviy tibbiy uskunalarga ega.
                </p>
              </div>
            </div>

            <div className="footer-inner__item">
              <p>
                Doktor Qurbonovning klinikasida siz nafaqat professional tibbiy
                yordam, balki har bir davolanish bosqichida g'amxo'rlik va
                qo'llab-quvvatlashni topasiz. Bizning maqsadimiz - siz va
                yaqinlaringizga Toshkentdagi eng yaxshi LOR xizmatlariga
                kirishni ta'minlash, shunda siz noqulaylik va og'riqsiz to'liq
                hayot kechirishingiz mumkin. Agar siz LOR kasalliklarini
                davolashda malakali yordam izlayotgan bo'lsangiz, bizning
                klinikamizga murojaat qilishingizdan tortinmang. Biz sizga
                kechayu kunduz yordam berish uchun bu yerdamiz. Qabulga yozilish
                yoki qo'shimcha ma'lumot olish uchun bugun biz bilan bog'laning.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
