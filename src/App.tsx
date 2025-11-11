import { createHashRouter, RouterProvider } from "react-router-dom";
import Activities from "./Components/Activities/Activities";
import Layout from "./Components/Layout/Layout";
import SingleActivity from "./Components/Activities/SingleActivity";
import Home from "./Components/Home/Home";
import Cv from "./Components/Cv/Cv";
import Awards from "./Components/Awards/Awards";
import Certificates from "./Components/Certificates/Certificates";
import Programs from "./Components/Programs/Programs";
import Books from "./Components/Books/Books";
import SingleBook from "./Components/Books/SingleBook";
import Meetings from "./Components/Meetings/Meetings";
import Meeting from "./Components/Meetings/SingleMeeting";
import Study from "./Components/Study/Study";
import SingleStudy from "./Components/Study/SingleStudy";
import Volenteering from "./Components/Volenteering/Volenteering";
import SingleVolenteering from "./Components/Volenteering/SingleVolenteering";
import Researches from "./Components/Researches/Researches";
import Shares from "./Components/Shares/Shares";
import Articles from "./Components/Articles/Articles";
import Writings from "./Components/Writings/Writings";
import SingleWriting from "./Components/Writings/SingleWriting";
import Media from "./Components/Media/Media";
import GoodWards from "./Components/GoodWards/GoodWards";
import GoodWard from "./Components/GoodWards/SingleGoodWard";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cv", element: <Cv /> },
      { path: "awards", element: <Awards /> },
      { path: "certificates", element: <Certificates /> },
      { path: "programes", element: <Programs /> },
      { path: "books", element: <Books /> },
      {
        path: "books/:id",
        element: <SingleBook />,
      },
      {
        path: "meetings",
        element: <Meetings />,
      },
      {
        path: "meetings/:id",
        element: <Meeting />,
      },
      { path: "study", element: <Study /> },
      {
        path: "study/:id",
        element: <SingleStudy />,
      },
      { path: "volenteering", element: <Volenteering /> },
      {
        path: "volenteering/:id",
        element: <SingleVolenteering />,
      },
      {
        path: "researches",
        element: <Researches />,
      },
      {
        path: "shares",
        element: <Shares />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "writings",
        element: <Writings />,
      },
      {
        path: "writings/:id",
        element: <SingleWriting />,
      },
      { path: "activities", element: <Activities /> },
      {
        path: "activities/:id",
        element: <SingleActivity />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "goodwards",
        element: <GoodWards />,
      },
      {
        path: "goodwards/:id",
        element: <GoodWard />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
