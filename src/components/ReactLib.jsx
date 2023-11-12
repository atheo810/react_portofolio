import { SiReact } from "react-icons/si";
export default function ReactLib() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <SiReact size={300} color="cyan" className="w-[300px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Laravel</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            React Library
          </h1>
          <p>React Library Use for making Front-End</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-bold my-6 md:mx-0 mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
