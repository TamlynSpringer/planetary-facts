import bg from '../assets/bg.png';

const Home = () => {
  return (
    <>
    <div className="bg-accent-dark bg-cover bg-hero">
    <img src={bg} />
    </div>
    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
      <div className="flex justify-left items-center h-full px-5">
        <div className="text-left md:text-white lg:text-white xl:text-white bg-zinc-600 bg-opacity-50 p-4 text-black rounded-3xl">
          <h1 className="text-3xl font-bold mt-0 mb-6 md:text-4xl  lg:text-5xl ">Welcome!</h1>
          <h3 className="text-md font-bold mb-8 md:text-lg lg:text-xl">On this site you'll find facts about our solar system's planets</h3>
        </div>
      </div>
    </div>
    </>
  )
};

export default Home;