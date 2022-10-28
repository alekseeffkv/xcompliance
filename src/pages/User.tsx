import { Link, useParams } from 'react-router-dom';
import {
  useGetReposQuery,
  useGetUserQuery,
} from '../redux/slices/githubApiSlice';

const User: React.FC = () => {
  const { login } = useParams();

  const { data: user } = useGetUserQuery(login ?? '');

  const { data: repos } = useGetReposQuery(user?.repos_url ?? '');

  return (
    <main className="grow box">
      <div className="flex items-center">
        <div className="w-1/5 my-8 mr-8">
          <img
            src={user?.avatar_url}
            alt="avatar"
            className="object-cover object-center w-full rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-2xl font-semibold">{user?.name}</span>
          <span className="font-xl font-light">{user?.login}</span>
        </div>
      </div>

      <div className="flex flex-col mb-16">
        <span className="text-2xl font-medium mb-8">Репозитории</span>

        <table className="table-auto border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Наименование</th>
              <th className="border p-2">Язык программирования</th>
              <th className="border p-2">Описание</th>
              <th className="border p-2">Количество звезд</th>
            </tr>
          </thead>
          <tbody>
            {repos?.length &&
              repos.map(({ name, language, description, stargazers_count }) => (
                <tr key={name}>
                  <td className="border p-2">
                    <Link to={`/${login}/${name}`} className="hover:underline">
                      {name}
                    </Link>
                  </td>
                  <td className="border p-2">{language}</td>
                  <td className="border p-2">{description}</td>
                  <td className="border p-2">{stargazers_count}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default User;
