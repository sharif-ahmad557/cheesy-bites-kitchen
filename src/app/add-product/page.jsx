"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [slug, setSlug] = useState("");

  const hoverColorClass = "bg-amber-700";
  const borderColor = "border-amber-700";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        toast.error("You need to login first!");
        router.push("/login");
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    const generatedSlug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    setSlug(generatedSlug);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const toastId = toast.loading("Adding product...");

    try {
      const splitToArray = (str) => str.split(",").map((item) => item.trim());

      const productData = {
        title: form.title.value,
        type: form.type.value,
        category: form.category.value,
        price: parseFloat(form.price.value),
        oldPrice: form.oldPrice.value ? parseFloat(form.oldPrice.value) : null,
        description: form.description.value,
        image: form.image.value,
        rating: parseFloat(form.rating.value),
        available: form.available.value === "true",
        tags: splitToArray(form.tags.value),
        calories: parseFloat(form.calories.value),
        prepTime: form.prepTime.value,
        slug: form.slug.value,
        sizes: splitToArray(form.sizes.value),
        ingredients: splitToArray(form.ingredients.value),
      };

      const res = await fetch("https://cheesy-bites-server.vercel.app/menu", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        toast.success("Product Added Successfully!", { id: toastId });
        form.reset();
        setSlug("");
        router.push("/menu");
        router.refresh();
      } else {
        toast.error("Failed to add product", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", { id: toastId });
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

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex justify-center overflow-hidden">
      <div className="max-w-5xl w-full bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 transform transition-all duration-700 ease-out translate-y-0 opacity-100 animate-fade-in-up">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-500 tracking-tight animate-pulse">
            Add New Menu Item
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill in the details below. Separate multiple items (tags, sizes)
            with commas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Title & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Title
              </label>
              <input
                name="title"
                type="text"
                required
                onChange={handleTitleChange}
                placeholder="Classic Pepperoni Pizza"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:border-amber-500/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Slug (Auto-generated)
              </label>
              <input
                name="slug"
                type="text"
                required
                value={slug}
                readOnly
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-gray-400 border border-gray-600 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Row 2: Type & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Type
              </label>
              <input
                name="type"
                type="text"
                required
                placeholder="Italian, Mexican, etc."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Category
              </label>
              <input
                name="category"
                type="text"
                required
                placeholder="Pizza, Burger, Drink"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Price (৳)
              </label>
              <input
                name="price"
                type="number"
                required
                placeholder="790"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Old Price (Optional)
              </label>
              <input
                name="oldPrice"
                type="number"
                placeholder="900"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Rating (0-5)
              </label>
              <input
                name="rating"
                type="number"
                step="0.1"
                max="5"
                required
                placeholder="4.7"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Calories (kcal)
              </label>
              <input
                name="calories"
                type="number"
                required
                placeholder="720"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Prep Time
              </label>
              <input
                name="prepTime"
                type="text"
                required
                placeholder="20 min"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Image URL
              </label>
              <input
                name="image"
                type="url"
                required
                placeholder="https://i.postimg.cc/..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">
                Availability
              </label>
              <select
                name="available"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              >
                <option value="true">Available (True)</option>
                <option value="false">Stock Out (False)</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 bg-gray-750 p-4 rounded-xl border border-gray-700/50">
            <p className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
              Details (Separate by comma)
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-400">Tags</label>
                <input
                  name="tags"
                  type="text"
                  required
                  placeholder="meat, popular, spicy"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400">Sizes</label>
                <input
                  name="sizes"
                  type="text"
                  required
                  placeholder="medium, large, family"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400">Ingredients</label>
                <input
                  name="ingredients"
                  type="text"
                  required
                  placeholder="dough, tomato sauce, mozzarella, pepperoni"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              required
              placeholder="Detailed description of the food item..."
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-500 resize-none transition-all duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className={`
                w-full rounded-xl relative px-8 py-4 
                text-base font-bold tracking-widest text-amber-500 
                ${borderColor} border bg-black overflow-hidden 
                transition-all duration-300 group hover:text-black hover:shadow-amber-900/50 hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]
                focus:outline-none
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
              <span className="relative z-20 flex justify-center items-center gap-2">
                ADD PRODUCT TO MENU
              </span>
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
