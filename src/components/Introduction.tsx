const introductionPoints = [
  {
    id: 1,
    title: "we are a design and development agency founded in 2006",
  },
  {
    id: 2,
    title:
      "founded on 2005 , we are the best agency for design and developmment",
  },
  {
    id: 3,
    title: "founded by someone some founded by someone some",
  },
  {
    id: 4,
    title: "we deliver the best design and development experiences for you ",
  },
  {
    id: 5,
    title: "wanna know about us more , then lets talk",
  },
];

function Introduction() {
  return (
    <section className="container py-10 border-b border-gray-200">
      <h2>Introduction</h2>

      <div className="py-4 px-2 mt-8 flex justify-between items-center border-t border-b border-black ">
        {[
          "Who are we and how do \n we operate",
          "Our history and future plans",
          "our location and qualification",
        ].map((title, id) => (
          <h3 key={id} className="capitalize font-[600]">
            {title}
          </h3>
        ))}
      </div>

      {/* about kalodhunga (in points) ---- */}
      <ul className="relative flex flex-col mt-8">
        {introductionPoints.map((point) => (
          <li className="flex py-8 items-center text-[30px] font-[600] border-b border-black">
            <h3 className="w-[55px]"> 0{point.id}</h3>

            <span className="ml-4 py-2 px-3.5 capitalize font-[400] bg-black text-white rounded-md text-[20px]">
              {point.title}
            </span>
          </li>
        ))}

        <img
          src="assets/flower.png"
          alt="picture"
          className="w-[320px] h-auto absolute right-0 bottom-[80px]"
        />
      </ul>

      <div className="flex justify-between mt-12 font-[500] text-xl">
        <span className="py-1 px-4 border border-gray-500 rounded-full">
          Kathmandu, Nepal
        </span>
        <span className="py-1 px-4 border border-gray-500 rounded-full">
          Kalodhunga Creations
        </span>
      </div>
    </section>
  );
}

export default Introduction;
