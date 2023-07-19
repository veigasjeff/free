import React, { useState, useEffect } from "react";

const YoutubePlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    let playerInstance;
    const onYouTubeIframeAPIReady = () => {
      playerInstance = new window.YT.Player("player", {
        height: "360",
        width: "640",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          mute: 1,
        },
      });
      setPlayer(playerInstance);
    };

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Load the YouTube API script if not already loaded
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      if (playerInstance) {
        playerInstance.destroy();
      }
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoId]);

  return <div id="player" />;
};

export default YoutubePlayer;
