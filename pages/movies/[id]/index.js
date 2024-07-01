import { useRouter } from 'next/router'
import moviesData from '../../../public/movies.json'
import latestData from '../../../public/latest.json'
import { useEffect, useState, useRef } from 'react'
import AdultSkipAds from '../../../components/AdultSkipAds'
import Head from 'next/head'
import Image from 'next/image'
import Rating from '../../../components/Rating'
import Pagination from '../../../components/Pagination'
import MP3Player from '../../../components/MP3Player'

import Link from 'next/link'
import HomeStyles from '@styles/styles.module.css'
import Script from 'next/script'

const moviesDetail = ({ moviesItem }) => {
  const router = useRouter()
  const { id } = router.query
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 0 // Assume there are 3 pages

  const [latest, setLatest] = useState(latestData)
  const [playerReady, setPlayerReady] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [showAd, setShowAd] = useState(moviesItem.badgegroup === 'Adult');
  const videoPlayerRef = useRef(null);
  const isTvShow = moviesItem.videotvitem && moviesItem.videotvitem.length > 0;

  const handleNext = () => {
    if (isTvShow && currentEpisodeIndex < moviesItem.videotvitem.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    } else if (isTvShow) {
      setCurrentEpisodeIndex(0); // Loop back to the first episode
    }
  };

  const handlePrevious = () => {
    if (isTvShow && currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  };

  const parseVideoItem = (item) => {
    if (!item) return { id: '', thumbnail: '' };
    const [id, params] = item.split('?');
    const thumbnail = new URLSearchParams(params).get('thumbnail');
    return { id, thumbnail };
  };

  const currentVideoItem = isTvShow && moviesItem.videotvitem[currentEpisodeIndex]
    ? parseVideoItem(moviesItem.videotvitem[currentEpisodeIndex])
    : { id: '', thumbnail: '' };

  const movieVideoItem = moviesItem.videomoviesitem && moviesItem.videomoviesitem.length > 0
    ? parseVideoItem(moviesItem.videomoviesitem[0])
    : { id: '', thumbnail: '' };

  const src = isTvShow
    ? `https://short.ink/${currentVideoItem.id}/?thumbnail=${currentVideoItem.thumbnail}`
    : `https://short.ink/${movieVideoItem.id}/?thumbnail=${movieVideoItem.thumbnail}`;
 
  
  
    useEffect(() => {
    const detectMobileDevice = () => {
      const userAgent =
        typeof window.navigator === 'undefined' ? '' : navigator.userAgent
      const mobile = Boolean(
        userAgent.match(
          /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
      setIsMobileDevice(mobile)
    }

    detectMobileDevice()
  }, [])

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Movies Magazine.',
      url: 'https://123moviesmagazine.vercel.app/',
      image: ['https://123moviesmagazine.vercel.app/wp-content/uploads/2023/05/favicon.ico'],
      logo: {
        '@type': 'ImageObject',
        url: 'https://123moviesmagazine.vercel.app/logo.png',
        width: 280,
        height: 100
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://123moviesmagazine.vercel.app/',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://123moviesmagazine.vercel.app/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])

  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Movies Magazine.',
        item: 'https://123moviesmagazine.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'movies',
        item: moviesItem.baseurl
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: moviesItem.name,
        item: moviesItem.siteurl
      }
    ]
  })

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': 'https://gravatar.com/drmovies2022/#person',
        name: 'Dr movies'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://123moviesmagazine.vercel.app/#website',
        url: 'https://123moviesmagazine.vercel.app/',
        name: 'Movies Magazine.',
        publisher: {
          '@id': 'https://gravatar.com/drmovies2022/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': `${moviesItem.siteurl}#webpage`,
        url: moviesItem.siteurl,
        name: `${moviesItem.name} | Movies Magazine.`,
        datePublished: moviesItem.datePublished,
        dateModified: moviesItem.dateModified,
        isPartOf: {
          '@id': 'https://123moviesmagazine.vercel.app/#website'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Person',
        '@id': 'https://123moviesmagazine.vercel.app/author/moviesmagazine./',
        name: 'Dr movies',
        url: 'https://123moviesmagazine.vercel.app/author/moviesmagazine./',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drmovies2022',
          url: 'https://gravatar.com/drmovies2022',
          caption: 'Dr movies',
          inLanguage: 'en-US'
        },
        sameAs: ['https://123moviesmagazine.vercel.app/']
      },
      {
        '@type': 'Article',
        '@id': `${moviesItem.siteurl}#article`,
        headline: `Download ${moviesItem.name} | Movies Magazine.`,
        datePublished: moviesItem.datePublished,
        dateModified: moviesItem.dateModified,
        articleSection: 'Movies movies',
        author: {
          '@id': 'https://123moviesmagazine.vercel.app/author/moviesItem/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drmovies2022/#person'
        },
        description: moviesItem.synopsis,
        image: moviesItem.image,
        name: `Download ${moviesItem.name} | Movies Magazine.`,
        isPartOf: {
          '@id': `${moviesItem.siteurl}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `${moviesItem.siteurl}#webpage`
        }
      },
      {
        '@type': 'BlogPosting',
        '@id': `${moviesItem.siteurl}#blogPost`,
        headline: `Download ${moviesItem.name} | Movies Magazine.`,
        datePublished: moviesItem.datePublished,
        dateModified: moviesItem.dateModified,
        articleSection: 'Other Software',
        author: {
          '@id': 'https://123moviesmagazine.vercel.app/author/moviesmagazine./'
        },
        publisher: {
          '@id': 'https://gravatar.com/drmovies2022/#person'
        },
        description: moviesItem.synopsis,
        image: moviesItem.image,
        name: `Download ${moviesItem.name} | Movies Magazine.`,
        '@id': `${moviesItem.siteurl}#richSnippet`,
        isPartOf: {
          '@id': `${moviesItem.siteurl}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `${moviesItem.siteurl}#webpage`
        }
      }
    ]
  })

  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${moviesItem.siteurl}#webpage`, // Add a comma here
    name: moviesItem.title,
    url: moviesItem.siteurl,
    description: moviesItem.synopsis,
    image: moviesItem.image,
    datePublished: moviesItem.startDate,
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        name: moviesItem.title,
        urlTemplate: moviesItem.siteurl
      }
    },
    locationCreated: {
      '@type': 'Place',
      name: moviesItem.country
    },
    author: {
      '@type': 'Person',
      name: 'Drmovies',
      url: 'https://gravatar.com/drmovies2022'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Movies Magazine.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://123moviesmagazine.vercel.app/og_image.jpg'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
    }
  }

  // Convert newsArticleSchema and videoObjects to JSON strings
  const newsArticleJson = JSON.stringify(newsArticleSchema)

  const ldJsonData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Movie',
    '@id': `${moviesItem.siteurl}`,
    name: moviesItem.title,
    url: moviesItem.siteurl,
    description: moviesItem.synopsis,
    image: moviesItem.image,
    genre: moviesItem.genre,
    datePublished: moviesItem.datePublished,
    director: {
      '@type': 'Person',
      name: moviesItem.director
    },
    actor: moviesItem.starring.map(actor => ({
      '@type': 'Person',
      name: actor
    })),
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        name: moviesItem.title,
        urlTemplate: moviesItem.siteurl
      }
    },
    locationCreated: {
      '@type': 'Place',
      name: moviesItem.country
    },

    author: {
      '@type': 'Person',
      name: 'Drmovies',
      url: 'https://gravatar.com/drmovies2022'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Movies Magazine.???',
      logo: {
        '@type': 'ImageObject',
        url: 'https://123moviesmagazine.vercel.app/og_image.jpg'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
    }
  })

  // const moviesSchema = JSON.stringify({
  //   '@context': 'https://schema.org',
  //   '@type': 'VideoObject',
  //   name: moviesItem.title,
  //   description: moviesItem.text,
  //   uploadDate: moviesItem.datePublished,
  //   thumbnailUrl: moviesItem.backimage,
  //   duration: 'P34S', // Replace with the actual duration if it's different
  //   embedUrl: moviesItem.videourl
  // })

  return (
    <div>
      <Head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <title>
          {' '}
          Review {moviesItem && moviesItem.name} | Movies Magazine.
        </title>
        <link rel='canonical' href={moviesItem && moviesItem.siteurl} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='video.other' />
        <meta
          property='og:title'
          content={`${moviesItem && moviesItem.name} - Movies Magazine.`}
        />
        <meta
          property='og:description'
          content='Explore the world of cinema with Movies Magazine: Captivating movies, top picks, and the latest news.'
        />

        <meta property='og:url' content={`${moviesItem && moviesItem.url}`} />
        <meta
          name='keywords'
          content={`${moviesItem && moviesItem.keywords}`}
        />
        <meta property='og:site_name' content='Movies Magazine.' />
        <meta property='og:type' content='article' />
        <meta
          property=' og:image:alt'
          content={`${moviesItem && moviesItem.group}`}
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='Movies Review' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta
          property='og:image'
          content={`${moviesItem && moviesItem.backimage}`}
        />

        <meta property='og:image:width' content='1280px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k'
        />
        <meta
          name='facebook-domain-verification'
          content='zifsy861dlzorbop8eww76tsqlf7t4'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: ldJsonData }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: newsArticleJson }}
        />
        {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: moviesSchema }}
        /> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        {/* Webpushr tracking code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BDeuTTHBlf3TwViBs2cBn2PfLilOFFEjIt_dkh7csfiAUZQDiVh__Idu3BpAEYqNsZ2wmUUQJ1r1_Dtd3TvS_Dk' });
          `
          }}
        />
           {/* <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          /> */}
      </Head>
        <Script src='../../propler/ads.js' defer />
        <Script src='../../propler/ads2.js' defer />
  <AdultSkipAds />
      <div
        className={`w-full`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center',
          backgroundColor: '#D3D3D3'
        }}
      >
        <h1
          className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-3xl'
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}
        >
          {moviesItem.name}
        </h1>
      </div>
      <div
        className={`w-full`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center',
          backgroundColor: '#D3D3D3'
        }}
      >
        <div
          className='shadow-lg flex items-center justify-center'
          role='navigation'
        >
          <ul
            id='menu-header-menu'
            className='menu flex flex-wrap justify-center'
          >
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Home<span className='p'></span>
                </a>
              </li>
            </button>
            {/* <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../trailer/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Trailers<span className='p'></span>
                </a>
              </li>
            </button> */}
            {/* <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../reviews/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Reviews<span className='p'></span>
                </a>
              </li>
            </button>

            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-security'>
                <a
                  href='../recaps/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Recaps<span className='p'></span>
                </a>
              </li>
            </button> */}
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../movies/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies <span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../latest/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Latest News<span className='p'></span>
                </a>
              </li>
            </button>
          </ul>
        </div>
        <a
          href='https://t.me/watchmovietvshow/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl mt-2 flex items-center justify-center'
          style={{ marginTop: '15px' }}
        >
          <span>
            For Request or Demand Movies Join Telegram
            <i className='fab fa-telegram text-blue-600 hover:text-gray-600 ml-2 w-12 h-12 animate-pulse '></i>
          </span>
        </a>
        <div className='flex-container'>
          <div className='category-container'>
            <Image
              src={moviesItem.channelposter}
              alt={moviesItem.title}
              width={300}
              height={300}
              quality={90}
              objectFit='cover'
              loading='lazy'
              style={{
                width: '400px', // Ensures the image is displayed at this width
                height: '500px', // Ensures the image is displayed at this height
                margin: 'auto',
                marginBottom: '20px',
                borderRadius: '50px',
                boxShadow: '0 0 10px 0 #fff',
                marginTop: '50px',
                filter:
                  'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
              }}
            />

            <div
              style={{ maxWidth: '800px', width: '100%', marginBottom: '20px' }}
            >
              <div className='flex flex-col items-center justify-center'>
                <h2
                  className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-2xl'
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    marginBottom: '12px'
                  }}
                >
                  {moviesItem.title}
                </h2>
              </div>

              <p
                className='text-black text-2xl font-semibold mt-2'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#000',
                  textShadow: '2px 1px 1px #000000'
                }}
              >
                Genre: {moviesItem.genre}
              </p>
              <p
                className='text-black text-2xl font-semibold mt-2'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#000',
                  textShadow: '2px 1px 1px #000000'
                }}
              >
                Director: {moviesItem.directorname}
              </p>
              <p
                className='text-black text-2xl font-semibold mt-2'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#000',
                  textShadow: '2px 1px 1px #000000'
                }}
              >
                Starring: {moviesItem.starring}
              </p>
              <p
                className='text-black text-2xl font-semibold mt-2'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#000',
                  textShadow: '2px 1px 1px #000000'
                }}
              >
                Origin Country: {moviesItem.country}
              </p>
              <p
                className='text-black text-2xl font-semibold mt-2'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#000',
                  textShadow: '2px 1px 1px #000000'
                }}
              >
                Language: {moviesItem.language}
              </p>

              <div className={`${HomeStyles.imageGrid} mt-5`}>
                <img
                  className={`${HomeStyles.image} img-fluid lazyload `}
                  src={moviesItem.directorimg}
                  alt={moviesItem.directorname}
                  title={moviesItem.directorname}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    filter:
                      'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)',
                    boxShadow: '0 0 10px 0 #C0C0C0' // Shadow effect with black color
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={moviesItem.actor1img}
                  alt={moviesItem.actor1}
                  title={moviesItem.actor1}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter:
                      'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={moviesItem.actor2img}
                  alt={moviesItem.actor2}
                  title={moviesItem.actor2}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter:
                      'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={moviesItem.actor3img}
                  alt={moviesItem.actor3}
                  title={moviesItem.actor3}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter:
                      'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={moviesItem.actor4img}
                  alt={moviesItem.actor4}
                  title={moviesItem.actor4}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter:
                      'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
                <img
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={moviesItem.actor5img}
                  alt={moviesItem.actor5}
                  title={moviesItem.actor5}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    boxShadow: '0 0 10px 0 #C0C0C0', // Shadow effect with black color
                    filter:
                      'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                  }}
                  loading='lazy'
                  layout='responsive'
                />
              </div>

              <Rating />

              <p
                className='text-4xl font-bold mb-4'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#000',
                  textShadow: '2px 1px 1px #000000'
                }}
              >
                Watch Online Movies & Tv Series.
              </p>
              {/* <div
      style={{
        width: '100%',
        height: '500px',
        overflow: 'hidden',
        position: 'relative'
      }}
      className='rounded-xl mr-8 flex flex-col border-1 border-blue-600 bg-black p-2'
    >
      {isTvShow && (
        <button
          onClick={handleNext}
          disabled={currentEpisodeIndex === moviesItem.videotvitem.length - 1}
          style={{
            marginBottom: '10px',
            padding: '8px 16px',
            backgroundColor: '#51AFF7', // Blue background
            color: 'white', // White text
            border: 'none',
            cursor: 'pointer',
            borderRadius: '20px', // Rounded corners
            fontWeight: 'bold',
            alignSelf: 'center' // Center align
          }}
        >
          Next - Episode {currentEpisodeIndex === moviesItem.videotvitem.length - 1 ? 1 : currentEpisodeIndex + 2}
        </button>
      )}
      <iframe
        frameBorder='0'
        src={src}
        width='100%'
        height='450px'
        allowFullScreen
        scrolling="0"
        title='Video Player'
        style={{
          filter: 'contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(15deg)'
        }}
      ></iframe>
        <p   className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-sm'              
              >
                *Note: Use Setting in Player to improve the Quality of video to
                HD Quality 1080p.
              </p>
      {isTvShow && (
        <button
          onClick={handlePrevious}
          disabled={currentEpisodeIndex === 0}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#32CD32', // Green background
            color: 'white', // White text
            border: 'none',
            cursor: 'pointer',
            borderRadius: '20px', // Rounded corners
            fontWeight: 'bold',
            alignSelf: 'center' // Center align
          }}
        >
          Prev - Episode {currentEpisodeIndex === 0 ? moviesItem.videotvitem.length : currentEpisodeIndex}
        </button>
      )}

      <img
        src={isTvShow ? currentVideoItem.thumbnail : movieVideoItem.thumbnail}
        alt='Video Thumbnail'
        style={{
          position: 'absolute',
          top: '2px', // Positioning the image at the top to avoid overlaying controls
          left: '10px',
          width: '100px',
          height: '56px',
          borderRadius: '10px'
        }}
      />
    </div> */}
    <div
  style={{
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    position: 'relative'
  }}
  className='rounded-xl mr-8 flex flex-col border-1 border-blue-600 bg-black p-2'
