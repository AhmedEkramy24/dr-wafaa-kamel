import { Link } from "react-router-dom";
import SliderComponent from "../SliderComponent/SliderComponent";

const data = [
  {
    title: "برنامج أحكام التنافر بالانجليزية",
    src: "/programs/1.jpg",
  },
  {
    title: "برنامج أحكام تنافر صوتي الفعل الثلاثي المضعف",
    src: "/programs/2.jpg",
  },
  {
    title: "برنامج أحوال تآالف صوتي الفعل الثلاثي المضعف",
    src: "/programs/3.jpg",
  },
  {
    title: "برنامج تحديد الباب الصرفي للفعل الثلاثي المضعف",
    src: "/programs/4.jpg",
  },
];

export default function Programs() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="px-4 my-10">
          <h2 className="text-3xl font-bold text-[#235A93]">
            برامج لغوية حاسوبية
          </h2>
        </div>

        <SliderComponent>
          {data.map((item) => (
            <div key={item.title} className="px-4">
              <div className="flex flex-col items-center bg-slate-50 rounded-xl shadow-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className=" w-full object-cover rounded-lg"
                />
                <p className="mt-3 py-2 text-md font-semibold text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </SliderComponent>
        <Link
          to={"/programes"}
          className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
        >
          عرض المزيد
        </Link>
      </div>
    </div>
  );
}
