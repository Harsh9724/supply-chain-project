export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to the Supply Chain App
        </h1>
        <p className="text-gray-600 mb-8">
          Select your role to access the dashboard:
        </p>
        <div className="grid gap-6">
          <a
            href="/buyer"
            className="block bg-blue-500 text-white py-4 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Buyer Dashboard
          </a>
          <a
            href="/seller"
            className="block bg-green-500 text-white py-4 px-6 rounded-lg shadow hover:bg-green-600 transition duration-300">
            Seller Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
