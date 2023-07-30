import { useAppSelector } from "../hooks/redux-hooks";
import { useGetTweetsQuery } from "../features/tweet/tweet.api-slice";
import { selectIsAuthenticated } from "../features/auth/auth.slice";
import { selectToastMessage } from "../features/toast/toast.slice";

import Header from "./Header";
import CreateTweet from "../features/tweet/CreateTweet";
import TweetList from "../features/tweet/TweetList";
import TweetComposeButton from "./TweetComposeButton";
import { useEffect } from "react";

const Feed = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const toastMessage = useAppSelector(selectToastMessage);

  const {
    data: tweets,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error,
  } = useGetTweetsQuery(undefined, {
    pollingInterval: 15000, // every 15s on this page, it will requery the data
    refetchOnFocus: true, // refetch on putting focus back to browser window
    refetchOnMountOrArgChange: true, // refetch on component mount
  });
  useEffect(() => {
    refetch();
  });
  return (
    // this margin-bottom is to compensate for the height of <BottomNavigation /> i.e. h-12
    <div className="mb-12">
      <Header parentComponent="Feed" />
      <CreateTweet from="Feed" />
      <TweetList
        showParentTweet={false}
        tweets={tweets}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      />

      {isAuthenticated && (
        <div
          className={`ph:hidden absolute ${
            toastMessage ? "bottom-24" : "bottom-20"
          } right-2 ph_sm:right-4 z-30`}
        >
          <TweetComposeButton from="App" />
        </div>
      )}
    </div>
  );
};

export default Feed;
