import { SiExpress } from "react-icons/si";
export default function Express() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <SiExpress
          size={300}
          color="white"
          className="w-[300px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#859DFF] font-bold text-xl">express</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white">
            express Framework
          </h1>
          <p className="text-white">
            express Framework Use for making Restful API, Auth
          </p>
          <button className="bg-[#1A27BA] text-white w-[200px] rounded-md font-bold my-6 md:mx-0 mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
