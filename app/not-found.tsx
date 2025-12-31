import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const NotFound = () => {
  return (
    <main className="flex-grow flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="text-6xl font-bold text-primary">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Страница не найдена
        </h1>
        <p className="text-lg text-gray-600 mb-8 dark:text-gray-300">
          К сожалению, запрошенная страница не существует или была перемещена.
        </p>
        <Button as={Link} href="/" color="primary">
          <svg
            className="w-5 h-5 mr-2 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            />
          </svg>
          Вернуться на главную
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
