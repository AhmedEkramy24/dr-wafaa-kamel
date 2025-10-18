import Link from "next/link";
import SliderComponent from "../SliderComponent/SliderComponent";
import VideoVeiwer from "../VideoViewer/VideoVeiwer";

export default function Meetings() {
  const videos = [
    {
      title:
        "مفاتيح| الجزء الاول من حوار الدكتور وفاء كامل عضو المجمع اللغوي مع مفيد فوزي",
      src: "https://www.youtube.com/watch?v=BsjxJEO14zE",
    },
    {
      title:
        "مفاتيح| الجزء الثاني من حوار الدكتورة وفاء كامل عضو المجمع اللغوي مع مفيد فوزي",
      src: "https://www.youtube.com/watch?v=t8dC12WHPUA",
    },
    {
      title:
        "مفاتيح| مفيد فوزي والدكتورة وفاء كامل يعرضان الاخطاء اللغوية فى اجتماع مجلس الوزراء",
      src: "https://www.youtube.com/watch?v=3FBeWLsHbow",
    },
    {
      title:
        "مفاتيح| الدكتور وفاء كامل عضو بالمجمع اللغوي تكشف لماذا يفشل الكثير فى الاعراب",
      src: "https://www.youtube.com/watch?v=3wmQAng_AYM",
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

                  <p className="mt-3 py-2 text-md font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </SliderComponent>
          <Link
            href={"/meetings"}
            className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
          >
            عرض المزيد
          </Link>
        </div>
      </div>
    </div>
  );
}
