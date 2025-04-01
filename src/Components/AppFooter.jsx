

const AppFooter = () => {
    return (
      <footer className="bg-gray-500 text-white py-6 text-center">
        <p>&copy; 2025 FreelancePro. All rights reserved.</p>
        <div className="space-x-6 mt-4">
          <a href="/facebook" className="hover:text-orange-500">
            Facebook
          </a>
          <a href="/twitter" className="hover:text-orange-500">
            Twitter
          </a>
          <a href="/linkedin" className="hover:text-orange-500">
            LinkedIn
          </a>
        </div>
      </footer>
    );
}

export default AppFooter