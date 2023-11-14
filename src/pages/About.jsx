export default function About() {
  return (
    <div className="text-white flex max-md:flex-col lg:flex-row justify-center  h-[700px] items-center max-sm:flex-col">
      <div className="flex flex-col mx-2 max-sm:w-full md:w-[50%] max-lg:w-[800] items-center">
        <h1 className="md:text-4xl sm:text-3xl font-bold py-2">About me</h1>
        <p className="md:text-2xl sm:text-lg  py-2">
          Hi Patriot here, Im College student in INSTIKI also Core Team at GDSC
          INSTIKI, like to spend time for learning something new and challenge.
          Nice to meet you ^_^
        </p>
      </div>
      <div className="flex mx-3 lg:w-[50%] lg:h-[700px] md:h-[600px] md:w-[50%] sm:h-[400px] sm:w-[full] items-center rounded-md">
        <img
          className="rounded-md"
          src={"atheo2.webp"}
          alt="atheo"
          width={1000}
          height={700}
        />
      </div>
    </div>
  );
}
