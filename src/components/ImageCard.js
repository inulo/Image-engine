import React from "react";

const imageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="bg-gray-300 max-w-sm rouded overflow-hidden shadow-lg rounded-md">
      <img src={image.webformatURL} alt="" className="w-full"></img>

      <div className="px-6 py4">
        <div className="font-bold text-purple-500 trxt-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" inline-block bg-gray-200 rounded-full
        px-3 py1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default imageCard;
