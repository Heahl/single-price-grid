import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Single Price Grid</title>
        <meta name="description" content="single-price-grid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen grid-cols-12 grid-rows-11 flex-col items-stretch justify-stretch bg-light-gray font-karla md:grid-cols-12 md:grid-rows-12">
        <div className="col-span-10 col-start-2 row-span-3 row-start-2 rounded-t-lg bg-white p-6 shadow-2xl md:col-span-8 md:col-start-3 md:row-span-4 md:row-start-3 md:p-10">
          <h1 className="text-xl font-semibold text-cyan md:mb-10 md:text-3xl">
            Join our community
          </h1>
          <h3 className="my-4 text-lg font-medium text-bright-yellow md:mb-6 md:text-2xl">
            30-day, hassle-free money back guarantee
          </h3>
          <p className="leading-7 text-grayish-blue md:text-lg">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="col-span-10 col-start-2 row-span-3 row-start-5 bg-teal-600 p-6 shadow-2xl md:col-span-4 md:col-start-3 md:row-span-4 md:row-start-7 md:content-evenly md:rounded-bl-lg md:p-10">
          <h3 className="text-lg font-medium text-white md:text-xl">
            Monthly Subscription
          </h3>
          <div className="mb-4 mt-6 flex items-center justify-start">
            <h1 className="mr-3 text-4xl text-white md:text-5xl">$29</h1>
            <span className="text-light-gray/50 md:text-xl">per month</span>
          </div>
          <p className="my-4 text-lg text-white/80 md:text-xl">
            Full access for less than $1 a day
          </p>
          <button className="mt-7 flex h-14 w-full items-center justify-center rounded-lg bg-bright-yellow text-lg font-medium tracking-wider text-white shadow-2xl hover:bg-bright-yellow/50 md:text-xl">
            Sign Up
          </button>
        </div>
        <div className="col-span-10 col-start-2 row-span-3 row-start-8 rounded-b-lg bg-cyan p-6 shadow-2xl  md:col-span-4 md:col-start-7 md:row-span-4 md:row-start-7 md:content-evenly md:rounded-bl-none md:p-10 ">
          <h3 className="mb-4 text-lg text-white md:text-xl ">Why Us</h3>
          <div className="text-white/50 md:text-lg">
            <p>Tutorials by industry experts</p>
            <p>Peer & expert code review</p>
            <p>Coding exercises</p>
            <p>Access to our GitHub repos</p>
            <p>Community forum</p>
            <p>Flashcard decks</p>
            <p>New videos every week</p>
          </div>
        </div>
      </main>
    </>
  );
}
