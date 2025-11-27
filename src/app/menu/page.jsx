"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const hoverColorClass = "bg-amber-700";
const borderColor = "border-amber-700";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://cheesy-bites-server.vercel.app/menu", {
          cache: "no-store",
        });
        const data = await res.json();
        setMenuItems(data);
        setFilteredItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch menu items", error);
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    setSearchLoading(true);

    const delayDebounceFn = setTimeout(() => {
      const results = menuItems.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredItems(results);
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, menuItems]);

  const Spinner = () => (
    <div className="flex justify-center items-center py-20">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-amber-700"></div>
        <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-500 animation-delay-200"></div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Delicious Menu
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore our wide range of mouth-watering dishes, crafted with passion
          and the freshest ingredients. From cheesy pizzas to savory sides,
          satisfy your cravings today!
        </p>
      </div>

      <div className="max-w-md mx-auto mb-12 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for pizza, burger..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-5 py-3 pl-12 rounded-full border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all shadow-sm"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </div>
        </div>
      </div>

      {loading || searchLoading ? (
        <Spinner />
      ) : filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-56 w-full group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {!item.available && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-md">
                    Stock Out
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                      {item.title}
                    </h2>
                    <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full font-bold border border-yellow-200">
                      ★ {item.rating}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-600">
                      ৳{item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ৳{item.oldPrice}
                      </span>
                    )}
                  </div>

                  <Link href={`/menu/${item._id}`}>
                    <button
                      className={`
                        rounded-xl relative px-5 py-2.5 text-sm font-medium tracking-widest  
                        text-amber-700 ${borderColor} border bg-black overflow-hidden 
                        transition-colors duration-300 group hover:text-black focus:outline-none
                      `}
                    >
                      <span
                        className={`
                          absolute inset-0 w-full h-full ${hoverColorClass} 
                          transform origin-top scale-y-0 group-hover:scale-y-100 
                          transition-transform duration-500 ease-out
                        `}
                        aria-hidden="true"
                      ></span>
                      <span className="relative z-20">Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-400">
            No items found matching "{searchText}"
          </h3>
          <p className="text-gray-500 mt-2">
            Try searching for something else!
          </p>
        </div>
      )}
    </div>
  );
}
