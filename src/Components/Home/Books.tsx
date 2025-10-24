import { Link } from "react-router-dom";
import SliderComponent from "../SliderComponent/SliderComponent";

const books = [
  "/books/1.jpg",
  "/books/2.jpg",
  "/books/3.jpg",
  "/books/4.jpg",
  "/books/5.jpg",
];

export default function Books() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="px-4">
          <h2 className="text-4xl mb-10 font-bold  text-[#235A93]">
            كتب مؤلفة و مترجمة
          </h2>
        </div>

        <SliderComponent>
          {books.map((item, index) => (
            <div key={index} className="px-4">
              <Link to={"/books"}>
                <div className="flex flex-col items-center bg-slate-100 rounded-xl shadow-md">
                  <img
                    src={item}
                    alt={index.toString()}
                    className=" w-full object-cover rounded-lg"
                  />
                </div>
              </Link>
            </div>
          ))}
        </SliderComponent>
        <Link
          to={"/books"}
          className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
        >
          عرض المزيد
        </Link>
      </div>
    </div>
  );
}
