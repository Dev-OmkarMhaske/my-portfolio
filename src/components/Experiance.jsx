import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import tailwindcss from "../../public/tailwindcss.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import android from "../../public/android.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import mongoDb from "../../public/mongodb.jpg";
import mySQL from "../../public/mysql.png";
import ReactIc from "../../public/react_png.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: tailwindcss,
      name: "Tailwind css",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: java,
      name: "Java",
    },
    {
      id: 5,
      logo: android,
      name: "Android",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
    {
      id: 7,
      logo: mySQL,
      name: "MySQL",
    },
    {
      id: 8,
      logo: mongoDb,
      name: "MongoDB",
    },
    {
      id: 9,
      logo: ReactIc,
      name: "React Js",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
