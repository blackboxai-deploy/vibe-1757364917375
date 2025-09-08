export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Welcome to your Next.js application!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <span className="text-gray-700 font-medium">Built with Next.js</span>
          </div>
          <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <span className="text-gray-700 font-medium">Styled with Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
            <div className="w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
          </div>
          <p className="text-sm text-gray-500 mt-4">Ready to build something amazing!</p>
        </div>
      </div>
    </main>
  )
}