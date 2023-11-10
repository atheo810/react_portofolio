import Typed from "react-typed";

export default function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">Welcome to my Website</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Atheo Santosa
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Learn, Connect and Grow
          </p>
          <Typed
            className="text-lg sm:text-3xl md:text-4xl"
            strings={[
              "Front-End Developer",
              "Back-End Developer",
              "Full Stack Developer",
            ]}
            loop
            typeSpeed={120}
            backSpeed={140}
          />
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}
