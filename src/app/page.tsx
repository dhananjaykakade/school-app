import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to the School App</h1>
      <p className="text-center mt-4">Manage your school information easily.</p>
      <div className="flex justify-center mt-6">
        <Link href="/add-school">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add School
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/show-schools">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Show Schools
          </button>
        </Link>
      </div>
    </main>
  );
}
