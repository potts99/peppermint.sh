export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            The Open Source{" "}
            <span className="text-green-600">FreshDesk solution</span>
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            A central hub for your help desk. A powerfully easy system for
            tracking, prioritising, and solving customer support tickets
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="https://docs.peppermint.sh/"
              target="_blank"
            >
              <span className="justify-center">Get Started</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="supoort"
            src="/images/support.svg"
          />
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
              Used by world wide organisations
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/images/harv.png"
              alt="Harvard Logo"
              className="block object-contain h-16 greyC"
            />
          </div>

          {/* <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/images/harv.png"
                alt="Harvard Logo"
                className="block object-contain h-16 greyC"
             />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Shopify-Logo.svg"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div> */}
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
          The core of your customer support
        </h1>
        <h2 className="mb-8 text-xl Avenir font-semibold text-gray-600 text-center">
          Having a central location for customers requests is key for a help
          desk. It allows you to have a complete picture of each customer, so
          you can offer the right support.
        </h2>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg p-4">
          <iframe
            width="100%"
            height="520"
            src="https://www.youtube.com/embed/LORGa1zV2us"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            {/* <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a> */}

            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 order-1 lg:order-0">
                  <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
                    Multiple deployment options
                  </h2>
                  <p className="mb-8 text-gray-500 leading-loose">
                    Peppermint is built to be hosted in a docker container,
                    which can be easily scaled through k8's. In addition to this
                    you can host peppermint through pm2 or even locally with
                    NodeJS
                  </p>
                  <a
                    className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
                    href="https://www.linode.com/marketplace/apps/peppermint-lab/peppermint/"
                    target="_blank"
                  >
                    Get Started through Linode
                  </a>
                </div>
                <div className="w-full lg:w-1/2 px-4 order-0 lg:order-1 mb-8 lg:mb-0">
                  <img src="images/deploy.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
