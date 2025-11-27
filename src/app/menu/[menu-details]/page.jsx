import Image from "next/image";
import Link from "next/link";

async function getSingleMenu(id) {
  try {
    const res = await fetch(
      `https://cheesy-bites-server.vercel.app/menu/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function MenuDetailsPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams["menu-details"];
  const menu = await getSingleMenu(id);

  if (!menu) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] px-4">
        <div className="max-w-md w-full text-center bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-50 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-50 rounded-full blur-2xl opacity-60"></div>

          <div className="relative mx-auto w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md border border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Oops! Dish Not Found
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We couldn't find the menu item you're looking for. It might have
            been removed or the link is incorrect.
          </p>

          <div className="mb-8 py-2 px-4 bg-gray-50 rounded-lg inline-block border border-gray-200 border-dashed">
            <p className="text-xs text-gray-400 font-mono">ID: {id}</p>
          </div>

          <Link href="/menu">
            <button className="w-full bg-black text-white py-3.5 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform active:scale-[0.98] flex items-center justify-center gap-2 group">
              <span>Back to Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = menu.oldPrice
    ? Math.round(((menu.oldPrice - menu.price) / menu.oldPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-10 px-4 sm:px-6 lg:px-8 font-sans mb-20">
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          href="/menu"
          className="inline-flex items-center text-gray-500 hover:text-orange-600 transition-colors font-medium group"
        >
          <span className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md mr-2 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </span>
          Back to Menu
        </Link>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="relative h-[300px] lg:h-full w-full bg-gray-100 lg:col-span-2">
            <Image
              src={menu.image}
              alt={menu.title}
              fill
              className=" object-cover transition-transform duration-700 hover:scale-105"
              priority
            />

            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {discount > 0 && (
                <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {discount}% OFF
                </span>
              )}
              <span
                className={`px-4 py-1 rounded-full text-sm font-bold shadow-lg ${
                  menu.available
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {menu.available ? "In Stock" : "Sold Out"}
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-xs bg-orange-50 px-3 py-1.5 rounded-lg">
                {menu.category} • {menu.type}
              </span>
              <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold text-gray-800">{menu.rating}</span>
                <span className="text-gray-400 text-sm font-normal">
                  (120+ reviews)
                </span>
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {menu.title}
            </h1>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              {menu.description}
            </p>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                <div className="p-1.5 bg-white rounded-full shadow-sm text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    Calories
                  </p>
                  <p className="font-semibold text-gray-800 text-sm">
                    {menu.calories} kcal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                <div className="p-1.5 bg-white rounded-full shadow-sm text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    Prep Time
                  </p>
                  <p className="font-semibold text-gray-800 text-sm">
                    {menu.prepTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-900 uppercase mb-2 tracking-wider">
                Choose Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {menu.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    className="px-5 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 font-semibold hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50 transition-all capitalize focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-900 uppercase mb-2 tracking-wider">
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {menu.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200 capitalize"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto border-t border-gray-100 pt-6">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm font-medium line-through">
                  {menu.oldPrice ? `৳${menu.oldPrice}` : ""}
                </span>
                <span className="text-4xl font-extrabold text-orange-600">
                  ৳{menu.price}
                </span>
              </div>

              <button className="flex-1 w-full bg-black text-white py-3.5 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all shadow-xl shadow-orange-100 transform active:scale-[0.98] flex justify-center items-center gap-2 group">
                <span>Add to Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
