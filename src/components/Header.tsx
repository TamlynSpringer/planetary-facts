import planets from '../assets/solarsystem.jpg';

const Header = () => {
  return (
    <header className='bg-starry-pattern w-full h-full'>
      <div className="bg-starry-pattern min-w-full py-3 lg:py-10 xl:py-10">     
        <img src={planets} alt='solar system' width='100%' />
      </div>
      <div className="w-full h-full p-5 bg-opacity-50 text-white bg-transparent text-center">
        <h1 className="text-3xl font-bold mt-0 mb-6 md:text-4xl lg:text-5xl bg-transparent">Welcome!</h1>
        <h3 className="text-md font-bold mb-8 md:text-lg lg:text-xl bg-transparent">On this site you'll find facts about our solar system's planets</h3>
      </div>
    </header>
  )
};

export default Header;