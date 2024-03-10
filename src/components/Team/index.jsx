import React from "react";
import { useState } from "react";
function Team() {
  const [selected, setSelected] = useState(1);
  const replaceCard = (id) => {
    setSelected(id);
  };
  const cards = [
    {
      id: 1,
      img: "Assets/Hero_pic.jpg",
      name: "Farrukh Mustafa",
      designation: "Web Developer",
      desc: "Meet our heavy developer. This is the intro for him now. We will add something later.",
    },
    {
      id: 2,
      img: "Assets/Hero_pic.jpg",
      name: "Hanzla Iftikhar",
      designation: "Web Developer",
      desc: "Meet our heavy developer. This is the intro for him now. We will add something later.",
    },
    {
      id: 3,
      img: "Assets/Hero_pic.jpg",
      name: "Asfan Sajid",
      designation: "Web Developer",
      desc: "Meet our heavy developer. This is the intro for him now. We will add something later.",
    },
    {
      id: 4,
      img: "Assets/Hero_pic.jpg",
      name: "Hamza Ramzan",
      designation: "Web Developer",
      desc: "Meet our heavy developer. This is the intro for him now. We will add something later.",
    },
    {
      id: 5,
      img: "Assets/Hero_pic.jpg",
      name: "Ammar Ibrahim",
      designation: "Web Developer",
      desc: "Meet our heavy developer. This is the intro for him now. We will add something later.",
    },
    {
      id: 6,
      img: "Assets/Hero_pic.jpg",
      name: "Shahroz Khan",
      designation: "Web Developer",
      desc: "Meet our heavy developer. This is the intro for him now. We will add something later.",
    },
    {
      id: 7,
      img: "Assets/Hero_pic.jpg",
      name: "Waleed Ilyas",
      designation: "Web Developer",
      desc: "Meet our heavy developer. This is the intro for him now. We will add something later.",
    },
  ];
  return (
    <div
      className="Team h-full py-[10vh]"
      style={{ background: "linear-gradient(to right, #180C39, #3B0F24)" }}
    >
      <div className="text-white w-full flex flex-col">
        <h1 className="text-4xl sm:text-6xl font-bold mx-auto">Our Team</h1>
        <p
          className="p-5 px-[10%] sm:px-[15%] font-light text-2xl mx-auto"
          id="scrollthis"
        >
          Meet the wonderful young minds at out company.
        </p>
      </div>

      <div className="team-big-card p-5">
        <div className="team-big-inner-card bg-white rounded-lg p-5 gap-8 hidden md:flex">
          <div className="object-cover">
            <img
              src={cards[selected - 1].img}
              alt=""
              className="rounded-xl  w-[33vw] h-[40vh]"
            />
          </div>
          <div className="text-left mb-20">
            <h1 className="text-4xl font-bold text-[#313131]">
              {cards[selected - 1].name}
            </h1>
            <p className="text-2xl font-light py-2">
              {cards[selected - 1].designation}
            </p>
            <p>{cards[selected - 1].desc}</p>
            <div className="flex">
              <a href="#" className="flex items-center gap-1">
                <p>Meet</p>
                <p className="text-2xl">&#x21C0;</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-hidden gap-8 parent-slide relative">
        <div className="flex overflow-x-hidden h-auto gap-8 py-5">
          <div className="flex flex-nowrap overflow-x-visible gap-8 team-slide ml-8">
            {cards.map((card) => (
              <div
                className="flex-col p-[1%] bg-white rounded-xl sm:w-[20vw] w-[40vw] h-1.4 xl:h-[100%] lg:h-1.4 inline-block shadow-box-behind transition duration-200"
                onClick={() => replaceCard(card.id)}
                key={card.id}
              >
                <div className="w-full">
                  <a href="#scrollthis">
                    <img
                      src={card.img}
                      alt=""
                      className="object-cover rounded-xl"
                    />
                  </a>
                </div>
                <div className="sm:text-left py-2">
                  <h2 className="font-semibold lg:text-2xl md:text-xl sm:text-lg text-lg text-nowrap mx-auto text-center lg:text-left">
                    {card.name}
                  </h2>
                  <p className="font-light sm:text-xl text-md text-center lg:text-left">
                    {card.designation}
                  </p>
                  <p className="hidden lg:flex">{card.desc}</p>
                </div>
                <div className="flex p-1 sm:p-0 bg-black rounded-md mt-3 items-center">
                  <a
                    href="#"
                    className="flex gap-1 items-center justify-center sm:p-0 w-full text-white mx-auto hover:bg-purple-600 hover:text-white transition duration-300 text-sm sm:text-md "
                  >
                    <p>Meet</p>
                    <p className="text-2xl">&#x21C0;</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-nowrap overflow-x-visible gap-8 team-slide-2">
            {cards.map((card) => (
              <div
                className="flex-col p-[1%] bg-white rounded-xl sm:w-[20vw] w-[40vw] h-1.4 xl:h-[100%] lg:h-1.4 inline-block shadow-box-behind transition duration-200"
                onClick={() => replaceCard(card.id)}
                key={card.id}
              >
                <div className="w-full">
                  <a href="#scrollthis">
                    <img
                      src={card.img}
                      alt=""
                      className="object-cover rounded-xl"
                    />
                  </a>
                </div>
                <div className="sm:text-left py-2">
                  <h2 className="font-semibold lg:text-2xl md:text-xl sm:text-lg text-lg text-nowrap mx-auto text-center lg:text-left">
                    {card.name}
                  </h2>
                  <p className="font-light sm:text-xl text-md text-center lg:text-left">
                    {card.designation}
                  </p>
                  <p className="hidden lg:flex">{card.desc}</p>
                </div>
                <div className="flex p-1 sm:p-0 bg-black rounded-md mt-3 items-center">
                  <a
                    href="#"
                    className="flex gap-1 items-center justify-center sm:p-0 w-full text-white mx-auto hover:bg-purple-600 hover:text-white transition duration-300 text-sm sm:text-md "
                  >
                    <p>Meet</p>
                    <p className="text-2xl">&#x21C0;</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
