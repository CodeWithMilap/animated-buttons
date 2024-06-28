
export default function Home() {
  return (
    <main className="grow flex flex-col items-center justify-center">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-screen-xl  items-center justify-between p-6 lg:px-20 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-6 lg:gap-8">
          <button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-all relative overflow-hidden duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-white after:absolute after:top-0 after:z-0 after:h-0 after:w-full after:translate-y-0 after:transform after:bg-blue-700 after:transition-all after:duration-200 after:ease-out after:contain-none hover:bg-blue-600/90 hover:after:h-full hover:after:opacity-90 focus-visible:ring-blue-700 bg-blue-600 text-white">
            <span className='relative z-10'>Slide Bottom </span>
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-all relative overflow-hidden duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-white after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-0 after:translate-x-0 after:transform after:bg-blue-700 after:transition-all after:duration-200 after:ease-out after:contain-none hover:bg-blue-600/90 hover:after:w-full hover:after:opacity-90 focus-visible:ring-blue-700 bg-blue-600 text-white">
            <span className='relative z-10'>Slide Left </span>
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-all relative overflow-hidden duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-white after:absolute after:top-0 after:z-0 after:h-full after:w-0 after:translate-x-0 after:transform after:bg-blue-700 after:transition-all after:duration-200 after:ease-out after:contain-none hover:bg-blue-600/90 hover:after:w-full hover:after:opacity-90 focus-visible:ring-blue-700 bg-blue-600 text-white">
            <span className='relative z-10'>Slide Right </span>
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-all relative overflow-hidden duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-white after:absolute after:z-0 after:h-0 after:w-full after:translate-y-0 after:transform after:bg-blue-700 after:transition-all after:duration-200 after:ease-out after:contain-none hover:bg-blue-600/90 hover:after:h-full hover:after:opacity-90 focus-visible:ring-blue-700 bg-blue-600 text-white">
            <span className='relative z-10'>Slide Up </span>
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-all relative overflow-hidden duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-white after:absolute after:z-0 after:h-0 after:w-0 after:translate-y-0 after:transform after:rounded-full after:bg-white/50 after:transition-all after:duration-300 after:ease-out after:contain-none hover:after:h-96 hover:after:w-96 hover:after:opacity-5 focus-visible:ring-blue-700 bg-blue-600 text-white">
            <span className='relative z-10'>Circle Growth </span>
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-all relative overflow-hidden duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-white after:ease  after:absolute after:right-0 after:z-0 after:h-32 after:w-8 after:translate-x-12 after:rotate-12 after:transform after:rounded-full after:bg-white after:opacity-10 after:transition-all after:duration-1000 after:contain-none hover:bg-blue-700 hover:after:-translate-x-96 focus-visible:ring-blue-700 bg-blue-600 text-white">
            <span className='relative z-10'>Rotate </span>
          </button>
        </div>
      </section>
    </main>
  );
}
