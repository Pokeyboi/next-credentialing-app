import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md rounded-2xl shadow-2xl bg-white p-10 flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
          Credentialing Quiz
        </h1>
        <p className="text-lg text-gray-500">Test your credentialing knowledge or drill with flashcards!</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link href="/quiz">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white rounded-xl shadow-lg text-lg font-semibold hover:scale-105 transition-transform w-full">
              Start Quiz
            </button>
          </Link>
          <Link href="/flashcards">
            <button className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white rounded-xl shadow-lg text-lg font-semibold hover:scale-105 transition-transform w-full">
              Flashcards
            </button>
          </Link>
        </div>
      </div>
      <footer className="mt-8 text-sm text-gray-400">&copy; {new Date().getFullYear()} Credentialing Quiz</footer>
    </main>
  );
}
