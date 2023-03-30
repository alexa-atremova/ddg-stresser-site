import React, { useState } from "react";
import open from "../../assets/open.png";
import close from "../../assets/close.png";
import { StyledFAQ } from "./styles";
import images3 from "./../../assets/images3.png";
import images4 from "./../../assets/images4.png";

export default function FAQ({ lang }) {
  const [active, setActive] = useState("");
  return (
    <StyledFAQ>
      <div className="wrapper">
        <img className="backimg3" src={images3} alt="" />
        <img className="backimg4" src={images4} alt="" />
        <div className="text">
          <h1>
            {lang === "ru"
              ? "Часто задаваемые вопросы"
              : "Frequently Asked Questions"}
          </h1>
          <p>
            {lang === "ru"
              ? "В этом разделе мы собрали ответы на часто задаваемые вопросы о нашем боте. Мы стремимся обеспечить максимально полезную и понятную информацию для наших пользователей, чтобы помочь им получить максимальную пользу от нашего сервиса."
              : "In this section, we have compiled answers to frequently asked questions about our bot. We aim to provide the most useful and understandable information for our users to help them get the most out of our service."}
          </p>
        </div>
        <ul>
          <li
            className={active === "first" ? "opened first" : "first"}
            onClick={() =>
              active === "first" ? setActive("") : setActive("first")
            }
          >
            <div className="head">
              <h2>
                {lang === "ru"
                  ? "Что такое стрессер / booter?"
                  : "What is a stresser/booter?"}
              </h2>
              <img
                className="arrow"
                src={active === "first" ? close : open}
                alt=""
              />
            </div>
            <p>
              {lang === "ru"
                ? "IP Stresser - это инструмент, предназначенный для тестирования сети или сервера на надежность. Администратор может запустить стресс-тест, чтобы определить, достаточно ли существующих ресурсов (пропускная способность, процессор и т. д.) для обработки дополнительной нагрузки."
                : "An IP Stresser is a tool designed to test a network or server for reliability. An administrator can launch a stress test to determine whether there are enough existing resources (bandwidth, processor, etc.) to handle additional load."}
            </p>
          </li>
          <li
            className={active === "second" ? "opened second" : "second"}
            onClick={() =>
              active === "second" ? setActive("") : setActive("second")
            }
          >
            <div className="head">
              <h2>
                {lang === "ru"
                  ? "Сколько времени занимает активация моего членства?"
                  : "How long does it take to activate my membership?"}
              </h2>
              <img
                className="arrow"
                src={active === "second" ? close : open}
                alt=""
              />
            </div>
            <p>
              {lang === "ru"
                ? "IP Stresser предлагает автоматизированные услуги, после того, как наши узлы объявляют платеж «полным», вам обычно требуется еще 5-10 инут, чтобы получить приобретенное членство."
                : "IP Stresser offers automated services, after our nodes declare the payment 'full', you usually need another 5-10 minutes to get your purchased membership."}
            </p>
          </li>
          <li
            className={active === "third" ? "opened third" : "third"}
            onClick={() =>
              active === "third" ? setActive("") : setActive("third")
            }
          >
            <div className="head">
              <h2>
                {lang === "ru"
                  ? "В чем разница между Премиум и Обычным?"
                  : "What is the difference between Premium and Non-Premium?"}
              </h2>
              <img
                className="arrow"
                src={active === "third" ? close : open}
                alt=""
              />
            </div>
            <p>
              {lang === "ru"
                ? "Премиум-планы обычно получают в среднем на 300% больше энергии, чем обычные пакеты. Премиум-планы также предоставляют клиентам приоритетное обслуживание поддержки. И они могут использовать специальные методы, подготовленные нашим энгином для премиум-членов."
                : "Premium plans usually get on average 300% more power than regular packages. Premium plans also provide customers with priority support service. And they can use special methods prepared by our engine for premium members."}
            </p>
          </li>
          <li
            className={active === "fifth" ? "opened fifth" : "fifth"}
            onClick={() =>
              active === "fifth" ? setActive("") : setActive("fifth")
            }
          >
            <div className="head">
              <h2>
                {lang === "ru"
                  ? "Могу ли я поделиться своей учетной записью?"
                  : "Can I share my account with someone else?"}
              </h2>
              <img
                className="arrow"
                src={active === "fifth" ? close : open}
                alt=""
              />
            </div>
            <p>
              {lang === "ru"
                ? "Согласно условиям IP Stresser, вы не можете делиться своей учетной записью, своим API или продавать свою учетную запись кому-либо еще. Если система обнаружит, что кто-то использует вашу учетную запись, то она автоматически заблокирует ее, и вы потеряете доступ к своему членству."
                : "According to the IP Stresser's terms, you cannot share your account, API or sell your account to someone else. If the system detects that someone else is using your account, it will automatically block it and you will lose access to your membership."}
            </p>
          </li>
          <li
            className={active === "sixth" ? "opened sixth" : "sixth"}
            onClick={() =>
              active === "sixth" ? setActive("") : setActive("sixth")
            }
          >
            <div className="head">
              <h2>
                {lang === "ru" ? "Почему DDG-STRESSER?" : "Why DDG-STRESSER?"}
              </h2>
              <img
                className="arrow"
                src={active === "sixth" ? close : open}
                alt=""
              />
            </div>
            <p>
              {lang === "ru"
                ? "  DDG STRESSER на самом деле лучший ddos booter или ddos стрессер на рынке! Мы предоставляем решение для всех ваших целей, и мы гарантируем, что вы достигнете их."
                : "DDG STRESSER is actually the best ddos booter or ddos stresser on the market! We provide a solution for all your goals and we guarantee that you will achieve them."}
            </p>
          </li>
        </ul>
      </div>
    </StyledFAQ>
  );
}