>

  {isTvShow && (
    <button
      onClick={handleNext}
      disabled={currentEpisodeIndex === moviesItem.videotvitem.length - 1}
      style={{
        marginBottom: '10px',
        padding: '8px 16px',
        backgroundColor: '#51AFF7',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '20px',
        fontWeight: 'bold',
        alignSelf: 'center'
      }}
    >
      Next - Episode {currentEpisodeIndex === moviesItem.videotvitem.length - 1 ? 1 : currentEpisodeIndex + 2}
    </button>
  )}

  {moviesItem.dailyitem ? (
    <iframe
      frameBorder='0'
      src={`https://geo.dailymotion.com/player/xkdl0.html?video=${moviesItem.dailyitem}&mute=true&Autoquality=1080p`}
      width='100%'
      height='450px'
      allowFullScreen
      scrolling="0"
      title='Video Player'
      style={{
        filter: 'contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(15deg)'
      }}
    ></iframe>
  ) : (
    <iframe
      frameBorder='0'
      src={src}
      width='100%'
      height='450px'
      allowFullScreen
      scrolling="0"
      title='Video Player'
      style={{
        filter: 'contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(15deg)'
      }}
    ></iframe>
  )}

  <p className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-sm'>
    *Note: Use Setting in Player to improve the Quality of video to HD Quality 1080p.
  </p>

  {isTvShow && (
    <button
      onClick={handlePrevious}
      disabled={currentEpisodeIndex === 0}
      style={{
        marginTop: '10px',
        padding: '8px 16px',
        backgroundColor: '#32CD32',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '20px',
        fontWeight: 'bold',
        alignSelf: 'center'
      }}
    >
      Prev - Episode {currentEpisodeIndex === 0 ? moviesItem.videotvitem.length : currentEpisodeIndex}
    </button>
  )}

  <img
      src={isTvShow ? currentVideoItem.thumbnail : movieVideoItem.thumbnail}
    alt='Video Thumbnail'
    style={{
      position: 'absolute',
      top: '2px',
      left: '10px',
      width: '100px',
      height: '56px',
      borderRadius: '10px'
    }}
  />
