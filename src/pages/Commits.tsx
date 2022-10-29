import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useGetCommitsQuery } from '../redux/slices/githubApiSlice';
import formatDate from '../utils/formatDate';

const Commits: React.FC = () => {
  const { login = '', name = '' } = useParams();

  const { data, isFetching } = useGetCommitsQuery({ login, name });

  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <main className="flex flex-col py-8 grow box">
      {isFetching && <Loader />}

      <div>
        <button className="hover:underline" onClick={handleClick}>
          Назад
        </button>
      </div>

      <span className="text-2xl font-medium my-8">Коммиты</span>

      <table className="table-auto border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Автор</th>
            <th className="border p-2">Хэш коммита</th>
            <th className="border p-2">Дата</th>
          </tr>
        </thead>
        <tbody>
          {data?.length &&
            data.map(
              ({
                sha,
                commit: {
                  author: { name, date },
                },
              }) => (
                <tr key={sha}>
                  <td className="border p-2">{name}</td>
                  <td className="border p-2">{sha.slice(0, 7)}</td>
                  <td className="border p-2">{formatDate(date)}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </main>
  );
};

export default Commits;
