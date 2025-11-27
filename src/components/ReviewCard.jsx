const ReviewCard = ({ review }) => {
  return (
    <div
      className="ReviewCard relative p-6 sm:p-10 w-full h-[320px] rounded-2xl shadow-xl transition-all duration-300 transform 
       bg-gray-800 text-white flex flex-col justify-between border border-gray-700 hover:border-orange-500"
    >
      <div className="absolute top-4 left-4 text-6xl text-orange-500 opacity-60 font-serif">
        &#8220;
      </div>

      <p className="text-lg font-medium italic mt-8 z-10 text-gray-200">
        {review.quote}
      </p>

      <div className="border-t border-gray-600 my-4"></div>

      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-orange-500 mr-3 flex-shrink-0"></div>

        <div>
          <p className="text-base font-semibold text-white">{review.name}</p>
          <p className="text-xs text-gray-400">{review.product} Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