</div>
              <div className='flex flex-col items-center justify-center'></div>
              {moviesItem.mp3player && (
                <MP3Player mp3Url={moviesItem.mp3player} />
              )}

              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                route='movies'
                style={{
                  marginTop: '50px',
                  marginBottom: '50px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                }}
              />

              <div className='flex flex-col items-center justify-center'>
                {moviesItem.head2 && (
                  <p className='bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-bg text-black text-bg mt-2 text-3xl mb-2 items-center justify-center'>
                    <strong>{moviesItem.head2}</strong>
                  </p>
                )}
              </div>
              <Image
                src={moviesItem.image1}
                alt={moviesItem.name}
                width={1280}
                height={720}
                quality={90}
                objectFit='cover'
                loading='lazy'
                style={{
                  width: '800px', // Ensures the image is displayed at this width
                  height: '400px', // Ensures the image is displayed at this height
                  margin: 'auto',
                  marginBottom: '20px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                }}
              />
              {moviesItem.news1.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className='description text-black font-bold mt-2 text-xl'
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {paragraph}
                </p>
              ))}

              <div className='flex flex-col items-center justify-center'>
                {moviesItem.image2 && (
                  <Image
                    src={moviesItem.image2}
                    alt={moviesItem.name}
                    width={1280}
                    height={720}
                    quality={90}
                    objectFit='cover'
                    loading='lazy'
                    style={{
                      width: '800px', // Ensures the image is displayed at this width
                      height: '400px', // Ensures the image is displayed at this height
                      margin: 'auto',
                      marginBottom: '20px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                    }}
                  />
                )}

                {moviesItem.image3 && (
                  <Image
                    src={moviesItem.image3}
                    alt={moviesItem.name}
                    width={1280}
                    height={720}
                    quality={90}
                    objectFit='cover'
                    loading='lazy'
                    style={{
                      width: '800px', // Ensures the image is displayed at this width
                      height: '400px', // Ensures the image is displayed at this height
                      margin: 'auto',
                      marginBottom: '20px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                    }}
                  />
                )}

                {moviesItem.image4 && (
                  <Image
                    src={moviesItem.image4}
                    alt={moviesItem.name}
                    width={1280}
                    height={720}
                    quality={90}
                    objectFit='cover'
                    loading='lazy'
                    style={{
                      width: '800px', // Ensures the image is displayed at this width
                      height: '400px', // Ensures the image is displayed at this height
                      margin: 'auto',
                      marginBottom: '20px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                    }}
                  />
                )}

                {moviesItem.image5 && (
                  <Image
                    src={moviesItem.image5}
                    alt={moviesItem.name}
                    width={1280}
                    height={720}
                    quality={90}
                    objectFit='cover'
                    loading='lazy'
                    style={{
                      width: '800px', // Ensures the image is displayed at this width
                      height: '400px', // Ensures the image is displayed at this height
                      margin: 'auto',
                      marginBottom: '20px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                    }}
                  />
                )}

                {moviesItem.image6 && (
                  <Image
                    src={moviesItem.image6}
                    alt={moviesItem.name}
                    width={1280}
                    height={720}
                    quality={90}
                    objectFit='cover'
                    loading='lazy'
                    style={{
                      width: '800px', // Ensures the image is displayed at this width
                      height: '400px', // Ensures the image is displayed at this height
                      margin: 'auto',
                      marginBottom: '20px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                    }}
                  />
                )}

                {moviesItem.image7 && (
                  <Image
                    src={moviesItem.image7}
                    alt={moviesItem.name}
                    width={1280}
                    height={720}
                    quality={90}
                    objectFit='cover'
                    loading='lazy'
                    style={{
                      width: '800px', // Ensures the image is displayed at this width
                      height: '400px', // Ensures the image is displayed at this height
                      margin: 'auto',
                      marginBottom: '20px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                    }}
                  />
                )}

                {moviesItem.image8 && (
                  <Image
                    src={moviesItem.image8}
                    alt={moviesItem.name}
                    width={1280}
                    height={720}
                    quality={90}
                    objectFit='cover'
                    loading='lazy'
                    style={{
                      width: '800px', // Ensures the image is displayed at this width
                      height: '400px', // Ensures the image is displayed at this height
                      margin: 'auto',
                      marginBottom: '20px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                    }}
                  />
                )}
              </div>

              {/* </div>
  </div> */}
            </div>
          </div>
          <div className='sidebar'>
            <p
              className='text-black text-2xl font-bold mt-2'
              style={{
                marginTop: '15px',
                color: '#000',
                font: 'bold',
                textShadow: '1px 2px 2px #000'
              }}
            >
              LATEST MOVIES NEWS.
            </p>
            <div className='categorylatest-container'>
              <div className='cardlatest-container'>
                {latest.map(latestItem => (
                  <div key={latestItem.id} className='cardlatest'>
                    <a href={`/latest/${latestItem.id}`}>
                      <div className='relative'>
                        <Image
                          src={latestItem.image}
                          alt={latestItem.title}
                          className='rounded-lg mx-auto'
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '300px', // Ensures the image is displayed at this width
                            height: '300px', // Ensures the image is displayed at this height
                            filter:
                              'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                          }}
                        />
                        <p className='text-black text-lg font-semibold mt-2'>
                          {latestItem.name}
                        </p>
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-sm font-semibold mt-2'>
                          {latestItem.text}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Global styles */
          body {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .section-title {
            color: #000;
            font-weight: bold;
            font-size: 30px;
            text-shadow: 3px 5px 5px #000;
            margin-bottom: 20px;
          }

          .flex-container {
            display: flex;
            justify-content: space-between;
          }

          .main-content {
            flex: 3; /* 60% of the width */
          }

          .sidebar {
            flex: 2; /* 40% of the width */
            padding: 10px;
            border-radius: 8px;
            margin-top: 1px;
          }

          .card-container,
          .cardlatest-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card,
          .cardlatest {
            width: 100%;
            max-width: 100%;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }

          .relative {
            position: relative;
          }

          .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.4);
            color: #000;
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
          }

          .card img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          .text-center {
            text-align: center;
          }

          h1 {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 30px;
            line-height: 1;
            height: 30px;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
            }

            .main-content,
            .sidebar {
              width: 100%;
            }

            .sidebar {
              margin-top: 20px;
            }
          }
              @media (max-width: 768px) {
      .text-3xl {
        font-size: 1.5rem;
      }
      .ml-2 {
        margin-left: 0.5rem;
      }
    }
        `}</style>
      </div>
    </div>
  )
}

export async function getStaticPaths () {
  const paths = moviesData.map(item => ({
    params: { id: item.id }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  const moviesItem = moviesData.find(item => item.id === params.id)
  return { props: { moviesItem } }
}
export default moviesDetail
