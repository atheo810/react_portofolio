import Navbar from "../components/Navbar";

export default function Error() {
  return (
    <>
      <Navbar />
      <div className="text-white flex flex-col justify-center mx-auto h-[600px] items-center">
        <h1 className="md:text-7xl sm:text-6xl font-bold">Oops!</h1>
        <p className="md:text-6xl sm:text-5xl font-bold">
          Something went wrong
        </p>
      </div>
    </>
  );
}
