import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Head>
        <title>WeInvest Presale</title>
      </Head>

      <header className="max-w-5xl mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="WeInvest" className="w-8 h-8" />
          <span className="font-bold text-xl">WeInvest</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Join WeInvest Presale!
        </h1>
        <p className="max-w-xl mb-8">
          Sign up to get early access and updates for WeInvest.  
          The future of investment starts here.
        </p>

        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100"
          />
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition">
            JOIN NOW
          </button>
        </div>
      </main>

      
<section className="mt-16 mb-10">
  <div className="max-w-4xl mx-auto flex justify-center space-x-12 px-4">
    {[
      { file: 'metamask.svg', label: 'MetaMask' },
      { file: 'trustwallet.svg', label: 'Trust Wallet' },
      { file: 'wallet.svg', label: 'Wallet' },
    ].map((icon) => (
      <div key={icon.label} className="flex flex-col items-center">
        <img
          src={`/icons/${icon.file}`}
          alt={icon.label}
          className="w-12 h-12"
        />
        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {icon.label}
        </span>
      </div>
    ))}
  </div>
</section>

    </div>
);
}
