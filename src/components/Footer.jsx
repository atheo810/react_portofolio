export default function Footer() {
  return (
    <footer className="pt-4">
      <div className="flex justify-around max-sm:flex-col md:flex-row">
        <div className="flex flex-col max-sm:w-full items-center md:w-[40%] py-3 mx-3">
          <h1 className="text-white text-2xl uppercase">reach me more</h1>
          <p className="text-white">
            you can also contact me for further information some kind of
            bussiness with me feel free to contact
          </p>
        </div>
        <div className="flex flex-col text-white max-sm:w-full md:w-[40%] max-lg-[40%] items-center py-3 mx-3">
          <h1 className="text-2xl">Contact</h1>
          <p> Denpasar, Bali Indonesia</p>
          <p>atheo810@gmail.com</p>
          <p>+62 821 47 40 45 17</p>
        </div>
      </div>
      <div className="flex justify-center py-4 border-t-2 border-gray-600">
        <h1 className="text-white text-lg">© 2023 Copyright: atheo</h1>
      </div>
    </footer>
  );
}
