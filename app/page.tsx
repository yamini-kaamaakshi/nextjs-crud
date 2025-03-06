export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <h1 className="text-3xl font-bold">Welcome to User Management</h1>
        <a href="/users" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          View Users
        </a>
      </div>
  );
}
