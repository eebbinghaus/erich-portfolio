import { meLogo } from "../assets";

const Home = () => {
  return (
    <div className="flex items-center flex-col place-content-center min-h-[60vh] bg-black">
      <div className=" max-w-[15rem] ">
        <img src={meLogo} className="" />
      </div>
      
      <div className="flex border-gray-200 border-y">
        <h1 className="text-[6rem] text-yellow-300 mr-[1.5rem]">Erich</h1>
        <h1 className="text-[6rem] text-yellow-300">Ebbinghaus</h1>
      </div>
      <div>
        <p className="text-[2.5rem] text-white">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default Home;
