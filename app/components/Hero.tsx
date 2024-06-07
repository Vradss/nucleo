
export default function Hero() {
    return (
    <div className="grid h-screen w-full px-4 md:px-[100px] py-8 lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-12 bg-[#0C0C0C]">
        <div className="lg:col-span-7 lg:mr-auto lg:place-self-center">
            <h1 className="font-epilogue text-[25px] mb-4 leading-[4rem] md:text-[50px]">
                La diferenciación de tu empresa B2B comienza en tu sitio web. <br />
                ¿La comunicas efectivamente?
            </h1>
            <p className="font-figtree font-light text-[15px] mt-4 md:text-[22px]">
                Te ayudamos a atraer clientes ideales a través del posicionamiento y messaging de tu empresa B2B o SaaS startup.
            </p>
            <a
                href="#"
                className="inline-flex items-center justify-center border border-white px-5 py-3 mt-4 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
                Let's Talk!
                <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="nucleo_3d.svg" alt="nucleo_3d" />
        </div>
    </div>
    );
}