import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Spotlight } from "../ui/Spotlight";

const Headers = ({ title }: { title: string }) => {
  return (
    <div className="relative flex  w-full overflow-hidden rounded-md antialiased">
       <Spotlight
        className=" left-1/3 "
        fill="red"
      />
      <div className="relative z-10 left-10  p-4  md:pt-0">
        <h2 className="flex items-center text-3xl font-bold gap-3 text-white">
        <TfiLayoutLineSolid className="text-red-500 w-6 h-6" />
        <span>{title}</span>
      </h2>
      </div>
    </div>
  );
};

export default Headers;