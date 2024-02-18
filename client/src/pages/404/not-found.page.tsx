import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-screen w-full bg-[--light]">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[200px] font-[900] text-[--green]">404</h1>
          <h2 className="text-[48px] text-[--red]">Opps! PAGE NOT BE FOUND</h2>
          <h3 className="mb-10 text-[--green]">
            Sorry but the page you are looking for does not exist, have been
            <br /> removed, name changed or is temporarily unavailable.
          </h3>

          <Link
            to="/"
            className="rounded bg-[--green] px-8 py-3 font-bold text-white  shadow"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
