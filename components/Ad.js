import React from 'react';

const Ad = () => (
  <div>
    <iframe
      srcDoc={`
        <script type="text/javascript">
          atOptions = {
            'key' : '3206b5234ee04e5063f1635af3b2f8a4',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
          document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplaynetwork.com/3206b5234ee04e5063f1635af3b2f8a4/invoke.js"></scr' + 'ipt>');
        </script>
      `}
      frameBorder="0"
      scrolling="no"
      width="728"
      height="90"
    />
  </div>
);

export default Ad;
