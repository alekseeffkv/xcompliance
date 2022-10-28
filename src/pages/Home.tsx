import { FC } from 'react';

const Home: FC = () => {
  return (
    <main className="flex justify-center items-center grow box">
      <form className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
        <div className="flex flex-col sm:flex-row  items-center ">
          <input
            type="text"
            id="login"
            placeholder="Github login"
            className="border rounded-md px-3 mb-6 sm:mb-0 sm:mr-6 h-8 w-full focus:outline-primary"
          />

          <button type="submit" className="btn">
            Continue
          </button>
        </div>
      </form>
    </main>
  );
};

export default Home;
