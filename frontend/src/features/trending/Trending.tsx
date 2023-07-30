import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { GrSearch } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

import useAuth from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  selectWhatsHappening,
  selectWhoToFollow,
  showWhatsHappening,
  showWhoToFollow,
} from "./trending.slice";

import ProfilePicture from "../../components/ProfilePicture";
import TrendMorePopup from "./TrendMorePopup";

import constants from "../../constants";

const Trending = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const whatsHappening = useAppSelector(selectWhatsHappening);
  const whoToFollow = useAppSelector(selectWhoToFollow);

  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTrendId, setSelectedTrendId] = useState<string | undefined>();

  useEffect(() => {
    dispatch(showWhatsHappening());
    dispatch(showWhoToFollow());
    setSelectedTrendId(whatsHappening[0]?.id);
  }, [dispatch, whatsHappening]);

  // TODO: we'll do more with this function when we'll implement the search functionality
  const handleSearch = (title: string) => {
    let t = title;
    const firstLetter = title[0];
    if (firstLetter === "#") {
      t = title.substring(1);
    }
    navigate(`/search?q=${t}`);
  };

  const handleClickTrendingMore = (id: string) => {
    setSelectedTrendId(id);
    setShowPopup((prevState) => !prevState);
  };

  const handleGoToProfile = (twitterHandle: string) => {
    navigate("/" + twitterHandle);
  };

  return (
    <>
      {/* Search Bar */}
      <section className="flex items-center h-12">
        <div className="flex items-center w-full px-4 bg-gray-100 rounded-full">
          <GrSearch />
          <input
            type="text"
            placeholder="Search Twitter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3 py-2 bg-gray-100 focus:outline-none"
          />
          {searchTerm !== "" && (
            <div
              onClick={() => setSearchTerm("")}
              className="p-1 -mr-1 rounded-full bg-twitter hover:cursor-pointer hover:bg-twitter-dark"
            >
              <IoCloseSharp className="text-white" />
            </div>
          )}
        </div>
      </section>

      {/* Section: What's Happening */}
      <section className="pt-3 mt-6 bg-gray-100 rounded-2xl">
        <h2 className="px-4 mb-6 text-xl font-extrabold">What's Happening</h2>

        {whatsHappening.map((item) => (
          <div
            key={item.id}
            className="relative flex items-start p-4 hover:bg-gray-200 hover:cursor-pointer"
          >
            <div
              onClick={() => handleSearch(item.title)}
              className="flex flex-col flex-1 space-y-1"
            >
              <div className="flex items-center space-x-1 text-[13px] text-gray-600">
                {item.context && <span>{item.context}</span>}
                {(item.time || item.isTrending) && <BsDot />}
                {item.time && !item.isTrending && <span>{item.time}</span>}
                {item.isTrending && !item.time && <span>Trending</span>}
              </div>
              <span className="font-bold text-[15px] text-gray-700">
                {item.title}
              </span>
              {item.numberOfTweets && (
                <span className="text-[13px] text-gray-600">
                  {item.numberOfTweets} Tweets
                </span>
              )}
            </div>

            <div className="max-w-[25%]">
              {item.image ? (
                <img src={item.image} width={68} height={68} alt="FIFA" />
              ) : (
                <div
                  onClick={() => handleClickTrendingMore(item.id)}
                  className="flex items-center justify-center w-8 h-8 -mt-1 -mr-2 rounded-full hover:text-twitter hover:bg-twitter-light hover:cursor-pointer"
                >
                  <FiMoreHorizontal className="text-lg" />
                </div>
              )}
            </div>
            {showPopup && selectedTrendId === item.id && (
              <TrendMorePopup itemId={item.id} />
            )}
          </div>
        ))}
        <div
          onClick={() => navigate("/explore")}
          className="p-4 hover:bg-gray-200 hover:cursor-pointer rounded-bl-2xl rounded-br-2xl"
        >
          <span className="text-twitter text-[15px]">Show more</span>
        </div>
      </section>

      {/* Section: Who to follow */}
      <section className="pt-3 mt-6 bg-gray-100 rounded-2xl">
        <h2 className="px-4 mb-6 text-xl font-extrabold">Who to follow</h2>

        {whoToFollow.map((item) => (
          <div
            key={item.id}
            className="flex items-start p-4 hover:bg-gray-200 hover:cursor-pointer"
          >
            <div className="flex-1">
              <div
                onClick={() => handleGoToProfile(item.handle)}
                className="flex items-start"
              >
                <ProfilePicture
                  uri={constants.placeholder_profilePicture}
                  username={auth.user?.twitterHandle}
                />
                <div className="flex flex-col ml-4">
                  <span className="font-bold text-[15px] text-gray-700 hover:underline">
                    {item.fullName}
                  </span>
                  <span className="text-[13px] text-gray-600">
                    @{item.handle}
                  </span>
                  {item.isPromoted && (
                    <div className="flex items-center mt-1">
                      <BsFillArrowUpRightSquareFill className="text-xs" />
                      <span className="pl-1 text-xs text-gray-700">
                        Promoted
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="max-w-[30%]">
              <button
                onClick={() => {}}
                className="bg-black text-white text-[15px] py-[6px] px-4 rounded-full"
              >
                Follow
              </button>
            </div>
          </div>
        ))}
        <div
          onClick={() => navigate("/connect_people")}
          className="p-4 hover:bg-gray-200 hover:cursor-pointer rounded-bl-2xl rounded-br-2xl"
        >
          <span className="text-twitter text-[15px]">Show more</span>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-6 text-sm text-gray-600">
        <div className="flex flex-wrap items-center">
          <Link to="/" className="pb-1 pr-2 hover:underline">
            Terms of Service
          </Link>
          <Link to="/" className="pb-1 pr-2 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="pb-1 pr-2 hover:underline">
            Cookie Policy
          </Link>
          <Link to="/" className="pb-1 pr-2 hover:underline">
            Accessibility
          </Link>
          <Link to="/" className="pb-1 pr-2 hover:underline">
            Ads info
          </Link>
          <Link to="/" className="flex items-center pb-1 hover:underline">
            <span>More</span>
            <FiMoreHorizontal className="pl-1 pt-[3px]" />
          </Link>
        </div>
        <span>&copy; {new Date().getFullYear()} Twitter Clone, Inc.</span>
      </section>
    </>
  );
};

export default Trending;
