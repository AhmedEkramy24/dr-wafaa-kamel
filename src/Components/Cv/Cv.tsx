import Title from "../Title/Title";
import Info from "./Info";
import School from "./School";
import Shares from "./Shares";
import Volenteering from "./Volenteering";

export default function Cv() {
  return (
    <div>
      <Title>السيرة الذاتية</Title>
      <div className="container mx-auto text-lg">
        <Info />
        <School />
        <Shares />
        <Volenteering />
      </div>
    </div>
  );
}
