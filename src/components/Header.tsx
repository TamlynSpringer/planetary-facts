import planets from '../assets/solar-system.jpg';

const Header = () => {
  return (
    <>
      <div className="bg-accent-dark bg-cover bg-hero">
        <img src={planets} />
      </div>
      <div className="sticky top-0 right-0 bottom-0 h-full p-5 bg-opacity-50 text-left text-white bg-transparent">
        <h1 className="text-3xl font-bold mt-0 mb-6 md:text-4xl lg:text-5xl bg-transparent">Welcome!</h1>
        <h3 className="text-md font-bold mb-8 md:text-lg lg:text-xl bg-transparent">On this site you'll find facts about our solar system's planets</h3>
      </div>
    </>
  )
}

export default Header