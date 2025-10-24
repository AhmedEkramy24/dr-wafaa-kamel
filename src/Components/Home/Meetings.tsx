import { Link } from "react-router-dom";
import SliderComponent from "../SliderComponent/SliderComponent";
import VideoVeiwer from "../VideoViewer/VideoVeiwer";

export default function Meetings() {
  const videos = [
    {
      title: "مفاتيح مفيد فوزي",
      src: "https://www.youtube.com/watch?v=BsjxJEO14zE",
    },
    {
      title: "أمسية ثقافية فاروق شوشة",
      src: "https://www.youtube.com/watch?v=NdbVf8-S-uY",
    },
    {
      title: "في المساء مع قصواء مع قصواء الخلالي على قناة CBC",
      src: "https://www.youtube.com/watch?v=3OEAkDIUM1A",
    },
    {
      title: "استقبال الدكتورة وفاء كامل بمجمع الغة العربية",
      src: "https://www.youtube.com/watch?v=2Rn7FByLpLs",
    },
  ];

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto py-10">
        <div className=" my-10  px-4">
          <h2 className="text-4xl font-bold  text-[#235A93]">
            لقاءات ثقافية تليفزيونية
          </h2>
        </div>
        <div>
          <SliderComponent>
            {videos.map((item) => (
              <div key={item.title} className="px-4">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md ">
                  <VideoVeiwer videoLink={item.src} title={item.title} />

                  <p className=" py-2 text-md font-semibold text-center min-h-[60px] flex items-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </SliderComponent>
          <Link
            to={"/meetings"}
            className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
          >
            عرض المزيد
          </Link>
        </div>
      </div>
    </div>
  );
}
