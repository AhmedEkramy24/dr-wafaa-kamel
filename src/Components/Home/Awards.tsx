import { Link } from "react-router-dom";
import SliderComponent from "../SliderComponent/SliderComponent";

const awards = [
  "/awards/1.png",
  "/awards/2.png",
  "/awards/3.png",
  "/awards/4.png",
  "/awards/5.png",
];

export default function Awards() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto py-10">
        <div className=" mb-10  px-4">
          <h2 className="text-4xl font-bold  text-[#235A93]">جوائز</h2>
        </div>
        <div>
          <SliderComponent>
            {awards.map((item, index) => (
              <div key={index} className="p-3">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md ">
                  <img
                    src={item}
                    alt={index.toString()}
                    data-book
                    className="h-[250px] w-full object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            ))}
          </SliderComponent>
          <Link
            to={"/awards"}
            className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
          >
            عرض المزيد
          </Link>
        </div>
      </div>
    </div>
  );
}
