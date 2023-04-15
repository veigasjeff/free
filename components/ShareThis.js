import React from 'react';
import { StickyShareButtons } from 'sharethis-reactjs';

const ShareThis = () => {
  const iconFormat = (name) => {
    const iconUrl = `https://platform-cdn.sharethis.com/img/${name.toLowerCase()}.svg`;
    return <img src={iconUrl} alt={`${name} Logo`} width="20" height="20" />;
  };

  return (
    <StickyShareButtons
      config={{
        alignment: 'left',
        color: 'social',
        enabled: true,
        font_size: 12,
        hide_desktop: false,
        labels: 'counts',
        language: 'en',
        min_count: 0,
        networks: ['facebook', 'twitter', 'whatsapp', 'linkedin', 'email'],
        radius: 4,
        show_total: true,
        show_mobile: true,
        show_toggle: true,
        size: 48,
        top: 220,
        iconFormat,
      }}
    />
  );
};

export default ShareThis;
