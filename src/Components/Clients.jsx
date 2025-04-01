import React from "react";

const ClientPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-center text-3xl">Freelancer Market</h1>
        <nav className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>
      <main className="p-8">
        <section className="bg-white shadow p-6 mb-8 rounded">
          <h2 className="text-2xl mb-2">Client Name</h2>
          <p>Email: client@example.com</p>
          <p>Phone: +91 12345 67890</p>
        </section>
        <section className="bg-white shadow p-6 rounded">
          <h2 className="text-2xl mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Project A - Completed</li>
            <li>Project B - In Progress</li>
            <li>Project C - Pending</li>
          </ul>
        </section>
      </main>
      <footer className="bg-blue-500 text-white py-4 text-center">
        <p>&copy; 2025 Freelancer Market. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ClientPage;
