import {
  FaBell,
  FaEnvelope,
  FaHeart,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const FreelanceHome = () => {
  const stories = [
    {
      img: "https://th.bing.com/th/id/OIP.ZpvmVktDVV-W65uEKlmL-gHaEw?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      quote: "People love our logo, and we love Fiverr.",
      name: "Jennifer Gore",
      title: "CEO of Weleet",
    },
    {
      img: "https://th.bing.com/th/id/OIP.7RD2rc60kYEhX77wus7oVwAAAA?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      quote: "Fiverr is an amazing resource for anyone in the startup space.",
      name: "Adam Mashaal",
      title: "CEO of Mashfeed",
    },
    {
      img: "https://th.bing.com/th/id/OIP.Hk0cZL9pWh0cKeqlLXtqEAHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      quote: "There is no way I could have produced anything without Fiverr.",
      name: "Christopher Sunami",
      title: "Music Producer",
    },
    {
      img: "https://th.bing.com/th/id/OIP.uvOW8fA2-Y3kYRmlQcDnngHaE8?rs=1&pid=ImgDetMain",
      quote:
        "Fiverr enables me to quickly, efficiently and cost-effectively get things done.",
      name: "Cristina Dolan",
      title: "Entrepreneur",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          freelancer<span className="text-green-500">.</span>
        </h1>
        <input
          type="text"
          placeholder="What service are you looking for today?"
          className="w-1/2 p-2 border rounded-md"
        />
        <div className="flex space-x-6 items-center">
          <FaBell className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700" />
          <FaEnvelope className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700" />
          <FaHeart className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-600">Orders</button>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      <header
        className="relative flex items-center justify-center h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1163537945/photo/concentrated-young-man-in-eyeglasses-reading-information-from-paper-documents-and-checking-in.jpg?s=612x612&w=0&k=20&c=EIJZFS5qB46ZomnvEvK3o9Wgk6R3BF0oH_VvK0uWqMk=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold">Work Your Way</h2>
          <p className="mt-2">You bring the skill. We'll make earning easy.</p>
          <button className="px-6 py-2 mt-4 text-blue-700 bg-white rounded-sm font-bold text-lg ">
            Become a Seller
          </button>
        </div>
      </header>

      <section className="flex justify-around p-10 bg-white">
        <div className="text-center">
          <h3 className="text-xl font-bold">A Gig is Bought Every</h3>
          <p className="text-3xl font-bold text-green-500">4 SEC</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Transactions</h3>
          <p className="text-3xl font-bold text-green-500">50M+</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Price Range</h3>
          <p className="text-3xl font-bold text-green-500">$5 - $10,000</p>
        </div>
      </section>

      <div className="py-14  bg-white text-center   ">
        <h2 className="text-4xl font-bold mb-10 ">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <FaFileAlt className="text-4xl text-gray-600" />
            <h3 className="text-3xl font-semibold">1. Create a Gig</h3>
            <p className="text-md ">
              Sign up for free, set up your Gig, and offer your work to our
              global audience.
            </p>
          </div>
          <div className="flex flex-col  items-center space-y-4 ">
            <FaEnvelope className="text-4xl text-gray-600" />
            <h3 className="text-3xl font-semibold">2. Deliver great work</h3>
            <p className=" text-md">
              Get notified when you get an order and use our system to discuss
              details with customers.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaClipboardCheck className="text-4xl text-gray-600" />
            <h3 className="text-3xl font-semibold">3. Get paid</h3>
            <p className=" text-md">
              Get paid on time, every time. Payment is available for withdrawal
              as soon as it clears.
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Buyer stories</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <div key={index} className="flex items-center space-x-6">
              <img
                src={story.img}
                alt={story.name}
                className="w-64 h-64 object-cover"
              />
              <div className="text-left">
                <p className="italic text-lg">"{story.quote}"</p>
                <p className="font-semibold mt-2">{story.name}</p>
                <p className="text-gray-600 text-sm">{story.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelanceHome;
