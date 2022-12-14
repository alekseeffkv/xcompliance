import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { useGetUserQuery } from '../redux/slices/githubApiSlice';

const Home: React.FC = () => {
  const [login, setLogin] = useState('');
  const [skip, setSkip] = useState(true);
  const [hasErrorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const { isFetching, isSuccess, error } = useGetUserQuery(login, { skip });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLogin(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setSkip(false);
  };

  useEffect(() => {
    if (isSuccess) navigate(`/${login.toLowerCase()}`);
  });

  useEffect(() => {
    if ((error as { status: number })?.status === 404) {
      setErrorMessage(true);
      setSkip(true);
    }
  }, [error]);

  useEffect(() => {
    const keyboardShortcuts = (e: KeyboardEvent) => {
      if (e.key === 'Enter') setSkip(false);
    };

    document.addEventListener('keyup', keyboardShortcuts);

    return () => {
      document.removeEventListener('keyup', keyboardShortcuts);
    };
  }, []);

  return (
    <main className="flex flex-col justify-center items-center grow box">
      {isFetching && <Loader />}

      <form
        className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row  items-center ">
          <input
            value={login}
            onChange={handleChange}
            placeholder="Github login"
            className="border rounded-md px-3 mb-6 sm:mb-0 sm:mr-6 h-8 w-full focus:outline-primary"
          />

          <button type="submit" className="btn">
            Продолжить
          </button>
        </div>
      </form>
      {hasErrorMessage && (
        <p className="mt-6 text-center">
          Логина не существует. Введите другого пользователя.
        </p>
      )}
    </main>
  );
};

export default Home;
