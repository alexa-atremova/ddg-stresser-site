import React, { useState } from "react";
import open from "../../assets/open.png";
import close from "../../assets/close.png";
import { StyledFAQ } from "./styles";

export default function FAQ() {
  const [active, setActive] = useState("");
  return (
    <StyledFAQ>
      <div className="wrapper">
        <div className="text">
          <h1>Часто задаваемые вопросы</h1>
          <p>
            В этом разделе мы собрали ответы на часто задаваемые вопросы о нашем
            боте. Мы стремимся обеспечить максимально полезную и понятную
            информацию для наших пользователей, чтобы помочь им получить
            максимальную пользу от нашего сервиса.
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
              <h2>Что такое стрессер / booter?</h2>
              <img
                className="arrow"
                src={active === "first" ? close : open}
                alt=""
              />
            </div>
            <p>
              IP Stresser - это инструмент, предназначенный для тестирования
              сети или сервера на надежность. Администратор может запустить
              стресс-тест, чтобы определить, достаточно ли существующих ресурсов
              (пропускная способность, процессор и т. д.) для обработки
              дополнительной нагрузки.
            </p>
          </li>
          <li
            className={active === "second" ? "opened second" : "second"}
            onClick={() =>
              active === "second" ? setActive("") : setActive("second")
            }
          >
            <div className="head">
              <h2>Сколько времени занимает активация моего членства?</h2>
              <img
                className="arrow"
                src={active === "second" ? close : open}
                alt=""
              />
            </div>
            <p>
              IP Stresser предлагает автоматизированные услуги, после того, как
              наши узлы объявляют платеж «полным», вам обычно требуется еще 5-10
              минут, чтобы получить приобретенное членство.
            </p>
          </li>
          <li
            className={active === "third" ? "opened third" : "third"}
            onClick={() =>
              active === "third" ? setActive("") : setActive("third")
            }
          >
            <div className="head">
              <h2>В чем разница между Premium и Non-Premium?</h2>
              <img
                className="arrow"
                src={active === "third" ? close : open}
                alt=""
              />
            </div>
            <p>
              Премиум-планы обычно получают в среднем на 300% больше энергии,
              чем обычные пакеты. Премиум-планы также предоставляют клиентам
              приоритетное обслуживание поддержки. И они могут использовать
              специальные методы, подготовленные нашим энгином для
              премиум-членов.
            </p>
          </li>
          <li
            className={active === "fifth" ? "opened fifth" : "fifth"}
            onClick={() =>
              active === "fifth" ? setActive("") : setActive("fifth")
            }
          >
            <div className="head">
              <h2>Могу ли я поделиться своей учетной записью с кем-то еще?</h2>
              <img
                className="arrow"
                src={active === "fifth" ? close : open}
                alt=""
              />
            </div>
            <p>
              Основываясь на условиях IP Stresser, вы не можете делиться своей
              учетной записью, делиться своим API или продавать свою учетную
              запись кому-либо еще. Если система обнаружит такую учетную запись,
              она автоматически заблокирует учетную запись, и вы потеряете
              доступ к своему членству.
            </p>
          </li>
          <li
            className={active === "sixth" ? "opened sixth" : "sixth"}
            onClick={() =>
              active === "sixth" ? setActive("") : setActive("sixth")
            }
          >
            <div className="head">
              <h2>Почему DDG-STRESSER?</h2>
              <img
                className="arrow"
                src={active === "sixth" ? close : open}
                alt=""
              />
            </div>
            <p>
              DDG STRESSER на самом деле лучший ddos booter или ddos стрессер на
              рынке! Мы предоставляем решение для всех ваших целей, и мы
              гарантируем, что вы достигнете их.
            </p>
          </li>
        </ul>
      </div>
    </StyledFAQ>
  );
}
