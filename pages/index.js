import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to School Data</h1>
        <div className="flex flex-col gap-4">
          <Link href="/school/showSchool">
            <p className="bg-white text-blue-500 py-2 px-4 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Show School
            </p>
          </Link>
          <Link href="/school/addSchool">
            <p className="bg-white text-blue-500 py-2 px-4 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Add School
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
