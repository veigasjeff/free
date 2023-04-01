



import Head from 'next/head';
import ShareThis from '@components/ShareThis';
import WorldClock from '@components/WorldClock';




const SportsTable = () => {

  const sports = [
    {
      name: 'Soccer',
      channels: [
       
        {
          name: '  BT Sport 1 UK (CH-31)  ',
          link: '../../../../Channel/Ch31',
          logo: '/bt1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: '  Astro SuperSport 3 (CH-125) ',
          link: '../../../../Channel/Ch125',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: ' Canal+ Foot (CH-463) ',
          link: '../../../../Channel/Ch463',
          logo: '/canal+.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          name: '  SuperSport Premier League (CH-414) ',
          link: '../../../../Channel/Ch414',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        }, 
        {
          name: '  beIN Sports MENA Premium 1 (CH-98) ',
          link: '../../../../Channel/Ch98',
          logo: '/bein1-premium.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        }, 
        {
          name: ' Sky Sport Premier League DE (CH-10) ',
          link: '../../../../Channel/Ch10',
          logo: '/sky-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        }, 
        {
          name: '  Sky Sport Top Event DE (CH-556) ',
          link: '../../../../Channel/Ch556',
          logo: '/sky-mainevent.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        }, 
        {
          name: '  Eleven Sports 1 Portugal (CH-455)  ',
          link: '../../../../Channel/Ch455',
          logo: '/Eleven.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        }, 
        {
          name: '  Sky Sport Football Italy (CH-460) ',
          link: '../../../../Channel/Ch460',
          logo: '/sky-football.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
            startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        }, 
        {
          name: ' ESPN SUR (CH-149)  ',
          link: '../../../../Channel/Ch149',
          logo: '/espn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
          startDate: new Date("2023-04-01T12:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        }, 
      ],
      description: '12:30 England Premier League : Manchester City vs Liverpool.',
    },
    {
     
      channels: [
        {
          
          name: ' Sky Sports Football (CH-35)  ',
          link: '../../../../Channel/Ch35',
          logo: '/sky-football.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '   beIN Sports MAX 4 France (CH-494) ',
          link: '../../../../Channel/Ch494',
          logo: '/beinMAX.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  beIN Sports MENA Premium 2 (CH-99)  ',
          link: '../../../../Channel/Ch99',
          logo: '/bein2-premium.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Diema Sport Bulgaria (CH-465) ',
          link: '../../../../Channel/Ch465',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sky Sport 7 NZ (CH-594) ',
          link: '../../../../Channel/Ch594',
          logo: '/sky-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
        {
          
          name: '  Sportdigital Germany (CH-571)  ',
          link: '../../../../Channel/Ch571',
          logo: '/sportdigital.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "12:30",
          endTime: "14:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })    
        },
      ],
      description: '12:30 England Championship : Preston North End vs Blackpool.',
    },
    {
     
      channels: [
        {
          
          name: ' DAZN LaLiga (CH-538)  ',
          link: '../../../../Channel/Ch538',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "13:00",
          endTime: "15:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' Eleven Sports 4 Portugal (CH-458) ',
          link: '../../../../Channel/Ch458',
          logo: '/Eleven.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "13:00",
          endTime: "15:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Arena Sport 2 Premium (CH-135) ',
          link: '../../../../Channel/Ch135',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "13:00",
          endTime: "15:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  beIN Sports MENA 1 (CH-91)  ',
          link: '../../../../Channel/Ch91',
          logo: '/bein-eng1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "13:00",
          endTime: "15:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  beIN Sports MAX 9 France (CH-499) ',
          link: '../../../../Channel/Ch499',
          logo: '/beinMAX.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "13:00",
          endTime: "15:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Digi Sport 2 Romania (CH-401) ',
          link: '../../../../Channel/Ch401',
          logo: '/digi2.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "13:00",
          endTime: "15:00" ,  
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
      ],
      description: '13:00 Spain La Liga : Girona vs Espanyol.',
    },
    {
     
      channels: [
        {
          
          name: ' beIN SPORTS USA (CH-425) ',
          link: '../../../../Channel/Ch425',
          logo: '/bein-eng1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "14:00",
          endTime: "16:00" ,  
          startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  beIN Sports 1 France (CH-116)  ',
          link: '../../../../Channel/Ch116',
          logo: '/bein1-french.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "14:00",
          endTime: "16:00" ,  
          startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' beIN SPORTS en Español (CH-372)  ',
          link: '../../../../Channel/Ch372',
          logo: '/bein-spanish.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "14:00",
          endTime: "16:00" ,  
          startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
      ],
      description: '14:00 France Ligue 2 : Saint-Étienne vs Niort .',
    },
    {
     
      channels: [
        {
          
          name: '  Arena Sport 2 Premium (CH-135)  ',
          link: '../../../../Channel/Ch135',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '   Eleven Sports 3 Portugal (CH-457)  ',
          link: '../../../../Channel/Ch457 ',
          logo: '/eleven1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  DAZN 4 ES (CH-448)  ',
          link: '../../../../Channel/Ch448 ',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' Sport 1 Israel (CH-140) ',
          link: '../../../../Channel/Ch140 ',
          logo: '/sport-israel.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
      ],
      description: '15:00 England Premier League : AFC Bournemouth vs Fulham.',
    },
    {
     
      channels: [
        {
          
          name: '  USA Network (CH-343) ',
          link: '../../../../Channel/Ch343',
          logo: '/usa.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '   Astro SuperSport 3 (CH-125) ',
          link: '../../../../Channel/Ch125',
          logo: '/astrosports.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: ' SuperSport Premier League (CH-414) ',
          link: '../../../../Channel/Ch414',
          logo: '/suppersports.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  DAZN 2 ES (CH-446)  ',
          link: '../../../../Channel/Ch446',
          logo: '/dazn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Eleven Sports 1 Portugal (CH-455)  ',
          link: '../../../../Channel/Ch455',
          logo: '/eleven1.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Canal+ Foot (CH-463)  ',
          link: '../../../../Channel/Ch463',
          logo: '/canal+.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Sky Sport Premier League DE (CH-10) ',
          link: '../../../../Channel/Ch10',
          logo: '/sky-premier.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Arena Sport 3 Premium (CH-139)  ',
          link: '../../../../Channel/Ch139  ',
          logo: '/arena-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '   beIN Sports MENA Premium 1 (CH-98)  ',
          link: '../../../../Channel/Ch98  ',
          logo: '/bein1-premium.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '    ESPN BR (CH-81)   ',
          link: '../../../../Channel/Ch81  ',
          logo: '/espn-brazil.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '   ESPN SUR (CH-149)  ',
          link: '../../../../Channel/Ch149  ',
          logo: '/espn.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Diema Sport 2 Bulgaria (CH-466)  ',
          link: '../../../../Channel/Ch466  ',
          logo: '/diema-sport.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
        {
          
          name: '  Digi Sport 2 Romania (CH-401)   ',
          link: '../../../../Channel/Ch401  ',
          logo: '/digi2.webp',
          logo1: '/soccer.webp', 
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00" ,  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })   
        },
      ],
      description: '15:00 England Premier League : Arsenal vs Leeds United .',
    },
  

  // Cricket tabel timezone**********************************************************************************
    {
      name: 'Cricket',
      channels: [
        {
          name: 'Sky Sports Cricket (CH-65) ',
          link: '../../../../Channel/Ch65',
          logo: '/sky-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "11:00",
          endTime: "14:00",  
          startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' SuperSport Cricket (CH-368)',
          link: '../../../../Channel/Ch368',
          logo: '/suppersports.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "11:00",
          endTime: "14:00",  
          startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Willow Cricket (CH-346)',
          link: '../../../../Channel/Ch346',
          logo: '/willow.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "11:00",
          endTime: "14:00",  
          startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Astro Cricket (CH-370)',
          link: '../../../../Channel/Ch370',
          logo: '/astrosports.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "11:00",
          endTime: "14:00",  
          startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Fox Cricket (CH-369)',
          link: '../../../../Channel/Ch369',
          logo: '/fox-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "11:00",
          endTime: "14:00",  
          startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Sky Sport 3 NZ (CH-590)',
          link: '../../../../Channel/Ch590',
          logo: '/sky-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "11:00",
          endTime: "14:00",  
          startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '11:00 Indian Premier League : Kings XI Punjab vs Kolkata Knight Riders.',
    },
    {
     
      channels: [
        {
          name: 'Sky Sports Cricket (CH-65) ',
          link: '../../../../Channel/Ch65',
          logo: '/sky-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' SuperSport Cricket (CH-368)',
          link: '../../../../Channel/Ch368',
          logo: '/suppersports.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Willow Cricket (CH-346)',
          link: '../../../../Channel/Ch346',
          logo: '/willow.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Astro Cricket (CH-370)',
          link: '../../../../Channel/Ch370',
          logo: '/astrosports.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Fox Cricket (CH-369)',
          link: '../../../../Channel/Ch369',
          logo: '/fox-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Sky Sport 3 NZ (CH-590)',
          link: '../../../../Channel/Ch590',
          logo: '/sky-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-01",
          startTime: "15:00",
          endTime: "17:00",  
          startDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T17:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '15:00 Indian Premier League : Lucknow Super Giants vs Delhi Capitals.',
    },
    {
     
      channels: [
        {
          name: ' BT Sport 1 UK (CH-31) ',
          link: '../../../../Channel/Ch31',
          logo: '/bt1.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-02",
          startTime: "01:00",
          endTime: "03:00",  
          startDate: new Date("2023-04-02T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' SuperSport Cricket (CH-368)',
          link: '../../../../Channel/Ch368',
          logo: '/suppersports.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-02",
          startTime: "01:00",
          endTime: "03:00",  
          startDate: new Date("2023-04-02T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Fox Cricket (CH-369)',
          link: '../../../../Channel/Ch369',
          logo: '/fox-cricket.webp',
          logo1: '/cricket.webp',  
          date: "2023-04-02",
          startTime: "01:00",
          endTime: "03:00",  
          startDate: new Date("2023-04-02T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },  
      ],
      description: '01:00 (1st T20) : New Zealand vs Sri Lanka.',
    },

    
   // Wrestling tabel timezone**********************************************************************************
   
  
      {
     name: 'Wrestling',
       channels: [
          {
           name: 'SuperSport Variety 3 (CH-418)',
           link: '../../../../Channel/Ch418',
          logo: '/suppersports.webp',
          logo1: '/wwe.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
         },
      
       ],
  
        description: '00:00 WrestleMania 39 Night 1.',
      },
    
  // Snooker tabel timezone**********************************************************************************
 
     {
       name: 'Snooker',
      channels: [
        {
         name: 'ITV 4 UK (CH-353) ',
         link: '../../../../Channel/Ch353',
         logo: '/itv4.webp',
         logo1: '/snooker.webp',
         date: "2023-04-01",
         startTime:"13:00",
         endTime: "15:00",
         startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
         endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
         },
         {
          name: ' Sport Klub HD Serbia (CH-453) ',
          link: '../../../../Channel/Ch453',
          logo: '/sport-klub.webp',
          logo1: '/snooker.webp',
          date: "2023-04-01",
          startTime:"13:00",
          endTime: "15:00",
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
          },
       ],
       description: '13:00 Cazzo Tour Championship - Day 6.',
     },
     {
     
     channels: [
       {
        name: 'ITV 4 UK (CH-353) ',
        link: '../../../../Channel/Ch353',
        logo: '/itv4.webp',
        logo1: '/snooker.webp',
        date: "2023-04-01",
        startTime:"19:00",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
         name: ' Sport Klub HD Serbia (CH-453) ',
         link: '../../../../Channel/Ch453',
         logo: '/sport-klub.webp',
         logo1: '/snooker.webp',
         date: "2023-04-01",
         startTime:"19:00",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
         },
         {
          name: '  Astro SuperSport 2 (CH-124)  ',
          link: '../../../../Channel/Ch124',
          logo: '/astrosports.webp',
          logo1: '/snooker.webp',
          date: "2023-04-01",
          startTime:"19:00",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
          },
      ],
      description: '19:00 Cazzo Tour Championship - Bonus Arena.',
    },
  
  
  // Tennis tabel timezone**********************************************************************************
    {
      name: 'Tennis',
      channels: [
        {
          name: 'Tennis Channel (CH-40) ',
          link: '../../../../Channel/Ch40',
          logo: '/tennis-logo.webp',
          logo1: '/tennis.webp',
          date: "2023-04-01",
          startTime:"21:00",
          endTime: "23:00",
          startDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'SuperSport Tennis (CH-423)  ',
          link: '../../../../Channel/Ch423',
          logo: '/suppersports.webp',
          logo1: '/tennis.webp',
          date: "2023-04-01",
          startTime:"21:00",
          endTime: "23:00",
          startDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Canal+ Sport 2 Poland (CH-73)',
          link: '../../../../Channel/Ch73',
          logo: '/canal+.webp',
          logo1: '/tennis.webp',
          date: "2023-04-01",
          startTime:"21:00",
          endTime: "23:00",
          startDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  DAZN 3 ES (CH-447)  ',
          link: '../../../../Channel/Ch447',
          logo: '/dazn.webp',
          logo1: '/tennis.webp',
          date: "2023-04-01",
          startTime:"21:00",
          endTime: "23:00",
          startDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
     
      ],
      description: '21:00 WTA 1000 Miami .  ',
    },
   


// Badminton tabel timezone**********************************************************************************

{
  name: 'Badminton',
  channels: [
    {
      name: 'BT Sport 6 UK (CH-23)',
      link: '../../../../Channel/Ch23',
      logo: '/bt1.webp',
      logo1: '/badminton.webp',
      date: "2023-04-01",
      startTime:"12:00",
      endTime: "14:00",
      startDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: ' Astro SuperSport 4 (CH-126)',
      link: '../../../../Channel/Ch126',
      logo: '/astrosports.webp',
      logo1: '/badminton.webp',
      date: "2023-04-01",
      startTime:"12:00",
      endTime: "14:00",
      startDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
  ],
  description: '12:00 BWF World Tour | Spain Masters - Semi Finals.',
},



// Motorsport tabel timezone**********************************************************************************


{
  name: 'Motorsport',

  channels: [
   
    {
      name: ' BT Sport 2 UK (CH-32)  ',
      link: '../../../../Channel/Ch33',
      logo: '/bt2.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Sky Sport MotoGP IT (CH-59)   ',
      link: '../../../../Channel/Ch59',
      logo: '/sky-motorgp.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: ' DAZN 1 ES (CH-445)   ',
      link: '../../../../Channel/Ch445',
      logo: '/dazn.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  SuperSport Motorsport (CH-424)  ',
      link: '../../../../Channel/Ch424',
      logo: '/suppersports.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Canal+ Sport360 (CH-464)  ',
      link: '../../../../Channel/Ch464',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  ESPN4 BR (CH-85)   ',
      link: '../../../../Channel/Ch85',
      logo: '/espn-brazil.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"14:00",
      endTime: "16:00",
      startDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
  ],
  description: '14:00 MotoGP : Grand Prix of Argentina - Qualifying.',
},
{
 
  channels: [
   
    {
      name: '  DAZN F1 ES (CH-537)   ',
      link: '../../../../Channel/Ch537',
      logo: '/dazn.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"23:00",
      endTime: "23:59",
      startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '   Sky Sport F1 DE (CH-55)    ',
      link: '../../../../Channel/Ch55',
      logo: '/sky-racing.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"23:00",
      endTime: "23:59",
      startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
    },
    {
      name: '  Sport 5 Live Israel (CH-146)  ',
      link: '../../../../Channel/Ch146',
      logo: '/sport5-israel.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"23:00",
      endTime: "23:59",
      startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Sport TV4 Portugal (CH-289)  ',
      link: '../../../../Channel/Ch289',
      logo: '/sport-tv5-portugal.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"23:00",
      endTime: "23:59",
      startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  SuperSport Motorsport (CH-424)  ',
      link: '../../../../Channel/Ch424',
      logo: '/suppersports.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"23:00",
      endTime: "23:59",
      startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Canal+ Sport360 (CH-122)  ',
      link: '../../../../Channel/Ch122',
      logo: '/canal+.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"23:00",
      endTime: "23:59",
      startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
    {
      name: '  Sport Klub 1 Serbia (CH-101)  ',
      link: '../../../../Channel/Ch101',
      logo: '/sport-klub.webp',
      logo1: '/motorsports.webp',
      date: "2023-04-01",
      startTime:"23:00",
      endTime: "23:59",
      startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
    },
  ],
  description: '23:00 Formula 3 : FIA F3 - 23: Australia Feature Race.',
},



// Basketball tabel timezone**********************************************************************************

    {
      name: 'Basketball',
      channels: [
        {
          name: 'Sky Sports Mix UK (CH-449) ',
          link: '../../../../Channel/Ch449',
          logo: '/sky-mix.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'beIN Sports 1 France (CH-116)  ',
          link: '../../../../Channel/Ch116',
          logo: '/bein1-french.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' #Vamos Spain (CH-521) ',
          link: '../../../../Channel/Ch521',
          logo: '/vamos.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Arena Sport 1 Premium (CH-134) ',
          link: '../../../../Channel/Ch134',
          logo: '/arena-sport.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Sport TV2 Portugal (CH-74) ',
          link: '../../../../Channel/Ch74',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' CANAL+ Sport Poland (CH-48) ',
          link: '../../../../Channel/Ch48',
          logo: '/canal+.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: 'Astro SuperSport 4 (CH-126)  ',
          link: '../../../../Channel/Ch126',
          logo: '/astrosports.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' Diema Sport 2 Bulgaria (CH-466)  ',
          link: '../../../../Channel/Ch466',
          logo: '/diema-sport.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
        {
          name: ' ESPN2 BR (CH-82) ',
          link: '../../../../Channel/Ch82',
          logo: '/espn-brazil.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"00:30",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
      ],
      description: '00:30 NBA : Miami Heat vs Dallas Mavericks.',
    },
    {
      
      channels: [
        {
          name: 'NBA League Pass (CH-1)',
          link: '../../../../Channel/Ch1',
          logo: '/nba.webp',
          logo1: '/basketball.webp',
          date: "2023-04-02",
          startTime:"01:30",
          endTime: "03:00",
          startDate: new Date("2023-04-02T01:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })  
        },
       
      ],
      description: '01:30 NBA : New Orleans Pelicans vs Los Angeles Clipper.',
    },
  
  
    // Golf tabel timezone**********************************************************************************
  
    {
      name: 'Golf',
      channels: [
        {
          name: 'SuperSport Golf (CH-422) ',
          link: '../../../../Channel/Ch422',
          logo: '/suppersports.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
             
      ],
      description: '10:00 Sunshine 22/23 Limpopo Champs D3.',
    },
    {
      
      channels: [
        {
          name: 'Sky Sports Golf (CH-70)',
          link: '../../../../Channel/Ch70',
          logo: '/sky-golf.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' NBC USA (CH-53) ',
          link: '../../../../Channel/Ch53',
          logo: '/nbc.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN3 (CH-113) ',
          link: '../../../../Channel/Ch113',
          logo: '/tsn.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'TSN5 (CH-115) ',
          link: '../../../../Channel/Ch115',
          logo: '/tsn.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Movistar Golf (CH-528)',
          link: '../../../../Channel/Ch528',
          logo: '/movistar.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' SuperSport Golf (CH-422)',
          link: '../../../../Channel/Ch422',
          logo: '/suppersports.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' ESPN 2 BR (CH-82)',
          link: '../../../../Channel/Ch82',
          logo: '/espn-brazil.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"10:00",
          endTime: "12:00",
          startDate: new Date("2023-04-01T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
      ],
      description: '17:00 Augusta National Amateur, Final Round.',
    },
    {
     
      channels: [
        {
          name: 'CW USA (CH-300) ',
          link: '../../../../Channel/Ch300',
          logo: '/cw.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-01T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
             
      ],
      description: '18:00 LIV Golf Invitational Series.',
    },
    {
     
      channels: [
        {
          name: 'Sky Sports Golf (CH-70)',
          link: '../../../../Channel/Ch70',
          logo: '/sky-golf.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'NBC USA (CH-53) ',
          link: '../../../../Channel/Ch53',
          logo: '/nbc.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'GOLF Channel USA (CH-318) ',
          link: '../../../../Channel/Ch318',
          logo: '/golf-channel-usa.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sky Sports Main Event (CH-38)',
          link: '../../../../Channel/Ch38',
          logo: '/sky-mainevent.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'Movistar Golf (CH-528) ',
          link: '../../../../Channel/Ch528',
          logo: '/movistar.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' SuperSport Golf (CH-422)',
          link: '../../../../Channel/Ch422',
          logo: '/suppersports.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Eurosport 2 Poland (CH-58)',
          link: '../../../../Channel/Ch58',
          logo: '/eurosports2.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
            
      ],
      description: '20:00 Valero Texas Open.',
    },
    {
     
      channels: [
        {
          name: 'Sky Sports Golf (CH-70)',
          link: '../../../../Channel/Ch70',
          logo: '/sky-golf.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"23:00",
          endTime: "23:59",
          startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: 'GOLF Channel USA (CH-318) ',
          link: '../../../../Channel/Ch318',
          logo: '/golf-channel-usa.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"23:00",
          endTime: "23:59",
          startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' Sky Sports Main Event (CH-38)',
          link: '../../../../Channel/Ch38',
          logo: '/sky-mainevent.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"23:00",
          endTime: "23:59",
          startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' SuperSport Grandstand (CH-412) ',
          link: '../../../../Channel/Ch412',
          logo: '/suppersports.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"23:00",
          endTime: "23:59",
          startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: ' SuperSport Golf (CH-422)',
          link: '../../../../Channel/Ch422',
          logo: '/suppersports.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"23:00",
          endTime: "23:59",
          startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
        {
          name: '  Sport TV3 Portugal (CH-454)',
          link: '../../../../Channel/Ch424',
          logo: '/sport-tv5-portugal.webp',
          logo1: '/golf.webp',
          date: "2023-04-01",
          startTime:"23:00",
          endTime: "23:59",
          startDate: new Date("2023-04-01T23:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' }) 
        },
            
      ],
      description: '23:00 LPGA Tour: Dio Implant LA Open.',
    },




 // Cycling tabel timezone**********************************************************************************
  

    {
      name: 'Cycling',
      channels: [
       
        {
          name: ' Eurosport 1 UK (CH-41)  ',
        link: '../../../../Channel/Ch41',
        logo: '/eurosport1.webp',
        logo1: '/cycling.webp',
        date: "2023-04-01",
        startTime:"14:30",
        endTime: "16:00",
        startDate: new Date("2023-04-01T07:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '  Eurosport 1 Poland (CH-57)   ',
        link: '../../../../Channel/Ch57',
        logo: '/eurosport1.webp',
        logo1: '/cycling.webp',
        date: "2023-04-01",
        startTime:"14:30",
        endTime: "16:00",
        startDate: new Date("2023-04-01T07:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Eurosport 1 ES (CH-524) ',
        link: '../../../../Channel/Ch524',
        logo: '/eurosport1.webp',
        logo1: '/cycling.webp',
        date: "2023-04-01",
        startTime:"14:30",
        endTime: "16:00",
        startDate: new Date("2023-04-01T07:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-04-01T16:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '14:30 Grand Prix Miguel Indurain | Estella - Estella (203 km) .',
    },
   
  
  
    // Baseball tabel timezone**********************************************************************************
  
   /*
    {
      name: 'Baseball',
      channels: [
        {
        name: ' MLB Network USA (CH-399) ',
        link: '../../../../Channel/Ch399',
        logo: '/mlb.webp',
        logo1: '/baseball.webp',
        date: "2023-03-25",
        startTime:"18:05",
        endTime: "20:00",
        startDate: new Date("2023-03-25T18:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '18:05 MLB : New York Mets vs Atlanta Braves.',
    },
    {
       channels: [
        {
        name: '  Bally Sports Midwest (CH-9) ',
        link: '../../../../Channel/Ch09',
        logo: '/bally-sports.webp',
        logo1: '/baseball.webp',
        date: "2023-03-25",
        startTime:"18:05",
        endTime: "20:00",
        startDate: new Date("2023-03-25T18:05:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        ],
     description: '18:05 MLB : Toronto Blue Jays vs Minnesota Twins.',
   },
 
*/
// Boxing tabel timezone**********************************************************************************
  
   
{
  name: 'Boxing',
  channels: [
    {
      name: ' DAZN UK (CH-69) ',
      link: '../../../../Channel/Ch69',
      logo: '/dazn.webp',
      logo1: '/boxing.webp',
      date: "2023-04-01",
      startTime:"19:00",
      endTime: "20:30",
      startDate: new Date("2023-04-01T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' DAZN 2 ES (CH-446)  ',
      link: '../../../../Channel/Ch446',
      logo: '/dazn.webp',
      logo1: '/boxing.webp',
      date: "2023-04-01",
      startTime:"19:00",
      endTime: "20:30",
      startDate: new Date("2023-04-01T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' DAZN1 DE (CH-426) ',
      link: '../../../../Channel/Ch426',
      logo: '/dazn.webp',
      logo1: '/boxing.webp',
      date: "2023-04-01",
      startTime:"19:00",
      endTime: "20:30",
      startDate: new Date("2023-04-01T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    
  ],
  description: '19:00 Fight Night : Anthony Joshua vs Jermaine Franklin.',
},
{
 
  channels: [
    {
      name: 'Sky PPV Feed (CH-105) ',
      link: '../../../../Channel/Ch105',
      logo: '/Sky-boxing.webp',
      logo1: '/boxing.webp',
      date: "2023-04-02",
      startTime:"02:00",
      endTime: "04:00",
      startDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-02T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: 'Sky Sports Action (CH-37) ',
      link: '../../../../Channel/Ch37',
      logo: '/sky-action.webp',
      logo1: '/boxing.webp',
      date: "2023-04-02",
      startTime:"02:00",
      endTime: "04:00",
      startDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-02T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' beIN Sports 2 France (CH-117) ',
      link: '../../../../Channel/Ch117',
      logo: '/bein1-french.webp',
      logo1: '/boxing.webp',
      date: "2023-04-02",
      startTime:"02:00",
      endTime: "04:00",
      startDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-02T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: '  Diema Sport Bulgaria (CH-465) ',
      link: '../../../../Channel/Ch468',
      logo: '/diema-sport.webp',
      logo1: '/boxing.webp',
      date: "2023-04-02",
      startTime:"02:00",
      endTime: "04:00",
      startDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-02T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '02:00 Boxing : Robeisy Ramirez vs Isaac Dogboe.',
},


// Darts tabel timezone**********************************************************************************
  
  
{
  name: 'Darts',
  channels: [
    {
      name: ' Viaplay Sports 2 UK (CH-550) ',
      link: '../../../../Channel/Ch550',
      logo: '/viaplay-xtra.webp',
      logo1: '/darts.webp',
      date: "2023-04-01",
      startTime:"12:00",
      endTime: "14:00",
      startDate: new Date("2023-04-01T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T14:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    
  ],
  description: '12:00 International Darts Open - Day 2 Session 1.',
},
{
  
  channels: [
    {
      name: 'Viaplay Xtra UK (CH-597)  ',
      link: '../../../../Channel/Ch597',
      logo: '/viaplay-xtra.webp',
      logo1: '/darts.webp',
      date: "2023-04-01",
      startTime:"18:00",
      endTime: "20:00",
      startDate: new Date("2023-04-01T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
   
  ],
  description: '18:00 International Darts Open - Day 2 Session 2.',
},


  // Futsal tabel timezone**********************************************************************************
  
   
    {
      name: 'Futsal',
      channels: [
        {
          name: 'Teledeporte Spain (CH-529)',
          link: '../../../../Channel/Ch529',
          logo: '/teledeporte.webp',
          logo1: '/futsal.webp',
          date: "2023-04-01",
          startTime:"11:00",
          endTime: "13:00",
          startDate: new Date("2023-04-01T11:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '11:00 Spain Copa del Rey : Peniscola FS vs. Cartagena FS.',
    },
    {
      
      channels: [
        {
          name: 'Teledeporte Spain (CH-529)',
          link: '../../../../Channel/Ch529',
          logo: '/teledeporte.webp',
          logo1: '/futsal.webp',
          date: "2023-04-01",
          startTime:"13:30",
          endTime: "15:30",
          startDate: new Date("2023-04-01T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '13:30 Spain Copa del Rey : Palma Futsal vs. FC Barcelona.',
    },
  
  // Horse Racing tabel timezone**********************************************************************************
  
  
    {
      name: 'Horse Racing',
      channels: [
        {
          name: 'Sky Sports Racing UK (CH-554) ',
          link: '../../../../Channel/Ch554',
          logo: '/sky-racing.webp',
          logo1: '/horse-racing.webp',
          date: "2023-04-01",
          startTime:"13:00",
          endTime: "15:00",
          startDate: new Date("2023-04-01T13:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '13:00 Live racing from around the UK.',
    },  
    {
     
      channels: [
        {
          name: ' SuperSport Variety 3 (CH-418) ',
          link: '../../../../Channel/Ch418',
          logo: '/suppersports.webp',
          logo1: '/horse-racing.webp',
          date: "2023-04-01",
          startTime:"13:30",
          endTime: "15:00",
          startDate: new Date("2023-04-01T13:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T15:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '13:30 WSB Derby Day-23.',
    }, 
    {
     
      channels: [
        {
          name: ' SuperSport Variety 3 (CH-418) ',
          link: '../../../../Channel/Ch418',
          logo: '/suppersports.webp',
          logo1: '/horse-racing.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '00:00 Florida Derby-23 .',
    }, 
  

  // Ice Hockey tabel timezone**********************************************************************************
  

  
    {
      name: 'Ice Hockey',
      channels: [
        {
          name: ' NHL Network (CH-18)  ',
          link: '../../../../Channel/Ch18',
          logo: '/nfl.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-01",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-01T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: '   Sport Klub 4 Serbia (CH-104)  ',
          link: '../../../../Channel/Ch104',
          logo: '/sport-klub.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-01",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-01T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      
      
      ],
      description: '18:00 NHL : Nashville Predators vs St. Louis Blues.',
    }, 
    {
     
      channels: [
        {
          name: 'ABC USA (CH-51)  ',
          link: '../../../../Channel/Ch51',
          logo: '/abc.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sportsnet One (CH-411) ',
          link: '../../../../Channel/Ch411',
          logo: '/sportsnet.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: 'Sky Sport Austria 1 (CH-559) ',
          link: '../../../../Channel/Ch559',
          logo: '/sky-sport.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sport Klub 3 Serbia (CH-103) ',
          link: '../../../../Channel/Ch103',
          logo: '/sport-klub.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-01",
          startTime:"20:00",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },      
      ],
      description: '20:00 NHL : Pittsburgh Penguins vs Boston Bruins.',
    }, 
    {
     
      channels: [
        {
          name: 'NBCS Philadelphia (CH-2) ',
          link: '../../../../Channel/Ch2',
          logo: '/nbcs-philadelphia.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '00:00 NHL : Buffalo Sabres vs Philadelphia Flyers.',
    }, 
    {
     
      channels: [
        {
          name: 'Sportsnet East (CH-3) ',
          link: '../../../../Channel/Ch3',
          logo: '/sportsnet.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '00:00 NHL : Montreal Canadiens vs Carolina Hurricanes.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports Florida (CH-4) ',
          link: '../../../../Channel/Ch4',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '00:00 NHL : Columbus Blue Jackets vs Florida Panthers.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports Florida+ (CH-5) ',
          link: '../../../../Channel/Ch4',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '00:00 NHL : Tampa Bay Lightning vs New York Islanders.',
    }, 
    {
     
      channels: [
        {
          name: 'Sportsnet Ontario (CH-6)  ',
          link: '../../../../Channel/Ch6',
          logo: '/sportsnet.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sky Sport Mix DE (CH-557) ',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: 'Sport Klub 3 Serbia (CH-103) ',
          link: '../../../../Channel/Ch103',
          logo: '/sport-klub.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"00:00",
          endTime: "02:00",
          startDate: new Date("2023-04-02T00:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '00:00 NHL : Ottawa Senators vs Toronto Maple Leafs.',
    }, 
    {
     
      channels: [
        {
          name: 'NBCS Chicago (CH-7)  ',
          link: '../../../../Channel/Ch7',
          logo: '/nbcs-chicago.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"01:00",
          endTime: "03:00",
          startDate: new Date("2023-04-02T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' ESPN2 USA (CH-45) ',
          link: '../../../../Channel/Ch45',
          logo: '/espn.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"01:00",
          endTime: "03:00",
          startDate: new Date("2023-04-02T01:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      
      ],
      description: '01:00 NHL : New Jersey Devils vs Chicago Blackhawks.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports San Antonio (CH-8) ',
          link: '../../../../Channel/Ch8',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"02:00",
          endTime: "04:00",
          startDate: new Date("2023-04-02T02:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T04:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '02:00 NHL : Colorado Avalanche vs Dallas Stars.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports West (CH-9) ',
          link: '../../../../Channel/Ch9',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"03:00",
          endTime: "05:00",
          startDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T05:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '03:00 NHL : Seattle Kraken vs Los Angeles Kings.',
    }, 
    {
     
      channels: [
        {
          name: 'Bally Sports Wisconsin (CH-10) ',
          link: '../../../../Channel/Ch10',
          logo: '/bally-sports.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"03:00",
          endTime: "05:00",
          startDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T05:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '03:00 NHL : Vegas Golden Knights vs Minnesota Wild.',
    }, 
    {
     
      channels: [
        {
          name: 'NBCS California (CH-14) ',
          link: '../../../../Channel/Ch14',
          logo: '/nbcs-california.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"03:00",
          endTime: "05:00",
          startDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T05:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '03:00 NHL : Arizona Coyotes vs San Jose Sharks.',
    }, 

    {
     
      channels: [
        {
          name: ' Sky Sport Mix DE (CH-557) ',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/ice-hockey.webp',
          date: "2023-04-02",
          startTime:"03:00",
          endTime: "05:00",
          startDate: new Date("2023-04-02T03:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-02T05:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
         
      ],
      description: '03:00 NHL : Edmonton Oilers vs Anaheim Ducks.',
    }, 




  // Ice Skating tabel timezone**********************************************************************************

 /* 
  {
    name: 'Ice Skating',
    channels: [
      {
        name: ' Eurosport 1 UK (CH-41) ',
        link: '../../../../Channel/Ch41',
        logo: '/euro1.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: ' Eurosport 1 Poland (CH-57)  ',
        link: '../../../../Channel/Ch57',
        logo: '/eurosport1.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: ' Eurosport 1 ES (CH-524) ',
        link: '../../../../Channel/Ch524',
        logo: '/eurosport1-es.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
    ],
    description: '09:15 ISU World Figure Skating Championships | Mens Free Skate (World Feed).',
  }, 
  {

    channels: [
      {
        name: ' Mens Free Skate USA Network (CH-343)  ',
        link: '../../../../Channel/Ch343',
        logo: '/usa.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: '  Polsat Sport Poland (CH-47)  ',
        link: '../../../../Channel/Ch47',
        logo: '/polsat.webp',
        logo1: '/ice-skating.webp',
        date: "2023-03-25",
        startTime:"09:15",
        endTime: "10:15",
        startDate: new Date("2023-03-25T09:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T10:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      
    ],
    description: '11:30 ISU World Figure Skating Championships.',
  }, 
  
*/

  // WaterPolo tabel timezone**********************************************************************************

 /* 
  {
    name: 'WaterPolo',
    channels: [
      {
        name: ' Arena Sport 2 Croatia HD (CH-433) ',
        link: '../../../../Channel/Ch433',
        logo: '/arena-sport.webp',
        logo1: '/water-polo.webp',
        date: "2023-03-25",
        startTime:"18:00",
        endTime: "19:00",
        startDate: new Date("2023-03-25T18:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T19:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
     
    ],
    description: '18:00 Adriatic League : Vk Jadran Split vs. Radnicki Kragujevac.',
  }, 
  {
    
    channels: [
      {
        name: ' Arena Sport 2 Croatia HD (CH-433) ',
        link: '../../../../Channel/Ch433',
        logo: '/arena-sport.webp',
        logo1: '/water-polo.webp',
        date: "2023-03-25",
        startTime:"20:00",
        endTime: "21:00",
        startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },
      {
        name: ' Arena Sport 1 Serbia (CH-429)  ',
        link: '../../../../Channel/Ch429',
        logo: '/arena-sport.webp',
        logo1: '/water-polo.webp',
        date: "2023-03-25",
        startTime:"20:00",
        endTime: "21:00",
        startDate: new Date("2023-03-25T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
        endDate: new Date("2023-03-25T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
      },     
    ],
    description: '20:00 Adriatic League : Vk Novi Beograd vs. VK Jug Co.',
  }, 



*/

  
  // Handball tabel timezone**********************************************************************************

  
    {
      name: 'Handball',
      channels: [
        {
          name: ' Sky Sport Mix DE (CH-557)',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/handball.webp',
          date: "2023-04-01",
          startTime:"17:30",
          endTime: "18:30",
          startDate: new Date("2023-04-01T17:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T18:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '17:30 Handball-Bundesliga : HSG Wetzlar vs Minden.',
    }, 
    {
     
      channels: [
        {
          name: ' TVP Sport Poland (CH-128)',
          link: '../../../../Channel/Ch128',
          logo: '/tvp.webp',
          logo1: '/handball.webp',
          date: "2023-04-01",
          startTime:"19:15",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:15:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '19:15 Superliga : Piotrkowianin Piotrkow vs Kalisz.',
    },
    {
     
      channels: [
        {
          name: ' Sky Sport Mix DE (CH-557)',
          link: '../../../../Channel/Ch557',
          logo: '/sky-mix.webp',
          logo1: '/handball.webp',
          date: "2023-04-01",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '19:30 Handball-Bundesliga : Hamm-Westfalen vs SG Flensburg-Handewitt.',
    },
    {
     
      channels: [
        {
          name: ' beIN Sports MAX 6 France (CH-496)',
          link: '../../../../Channel/Ch496',
          logo: '/beinMAX.webp',
          logo1: '/handball.webp',
          date: "2023-04-01",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-04-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '19:30 France Coupe de France Women : Brest Bretagne vs Metz Handbal.',
    },





 // Volleyball tabel timezone**********************************************************************************



    {
      name: 'Volleyball',
      channels: [
        {
          name: 'TRT Spor 2 Turkey (CH-26)',
          link: '../../../../Channel/Ch26',
          logo: '/trt-spor2.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-01",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '18:00 TVF Efeler Ligi : Halkbank vs Fenerbahce.',
    }, 
    {
     
      channels: [
        {
          name: 'Polsat Sport Poland (CH-47)',
          link: '../../../../Channel/Ch47',
          logo: '/polsat.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-01",
          startTime:"18:00",
          endTime: "20:00",
          startDate: new Date("2023-04-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-01T20:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '18:00 POLAND VOLLEYBALL CUP : LKS Lodz Women vs Rzeszow Women.',
    }, 
    {
     
      channels: [
        {
          name: 'beIN Sports MAX 8 France (CH-498)',
          link: '../../../../Channel/Ch498',
          logo: '/beinMAX.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-01",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '19:30 France Coupe de France Women : Beziers VB vs Racing Club de Cannes.',
    }, 
    {
     
      channels: [
        {
          name: ' Rai Sport+ (CH-9)',
          link: '../../../../Channel/Ch9',
          logo: '/rai-sports.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-01",
          startTime:"19:30",
          endTime: "21:00",
          startDate: new Date("2023-04-01T19:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-01T21:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '19:30 Italy Serie A1 Women : Volley Vallefoglia vs. Agil Volley Nova. (W).',
    },
    {
     
      channels: [
        {
          name: ' Polsat Sport Poland (CH-47) ',
          link: '../../../../Channel/Ch47',
          logo: '/polsat.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-01",
          startTime:"20:30",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
        {
          name: ' Sport Klub 1 Serbia (CH-101) ',
          link: '../../../../Channel/Ch101',
          logo: '/sport-klub.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-01",
          startTime:"20:30",
          endTime: "22:00",
          startDate: new Date("2023-04-01T20:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-01T22:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
      ],
      description: '20:30 PlusLiga : Kedzierzyn-Kozle vs Jastrzebski.',
    },
    {
     
      channels: [
        {
          name: ' Sportv2 Brasil (CH-79) ',
          link: '../../../../Channel/Ch79',
          logo: '/sportstv.webp',
          logo1: '/volleyball.webp',
          date: "2023-04-01",
          startTime:"22:30",
          endTime: "23:59",
          startDate: new Date("2023-04-01T22:30:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
          endDate: new Date("2023-03-01T23:59:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
        },
       
      ],
      description: '22:30 Superliga De Vôlei Masculino : Suzano vs Guarulhos.',
    },



// Rugby tabel timezone**********************************************************************************

/*

{
  name: 'Rugby',
  channels: [
    {
      name: 'Sky Sports Arena UK (CH-36)',
      link: '../../../../Channel/Ch36',
      logo: '/sky-arena.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"10:00",
      endTime: "12:00",
      startDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' Sky Sports Main Event (CH-38)',
      link: '../../../../Channel/Ch38',
      logo: '/sky-mainevent.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"10:00",
      endTime: "12:00",
      startDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
    {
      name: ' SPORT1+ Germany (CH-640)',
      link: '../../../../Channel/Ch640',
      logo: '/sky-sport.webp',
      logo1: '/rugby.webp',
      date: "2023-03-25",
      startTime:"10:00",
      endTime: "12:00",
      startDate: new Date("2023-03-25T10:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' }),
      endDate: new Date("2023-03-25T12:00:00Z").toLocaleString('en-US', { timeZone: 'UTC' })
    },
  ],
  description: '10:00 National Rugby League : Parramatta Eels vs Penrith Panthers.',
}, 
*/
  /*
  
    {
      name: 'Winter Sports',
      channels: [
        {
          name: 'TSN1 (CH-111)',
          link: '../../../../Channel/Ch111',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
        },
       
      ],
      description: '09:00 2023 World Womens Curling Championship : Canada vs. Italy.',
    }, 
    {
      
      channels: [
        {
          name: 'Eurosport 2 UK (CH-42) ',
          link: '../../../../Channel/Ch42',
          logo: '/eurosports2.webp',
          logo1: '/winter-sports.webp',
        },
        {
          name: ' Eurosport 2 Poland (CH-58)',
          link: '../../../../Channel/Ch58',
          logo: '/euro2.webp',
          logo1: '/winter-sports.webp',
        },
        {
          name: 'Eurosport 2 ES (CH-525)',
          link: '../../../../Channel/Ch525',
          logo: '/eurosport1-es.webp',
          logo1: '/winter-sports.webp',
        },
      ],
      description: '14:00 World Championhips | E2 Coverage | Women, Round Robin - Sandviken.',
    }, 
    {
      
      channels: [
        {
          name: 'TSN1 (CH-111)  ',
          link: '../../../../Channel/Ch111',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
        },
        {
          name: 'TSN3 (CH-113) ',
          link: '../../../../Channel/Ch113',
          logo: '/tsn.webp',
          logo1: '/winter-sports.webp',
        },
      ],
      description: '19:00 2023 World Womens Curling Championship : Scotland vs. Canada.',
    }, 
  */
  
  
  ];

  return (
   
<div>
<Head>
    <title>Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free.</title>
    <meta name="robots" content="index, follow" />  
    <meta name="revisit-after" content="1 days" />
   
   <meta name="description" content="Uwatchfree™ -  Watch Movies, TV-Series & Sports Live Online Free." />
   <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="keywords" content="uwatchfree, daddylive, daddylivehs.sx, uwatchfree.com, streaming free, livetv, freetvchannels, onlinetv, tvchannelsfree, watchtvlive, online tv channels, updated live stream, live sports streaming, stream sports live, watch live sports online, live sports online Live sports TV, free sports streaming, live sports channels, sports streaming services, online sports streaming, sports live stream free, sports live TV, live cricket streaming, live football streaming, live basketball streaming, live baseball streaming, live soccer streaming, live NHL streaming, live NFL streaming, live tennis streaming, live MMA streaming" />
   <meta property="og:locale" content="en_US" />   

   <meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta property="og:type" content="website" />
   <meta property="og:image:height" content="1280"/>
   <meta property="og:image:width" content="720"/>
   <meta property="og:title" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta property="og:description" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta property="og:url" content="https://uwatchfree.vercel.app/" />
   <meta property="og:image:type" content="image/jpeg" />
   <meta property="og:image" content="https://uwatchfree.vercel.app/og_image.jpg" />
   <meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/og_image.jpg" />
   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:title" content="Uwatchfree™ " />
   <meta name="twitter:description" content=" Uwatchfree™ -  Watch Movies, TV-Series & Sports Live Online Free. " />
   <meta name="twitter:image" content="https://uwatchfree.vercel.app/og_image.jpg" />
   <meta name="google-site-verification" content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0" />
<link rel="alternate" hrefLang="en-gb" 	href="https://uwatchfree.vercel.app/"/>
<link rel="alternate" hrefLang="en-ca" 	href="https://uwatchfree.vercel.app/"/>
<link rel="alternate" hrefLang="en-au" 	href="https://uwatchfree.vercel.app/"/>
<link rel="alternate" hrefLang="en-se" 	href="https://uwatchfree.vercel.app/"/>
<link rel="alternate" hrefLang="en-fr" 	href="https://uwatchfree.vercel.app/"/>
<link rel="alternate" hrefLang="en-dk" 	href="https://uwatchfree.vercel.app/"/>
<link rel="alternate" hrefLang="en-no" 	href="https://uwatchfree.vercel.app/"/>
<link rel="alternate" hrefLang="x-default" 	href="https://uwatchfree.vercel.app/"/>

<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
<link rel="icon" type="image/webp" sizes="32x32" href="/favicon-32x32.webp" />
<link rel="icon" type="image/webp" sizes="16x16" href="/favicon-16x16.webp" />
<link rel="manifest" href="/site.webmanifest"></link>

<link rel="canonical" href="https://uwatchfree.vercel.app/" />

  </Head>



<div className="bg-gray-600 ">

<div className="flex mx-10  px-10 text-blue-600 text-center ">
    <a href="/">
               <button className="close-button  mx-10" >
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " >  Close</h2>  
          </button></a>
          </div>
    <div>

    <h1 className="text-center font-bold text-white text-2xl py-3 px-4">Friday 25th March 2023 - Schedule Time UK GMT+1
          </h1>
      

    <div className="container mx-auto  px-4 sm:px-6 lg:px-20">
       
    <table className="w-full table-auto my-1 ">
   
      <thead>
        <tr>
      

         
        </tr>
      </thead>
      <tbody>
  {sports.map((sport) => (
    <tr key={sport.name}>
      <td>
        <div className="text-3xl font-bold text-center leading-none tracking-tight flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-gray-900 group bg-gradient-to-br from-green-600 to-white-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:orange-white dark:text-orange focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 bg-white dark:bg-gray-900 ">
          {sport.name}
        </div>

        <div className="text-xl font-bold text-center leading-none tracking-tight text-white">
          <WorldClock /> </div>
          <div className="text-2xl font-bold text-center leading-none tracking-tight text-blue-500">
           
          {sport.description}
          </div>
          <div className="text-2xl mt-5 font-bold text-center leading-none tracking-tight text-black">
          <p>Channel Broadcasting </p>
        </div>
        {sport.channels.map((channel) => {
          
          const now = new Date();

          // Set the timezone to UTC
        const options = { timeZone: 'UTC' };

      
// Convert the game's date, start time and end time to UTC
const gameDate = new Date(channel.date + "T" + channel.startTime + ":00Z");
const gameEndDate = new Date(channel.date + "T" + channel.endTime + ":00Z");

// Convert the game's start and end time to the local timezone
const startLocalTime = gameDate.toLocaleString('en-US', options);
const endLocalTime = gameEndDate.toLocaleString('en-US', options);

// Assign the converted end time to the endTime variable
const endTime = gameEndDate.toLocaleString('en-US', options);
            
          let status = "";
          let statusclassName = "";
          if (now > gameEndDate) {
            status = "Finished";
            statusclassName = "text-red-500";
          } else if (now >= gameDate && now <= gameEndDate) {
            status = "Live";
            statusclassName = "text-green-500";
          } else if (now < gameDate) {
            status = "Upcoming";
            statusclassName = "text-yellow-500";
          } else {
            status = "Ended";
            statusclassName = "text-red-500";
          }
          return (
            <div key={channel.id}>
              <a
                className="flex items-center lazyload rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-105 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "
                href={channel.link}
              >
                <img src={channel.logo} className="w-10 h-10 mr-2 " loading="lazy" alt={channel.name} />
                {channel.name}
                <img src={channel.logo1} className="w-10 h-10 mr-2 " loading="lazy" alt={channel.name} />
              </a>
              <div><h2 className="text-2xl font-bold text-center text-yellow-500 leading-none tracking-tight inlineflex items-center ">Current Game Status</h2> <h1 className={`text-3xl font-bold text-center leading-none tracking-tight inline-flex items-center ${status === 'Finished' ? 'text-red-500' : status === 'Ended' ? 'text-red-500': status === 'Live' ? 'text-green-500' : 'text-yellow-500'  }  blink`}>
  {status}
</h1></div> {/* Display the game status */}
            </div>
          )
        })}
        <style jsx>{`
    .blink {
      animation: blinker 1s cubic-bezier(.5, 0, 1, 1) infinite alternate;
    }

    @keyframes blinker {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  `}</style>

      </td>
    </tr>
  ))}
</tbody>
    </table>
    </div>
    </div>
    < ShareThis async defer />
    </div>
    </div>
  );
}

export default SportsTable;
