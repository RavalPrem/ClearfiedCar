import Button from './components/Button';
const App = () => {
  return (
    <div className='bg-primary text-secondary'>
      <div className="h-screen w-screen relative">
        <div className="relative navbar h-20 flex items-center justify-around w-screen border z-2">
          <nav>
            <ul className="flex justify-between gap-5 text-white text-[16px] border border-white p-5 rounded-full">
              <li>Home</li>
              <li>Market Place</li>
              <li>Sell Car</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </nav>

          <div className="userProfile relative z-4 flex">
            <Button className="" > Hello world</Button>
            <Button > </Button>
          </div>
        </div>

        {/*hero image */}
        <div className="h-screen w-screen absolute left-0 top-0 z-0 overflow-hidden">
          <img src="../public/HeroImage/heroImage2.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default App