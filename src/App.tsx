import { useRef, useState } from "react";
import { icons, images } from "./assets";
import { pricesRU, pricesUZ } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const App = () => {
  const [active, setActive] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
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

  const addressRef = useRef<HTMLDivElement>(null);
  const connectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.MutableRefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <input type="checkbox" name="" id="hamburger" />
            <label htmlFor="hamburger">
              {active ? (
                <span onClick={() => setActive(false)} className="close"></span>
              ) : (
                <img
                  onClick={() => setActive(true)}
                  src={icons.hamburger}
                  alt=""
                />
              )}
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
                    <a onClick={() => scrollToSection(addressRef)} href="#">
                      {t("header.address")}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection(connectionRef)} href="#">
                      {t("header.connection")}
                    </a>
                  </li>
                  <li>
                    <a onClick={() => scrollToSection(servicesRef)} href="#">
                      {t("header.services")}
                    </a>
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
          <div className="main-inner">
            <div className="main-inner__title">
              <img src={icons.doctorIcon} alt="Иконка доктора" />
              <h1>
                {t("main.name")} <span>{t("main.surname")}</span>
              </h1>
            </div>
            <div className="main-inner__info">
              <ul>
                <li>{t("main.info01")}</li>
                <li>{t("main.info02")}</li>
                <li>{t("main.info03")}</li>
                <li>{t("main.info04")}</li>
              </ul>
              <button onClick={() => scrollToSection(contactsRef)}>
                {t("main.btn")}
              </button>
            </div>
          </div>
        </div>
      </main>

      <section className="prices" ref={servicesRef}>
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

      <section className="armor" ref={addressRef}>
        <div className="armor-inner">
          <div className="armor-inner__title">
            <p>{t("armor.title01")}</p>
          </div>
          <div className="armor-inner__pic">
            <img src={images.armor01} alt="Картинка лор-врача" />
            <img src={images.armor02} alt="Картинка лор-врача" />
          </div>
          <div className="armor-inner__info">
            <ul>
              <li>
                <img src={icons.armorIcon01} alt="Картинка возможностей" />
                <p>{t("armor.info01")}</p>
              </li>
              <li>
                <img src={icons.armorIcon02} alt="Картинка возможностей" />
                <p>{t("armor.info02")}</p>
              </li>
              <li>
                <img src={icons.armorIcon03} alt="Картинка возможностей" />
                <p>{t("armor.info03")}</p>
              </li>
            </ul>
            <h3>{t("armor.title02")}</h3>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="review-inner">
          <h2>{t("review.title")}</h2>
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

      <section className="social" ref={connectionRef}>
        <div className="social-inner">
          <h2>{t("social.title")}</h2>
          <p>{t("social.text")}</p>
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

      <section className="contacts" ref={contactsRef}>
        <div className="contain">
          <div className="contacts-inner">
            <div className="contacts-inner__left">
              <h2>{t("contacts.title")}</h2>
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
                <p>{t("contacts.city")}</p>
                <span>{t("contacts.city")}</span>
                <p>{t("contacts.orientir")}</p>
              </div>
              <p>{t("contacts.time")}</p>
            </div>

            <img src={images.map} alt="Картинка карты" />
            {/*    <YMaps query={{ apikey: API_KEY }}>
              <div className="map">
                <Map
                  defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
                  width="100%"
                  height="400px"
                >
                  <Placemark geometry={[55.751574, 37.573856]} />
                </Map>
              </div>
            </YMaps> */}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-inner__item">
              <h4>{t("footer.itemTitle01")}</h4>
              <p>{t("footer.itemText01")}</p>
            </div>

            <div className="footer-inner__item ">
              <p>{t("footer.itemTitle02")}</p>
              <div className="footer-inner__item_dp">
                <p>
                  <span>{t("footer.itemTitle02DPTitle01")}</span>
                  {t("footer.itemTitle02DPText01")}
                </p>
                <p>
                  <span>{t("footer.itemTitle03DPTitle02")}</span>
                  {t("footer.itemTitle03DPText02")}
                </p>
                <p>
                  <span>{t("footer.itemTitle04DPTitle03")}</span>
                  {t("footer.itemTitle04DPText03")}
                </p>
              </div>
            </div>

            <div className="footer-inner__item ">
              <h4>{t("footer.itemTitle05")}</h4>
              <div className="footer-inner__item_dp">
                <p>
                  <span>{t("footer.itemTitle06DPTitle04")}</span>
                  {t("footer.itemTitle06DPText04")}
                </p>
                <p>
                  <span>{t("footer.itemTitle07DPTitle05")}</span>
                  {t("footer.itemTitle07DPText05")}
                </p>

                <p>
                  <span>{t("footer.itemTitle08DPTitle06")}</span>{" "}
                  {t("footer.itemTitle08DPText06")}
                </p>
                <p>
                  <span>{t("footer.itemTitle09DPTitle07")}</span>
                  {t("footer.itemTitle09DPText07")}
                </p>
              </div>
            </div>

            <div className="footer-inner__item">
              <p>{t("footer.itemTitle10")}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
