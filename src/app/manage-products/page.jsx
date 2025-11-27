"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { Trash2, Eye, Edit } from "lucide-react";

export default function ManageProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        toast.error("Access Denied! Login required.");
        router.push("/login");
      } else {
        setUser(currentUser);
        fetchProducts();
      }
    });
    return () => unsubscribe();
  }, [router]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://cheesy-bites-server.vercel.app/menu", {
        cache: "no-store",
      });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load products");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(
        `https://cheesy-bites-server.vercel.app/menu/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Product deleted successfully!");
        const remaining = products.filter((item) => item._id !== id);
        setProducts(remaining);
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-950">
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-amber-700"></div>
          <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-500 animation-delay-200"></div>
        </div>
      </div>
    );
  }
  const hoverColorClass = "bg-amber-600";
  const borderColor = "border-amber-600";
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Manage <span className="text-amber-500">Products</span>
            </h2>
            <p className="text-gray-400 mt-1">
              Total Items:{" "}
              <span className="font-bold text-amber-500">
                {products.length}
              </span>
            </p>
          </div>

          <Link href="/add-product">
            <button
              className={`
      rounded-xl relative px-6 py-3 text-sm font-bold tracking-widest
      text-amber-500 ${borderColor} border bg-black overflow-hidden
      transition-colors duration-300 group hover:text-black focus:outline-none shadow-lg
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
              <span className="relative z-20 uppercase flex items-center gap-2">
                + Add New Item
              </span>
            </button>
          </Link>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800 text-amber-500 uppercase text-xs tracking-wider border-b border-gray-700">
                  <th className="p-6 font-bold">Image</th>
                  <th className="p-6 font-bold">Details</th>
                  <th className="p-6 font-bold">Price</th>
                  <th className="p-6 font-bold">Category</th>
                  <th className="p-6 font-bold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {products.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <td className="p-4">
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden border border-gray-700 group-hover:border-amber-500/50 transition-colors">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>

                    <td className="p-4">
                      <h3 className="font-bold text-white text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                        {item.description}
                      </p>
                    </td>

                    <td className="p-4 font-mono font-bold text-amber-500">
                      ৳{item.price}
                    </td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-800 text-gray-300 border border-gray-700">
                        {item.category}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center justify-center gap-3">
                        <Link href={`/menu/${item._id}`}>
                          <button
                            title="View Details"
                            className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all border border-blue-500/20"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(item._id)}
                          title="Delete Item"
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white transition-all border border-red-500/20"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found.</p>
              <Link
                href="/add-product"
                className="text-amber-500 hover:underline mt-2 inline-block"
              >
                Add your first product
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
