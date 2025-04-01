const home = () => {
  return (
    <>
    <div className="container mx-auto flex flex-col ">
      <div className=" p-6 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Freelance Service Platform
        </h1>
      </div>

      <body className=" flex items-center justify-center ">
        <div class="bg-amber-700 text-white rounded-2xl p-10 max-w-4xl  text-center relative">
          <h1 class=" text-4xl font-bold">
            Scale your professional workforce with <em>freelancers</em>
          </h1>
          <div class="mt-10 p-4  relative w-full max-w-md mx-auto ">
            <input
              type="text"
              placeholder="Search for any service..."
              className="w-full p-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-900 p-2  rounded-lg ">
              🔍
            </button>
          </div>
          <div class="mt-8 p-10   text-sm opacity-75  ">
            <p>Trusted by:</p>
            <div class="flex justify-center gap-4 mt-2">
              <span>Meta</span>
              <span>Google</span>
              <span>Netflix</span>
              <span>P&G</span>
              <span>PayPal</span>
              <span>Payoneer</span>
            </div>
          </div>

          <div class="absolute top-20 left-5  p-3  rounded-lg">
            <img src="luisa.jpg" alt="Jenny" class="w-24 h-24 rounded-lg" />
            <p class="text-sm ">
              Luisa
              <br /> Voiceover & Singer
            </p>
          </div>
          <div class="absolute top-24 right-5 p-3 rounded-lg">
            <img src="talor.jpg" alt="Jordan" class="w-24 h-24 rounded-lg" />
            <p class="text-sm ">
              Talor
              <br />
              Production Manager
            </p>
          </div>
          <div class="absolute bottom-5 left-5 bg-red-60 p-3  rounded-lg ">
            <img
              src="colin.jpg"
              alt="Colin"
              class="w-24  h-24 rounded-lg translate-x-2  "
            />
            <p class="text-sm ">
              Paul
              <br />
              Creative Director
            </p>
          </div>
        </div>
      </body>

      <div class="flex items-center justify-around m-6 pt-6  ">
        <div className="flex gap-8 flex-wrap  justify-around cursor-pointer ">
          <div className="w-40 h-32 bg-slate-100  border-2 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center">
            <img src="icon1.png" alt="Programming" className="w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">Mobile Development</p>
          </div>
          <div class="w-40 h-32 bg-slate-100 border-2 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center">
            <img src="icon2.png" alt="Graphics" className="w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">Ui & Ux Design</p>
          </div>
          <div className="w-40 h-32 bg-slate-100 border-2 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center">
            <img src="icon3.png" alt="Marketing" className="w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">Web Development</p>
          </div>
          <div className="w-40 h-32 bg-slate-100  border-2 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center">
            <img src="icon4.png" alt="Writing" className="w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">Cloud Computing</p>
          </div>
          <div className="w-40 h-32 bg-slate-100  border-2 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center">
            <img src="icon5.png" alt="Video" className="w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">Digital Marketing</p>
          </div>
          <div className="w-40 h-32 bg-slate-100  border-2 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center">
            <img src="icon6.png" alt="Music" className="w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">AI Services</p>
          </div>
        </div>
      </div>

      <body className="pb-10 ">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Popular Services
        </h2>
        <div className="flex gap-4 p-2 overflow-x-auto justify-around">
          <div className="w-48 h-64  border-2 rounded-lg p-4 flex flex-col justify-between shadow-lg">
            <h3 className="text-lg font-bold">Website Development</h3>
            <img
              src="site.jpg"
              alt="Website Development"
              className="rounded-lg "
            />
          </div>
          <div class="w-48 h-64 border-2 rounded-lg p-4 flex flex-col justify-between shadow-lg">
            <h3 class="text-lg font-bold">Mobile Development</h3>
            <img src="mobile.jpg" alt="Logo Design" class="rounded-lg " />
          </div>
          <div class="w-48 h-64  rounded-lg p-4 flex flex-col justify-between shadow-lg border-2">
            <h3 class="text-lg font-bold">
              UI & UX <br />
              Design
            </h3>
            <img src="ux-ui.jpg" alt="SEO" class="rounded-lg  " />
          </div>
          <div class="w-48 h-64 rounded-lg p-4 flex flex-col justify-between shadow-lg border-2">
            <h3 class="text-lg font-bold">Architecture & Interior Design</h3>
            <img
              src="cloud.jpg"
              alt="Architecture & Interior Design"
              class="rounded-lg bg-none"
            />
          </div>
          <div class="w-48 h-64 rounded-lg p-4 flex flex-col justify-between shadow-lg border-2">
            <h3 class="text-lg font-bold">Social Media Marketing</h3>
            <img
              src="social.jpg"
              alt="Social Media Marketing"
              class="rounded-lg bg-yellow-500"
            />
          </div>
          <div class="w-48 h-64  rounded-lg p-4 flex flex-col justify-between shadow-lg border-2">
            <h3 class="text-lg font-bold">Voice Over</h3>
            <img src="voice.jpg" alt="Voice Over" class="rounded-lg " />
          </div>
        </div>
      </body>

      <section className="bg-white p-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            The premium freelance solution for businesses
          </h1>

          {/* Feature List */}
          <div className="space-y-4">
            <div className="flex  items-start space-x-3">
              <span className="text-green-600 text-2xl">✔</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Dedicated hiring experts
                </h3>
                <p className="text-gray-600">
                  Count on an account manager to find you the right talent and
                  see to your project’s every need.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-2xl">✔</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Satisfaction guarantee
                </h3>
                <p className="text-gray-600">
                  Order confidently, with guaranteed refunds for
                  less-than-satisfactory deliveries.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-2xl">✔</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Advanced management tools
                </h3>
                <p className="text-gray-600">
                  Seamlessly integrate freelancers into your team and projects.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-green-600 text-2xl">✔</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Flexible payment models
                </h3>
                <p className="text-gray-600">
                  Pay per project or opt for hourly rates to facilitate
                  longer-term collaboration.
                </p>
              </div>
            </div>
          </div>

          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Try Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="fiverr-pro.jpg"
            alt="Freelance Pro"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <body class="bg-gray-100">
        <section class="p-6 bg-gray-50">
          <h2 class="text-xl font-bold text-center mb-6">
            Guides to Help You Grow
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <img
                src="side-business.jpg"
                alt="Business Guide"
                class="rounded-md"
              />
              <p class="mt-2 text-center text-blue-600 font-semibold">
                Start a Side Business
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <img src="idea.jpg" alt="Ecommerce" class="rounded-md" />
              <p class="mt-2 text-center text-blue-600 font-semibold">
                Ecommerce Business Ideas
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <img src="online.jpg" alt="Online Business" class="rounded-md" />
              <p class="mt-2 text-center text-blue-600 font-semibold">
                Start an Online Business
              </p>
            </div>
          </div>
        </section>
      </body>

      <footer class="bg-white p-10 border-t shadow-md">
        <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 class="font-bold text-lg mb-2">Categories</h3>
            <ul class="space-y-2 text-blue-600">
              <li>
                <a href="#">Graphics & Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Writing & Translation</a>
              </li>
              <li>
                <a href="#">Video & Animation</a>
              </li>
              <li>
                <a href="#">Music & Audio</a>
              </li>
              <li>
                <a href="#">Programming & Tech</a>
              </li>
              <li>
                <a href="#">AI Services</a>
              </li>
              <li>
                <a href="#">Consulting</a>
              </li>
              <li>
                <a href="#">Data</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-2">For Clients</h3>
            <ul class="space-y-2 text-blue-600">
              <li>
                <a href="#">How Fiverr Works</a>
              </li>
              <li>
                <a href="#">Customer Success Stories</a>
              </li>
              <li>
                <a href="#">Trust & Safety</a>
              </li>
              <li>
                <a href="#">Quality Guide</a>
              </li>
              <li>
                <a href="#">
                  Fiverr Learn{" "}
                  <span class="text-gray-500 text-sm">Online Courses</span>
                </a>
              </li>
              <li>
                <a href="#">Fiverr Guides</a>
              </li>
              <li>
                <a href="#">Fiverr Answers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-2">For Freelancers</h3>
            <ul class="space-y-2 text-blue-600">
              <li>
                <a href="#">Become a Fiverr Freelancer</a>
              </li>
              <li>
                <a href="#">Become an Agency</a>
              </li>
              <li>
                <a href="#">Kickstart</a>
              </li>
              <li>
                <a href="#">Community Hub</a>
              </li>
              <li>
                <a href="#">Forum</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-2">Business Solutions</h3>
            <ul class="space-y-2 text-blue-600">
              <li>
                <a href="#">Fiverr Pro</a>
              </li>
              <li>
                <a href="#">Project Management Service</a>
              </li>
              <li>
                <a href="#">
                  ClearVoice{" "}
                  <span class="text-gray-500 text-sm">Content Marketing</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Working Not Working{" "}
                  <span class="text-gray-500 text-sm">Creative Talent</span>
                </a>
              </li>
              <li>
                <a href="#">
                  AutoDS{" "}
                  <span class="text-gray-500 text-sm">Dropshipping Tool</span>
                </a>
              </li>
              <li>
                <a href="#">Fiverr Logo Maker</a>
              </li>
              <li>
                <a href="#">Contact Sales</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
      </>
  );
};

export default home;
