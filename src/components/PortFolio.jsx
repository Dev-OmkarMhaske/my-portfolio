import java from "../../public/java.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import android from "../../public/android.png";
import nodejs from "../../public/node.png";
function PortFolio() {
  const cardItem = [
    // {
    //   id: 1,
    //   logo: mongoDB,
    //   name: "MongoDB",
    // },
    {
      id: 2,
      logo: android,
      name: "Android",
      desc: "Developed a real-time smart home application enabling users to remotely monitor and control home appliances.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      desc: "Developed a responsive front-end with React.js, HTML,and Tailwind CSS, enhancing overall user experience.",
    },
    // {
    //   id: 4,
    //   logo: nodejs,
    //   name: "NodeJS",
    //   desc: "Developed a real-time smart home application enabling users to remotely monitor and control home appliances.",
    // },
    {
      id: 5,
      logo: java,
      name: "Java",
      desc: "Develop and maintain RESTful APIs using Spring Boot for scalable and high-performance applications.",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 my-5">
          {cardItem.map(({ id, logo, name, desc }) => (
            <div
              className="md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-4  cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{desc}</p>
              </div>
              <div className="space-x-3 justify-around mt-4">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
