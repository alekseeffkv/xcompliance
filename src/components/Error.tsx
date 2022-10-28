type ErrorProps = { message: string };

const Error: React.FC = () => {
  return (
    <div className="fixed inset-0">
      <div className="relative w-10 h-10 my-24 mx-auto">
        <div className="bounce animate-[custom-bounce_2s_infinite_ease-in-out]" />
        <div className="bounce animate-[custom-bounce_2s_-1s_infinite_ease-in-out]" />
      </div>
    </div>
  );
};

export default Error;
