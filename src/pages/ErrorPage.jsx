import DashboardLayout from "../layout/DashboardLayout";

const ErrorPage = () => {
  return (
    <DashboardLayout>
      <section className="relative  h-[32rem] flex justify-center items-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none sm:text-[80px] md:text-7xl">
                404
                <span className="text-warning font-normal ms-4">ERROR</span>
              </h2>
              <h4 className="mb-2 text-lg font-semibold leading-tight">
                Oops! That page can’t be found
              </h4>
              <p className="mb-8 text-lg">
                The page you are looking for it maybe not available
              </p>
              <a
                href="/"
                className="btn inline-block rounded-lg px-8 py-3 text-center text-base font-semibold transition hover:bg-green-500 hover:text-white"
              >
                Go To Home
              </a>
            </div>
          </div>

        </div>
      </section>
    </DashboardLayout>
  );
};

export default ErrorPage;
