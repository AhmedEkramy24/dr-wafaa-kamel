import { useEffect, useState } from "react";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import AnimatedContent from "../ReactBits/AnimatedContent";
import { Link } from "react-router-dom";

const studies = [
  {
    title:
      "   تناول (معجم التعابير الاصطلاحية في العربية المعاصرة) بالعرض والنقد، ثلاثة علماء، هم:",
    items: [
      "أ. د. عبد الإله نبهان- دمشق، جريدة الأسبوع الأدبي- العدد 1084، في 15/ 12/ 2007.",
      "د. علاء حسني المزين- ماليزيا، في مجلة الجامعة الإسلامية بماليزيا:",
      "د. محمد الفجر- سوريا ، على موقع الألوكة:",
    ],
  },
  {
    title: "عرض كتابي (بحوث في العربية المعاصرة)، في كل من :",
    items: [
      " جريدة الأهرام- ( حركة الأدب- بتاريخ 25/ 9/ 2003- ص 36.",
      "(البيان) الإماراتية، 29/8/ 2005:                      ",
      " (المؤتمر)- العدد 977، عام 2005- مكتبة المؤتمر:",
    ],
  },
  {
    title:
      "عرض بحث (مجامع اللغة العربية) على موقع (جامعة أم القرى) بالمملكة العربية السعودية و 	وعلى منتديات ستار تايمز",
  },
  {
    title:
      "عرض كتاب (بعض صور التعابير الاصطلاحية في العربية المعاصرة)، في موقع (ضياء القمر)",
  },
  {
    title:
      "أشير إلى كتابي (المجامع العربية وقضايا اللغة) ضمن مقال (المجمع اللغوي السعودي)- صفحة الرأي بالعدد 11590 السنة الأربعون، من (اليوم الإلكتروني)– السعودية، بتاريخ  9 /3 / 2005:",
  },
  {
    title:
      "عرض بحث لي بعنوان (بعض مظاهر تغير الصيغ الصرفية في العربية المعاصرة) على:",
    items: [
      " موقع (كنانة أونلاين)",
      " وفي منتديات (شبكة المجرة)",
      "	وعلى (شبكة الفصيح لعلوم اللغة العربية): تاج العروس في اللغة وعلم الترجمة",
      " وعلى موقع (الجمعية الدولية للمترجمين العرب)",
    ],
  },
  {
    title:
      " نُوّه بكتاب قمت بترجمته هو (اتجاهات البحث اللساني) بعنوان: ثلاثة كتب مهمة في النقد الأدبي في موقع : (أهل التأويل)",
  },
  {
    title:
      "عرض كتابي (معجم التعابير الاصطلاحية في العربية المعاصرة) على موقع (عتيدة)    وعلى منتديات ( قناديل الفكر)",
  },
];

const studies2 = [
  {
    title: "( فوز مؤكد.. ولكن لمن ؟):",
    desc: "أ. د. حسين نصار- جريدة الأخبار 1 ديسمبر 2014- ص 10.",
  },
  {
    title:
      "( أول امرأة تنتخب عضوا بالمجمع اللغوي منذ عام 1932، د. وفاء كامل: انتخابي أنصف بنت الشاطئ وسهير القـلماوي)",
    desc: "مجلة نصف الدنيا- العدد 1296– 12 ديسمبر 2014، الصفحات من 64 إلى 68.",
  },
  {
    title: "( استقبال استثنائي لأول امرأة بمجمع الخالدين)-",
    desc: "مقال فتحي متولي بجريدة الجمهورية- 11 يناير 2015- ص 2.",
  },
  {
    title:
      "( د. وفاء كامل، أول سيدة بمجمع اللغة العربية: سهير القـلماوي وبنت الشاطئ  كانتا الأجدر بالانضمام)-",
    desc: "سلوى عزب، جريدة الجمهورية- العدد 22373- 31 مارس 2015، ص 10.",
  },
  {
    title:
      "( مفيد فوزي يحاور الدكتورة وفاء كامل المرأة الوحيدة بالمجمع اللغوي):",
    desc: "صفحة كاملة في جريدة (المصري اليوم) السنة الثانية عشرة ، العدد 4304، يوم الأحد 27/2/2016- ص 14.",
  },
];

export default function Study() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res =
        (await fetchData(
          "https://test.drwafaakamel.com/api/v1/categories/9"
        )) || [];
      setData(res);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        ⚠️ لا توجد بيانات متاحة حاليًا
      </div>
    );
  }
  return (
    <div>
      <Title>دراسات ونقد لأعمالى 🧾</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container flex flex-wrap mx-auto">
          {data.map((item, index) => (
            <Link
              to={`/study/${item.id}`}
              key={index}
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3 "
            >
              <div className="w-full sm:h-[200px] h-[250px] rounded-2xl overflow-hidden bg-blue-100 text-[#235A93] flex justify-center items-center text-7xl">
                <i className="fa-solid fa-file-lines"></i>
              </div>
              <p className="text-center p-2 font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>

        <div className="bg-slate-50">
          <div className="container mx-auto py-6 px-2">
            <h2 className="text-center text-2xl my-8 font-bold text-[#235A93]">
              عرض مؤلفاتي والإشارة إليها :
            </h2>
            {studies.map((study, index) => (
              <div key={index} className="mb-1 ">
                <h4 className="text-lg font-bold ">
                  <span className="text-cyan-950 ml-1">{index + 1}-</span>
                  {study.title}
                </h4>
                {study.items && (
                  <ul className="list-disc">
                    {study.items.map((item, idx) => (
                      <li key={idx} className="mr-10">
                        <i className="fas fa-dot"></i> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="container mx-auto px-2 py-6">
            <h2 className="text-center text-2xl my-8 font-bold text-[#235A93]">
              بعض ما كتب عني في وسائل الإعلام :
            </h2>
            {studies2.map((study, index) => (
              <p className="mb-1 text-lg" key={index}>
                <span className="font-bold ml-1">{index + 1}-</span>
                <span className="font-bold">{study.title}</span>
                {study.desc}
              </p>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
