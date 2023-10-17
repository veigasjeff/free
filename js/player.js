
  // Register the Hls.js tech so it can be used in the video.js player
  videojs.registerTech('html5.hlsjs', videojs.getComponent('Html5'));

  // Enable the hlsjs tech
  videojs('my-video', {
    techOrder: ['html5', 'hlsjs'],
  });
