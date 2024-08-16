import React from "react";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Leroy Jenkins",
      time: "2 days ago",
      rating: "4.5",
      content:
        "Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.",
      color: "bg-black",
      textColor: "text-white",
      img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Alex Johnson",
      time: "1 week ago",
      rating: "4.8",
      content:
        "Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat.",
      color: "bg-orange-600",
      textColor: "text-white",
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Maria Garcia",
      time: "1 month ago",
      rating: "4.2",
      content:
        "Vestibulum commodo, ante sit urna purus rutrum sem. Nulla facilisi. Ut euismod mi vitae justo ultrices, eu gravida turpis fermentum.",
      color: "bg-black",
      textColor: "text-white",
      img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="my-20">
      <div className="lg:max-w-4xl mx-auto my-8 text-center ">
        <p className="text-sm text-orange-600 font-bold">Testimonials</p>
        <h1 className="text-4xl font-bold">See Our Happy Customers</h1>
      </div>
      <div className="flex flex-wrap lg:space-y-0 space-y-5 space-x-4 justify-center p-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`w-80 p-4 rounded-md ${review.color} ${review.textColor} flex flex-col space-y-4`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-500">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={review.img}
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <span className="text-sm">{review.time}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">{review.rating}</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
