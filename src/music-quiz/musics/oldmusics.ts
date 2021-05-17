const musics = [
  {
    title: 'Katy Perry - Bon Appétit',
    url: 'https://www.youtube.com/watch?v=dPI-mRFEIH0',
  },
  {
    title: 'Taylor Swift - Look What You Made Me Do',
    url: 'https://www.youtube.com/watch?v=3tmd-ClpJxA',
  },
  {
    title: 'Metallica - Nothing Else Matters',
    url: 'https://www.youtube.com/watch?v=tAGnKpE4NCI',
  },
  {
    title: 'Audioslave - Like a Stone',
    url: 'https://www.youtube.com/watch?v=7QU1nvuxaMA',
  },
  {
    title: 'Red Hot Chili Peppers - Snow',
    url: 'https://www.youtube.com/watch?v=p0vM9iINl28',
  },
  {
    title: 'Dire Straits - Sultans Of Swing',
    url: 'https://www.youtube.com/watch?v=0fAQhSRLQnM',
  },
  {
    title: 'Iggy Azalea - Black Widow',
    url: 'https://www.youtube.com/watch?v=i4wiZ4fZIDo',
  },
  {
    title: 'AC/DC - Back In Black',
    url: 'https://www.youtube.com/watch?v=pAgnJDJN4VA',
  },
  {
    title: 'BLACK SABBATH - Paranoid',
    url: 'https://www.youtube.com/watch?v=0qanF-91aJo',
  },
  {
    title: "Queen - Don't Stop Me Now",
    url: 'https://www.youtube.com/watch?v=HgzGwKwLmgM',
  },
  {
    title: 'Queen - We Will Rock You',
    url: 'https://www.youtube.com/watch?v=-tJYN-eG1zk',
  },
  {
    title: 'Guns N Roses - Welcome To The Jungle',
    url: 'https://www.youtube.com/watch?v=o1tj2zJ2Wvg',
  },
  {
    title: 'Phil Collins - In The Air Tonight',
    url: 'https://www.youtube.com/watch?v=YkADj0TPrJA',
  },
  {
    title: 'Fergie - M.I.L.F.',
    url: 'https://www.youtube.com/watch?v=bsUWK-fixiA',
  },
  {
    title: 't.A.T.u - all the things she said',
    url: 'https://www.youtube.com/watch?v=01q2YJijgZE',
  },
  {
    title: 'Iron Maiden - The Trooper',
    url: 'https://www.youtube.com/watch?v=2G5rfPISIwo',
  },
  {
    title: 'Iron Maiden - Dance of Death',
    url: 'https://www.youtube.com/watch?v=SvxHctW8kqM',
  },
  {
    title: 'Iron maiden - fear of the dark',
    url: 'https://www.youtube.com/watch?v=J0N1yY937qg',
  },
  {
    title: 'Toto - Africa',
    url: 'https://www.youtube.com/watch?v=FTQbiNvZqaY',
  },
  {
    title: 'a-ha - Take On Me',
    url: 'https://www.youtube.com/watch?v=djV11Xbc914',
  },
  {
    title: "Twisted Sister - We're Not Gonna Take it",
    url: 'https://www.youtube.com/watch?v=V9AbeALNVkk',
  },
  {
    title: 'Twisted Sister - I Wanna Rock',
    url: 'https://www.youtube.com/watch?v=SRwrg0db_zY',
  },
  {
    // desconhecida musica grande
    title: 'Beastie Boys - You Gotta Fight For Your Right To Party',
    url: 'https://www.youtube.com/watch?v=eBShN8qT4lk',
  },
  {
    // desconhecida
    title: 'Fatboy Slim - Weapon Of Choice',
    url: 'https://www.youtube.com/watch?v=wCDIYvFmgW8',
  },
  {
    title: 'Daft Punk - Robot Rock',
    url: 'https://www.youtube.com/watch?v=sFZjqVnWBhc',
  },
  {
    // desconhecida
    title: 'The Cardigans - My Favourite Game',
    url: 'https://www.youtube.com/watch?v=u9WgtlgGAgs',
  },
  {
    // desconhecida
    title: 'Blur - Song 2',
    url: 'https://www.youtube.com/watch?v=SSbBvKaM6sk',
  },
  {
    // desconhecida
    title: 'Jet - Are You Gonna Be My Girl',
    url: 'https://www.youtube.com/watch?v=tuK6n2Lkza0',
  },
  {
    // desconhecida
    title: 'P.O.D. - Youth of the Nation',
    url: 'https://www.youtube.com/watch?v=EDKwCvD56kw',
  },
  {
    // desconhecida
    title: 'Alice In Chains - Rooster',
    url: 'https://www.youtube.com/watch?v=uAE6Il6OTcs',
  },
  {
    title: 'Heart - Barracuda',
    url: 'https://www.youtube.com/watch?v=PeMvMNpvB5M',
  },
  {
    title: 'Living Colour - Cult Of Personality',
    url: 'https://www.youtube.com/watch?v=7xxgRUyzgs0',
  },
  {
    // desconhecida
    title: 'Alice In Chains - Them Bones',
    url: 'https://www.youtube.com/watch?v=zTuD8k3JvxQ',
  },
  {
    title: 'Evanescence - Bring Me To Life',
    url: 'https://www.youtube.com/watch?v=96MiYk9VYvc',
  },
  {
    title: 'Evanescence - Going Under',
    url: 'https://www.youtube.com/watch?v=CdhqVtpR2ts',
  },
  {
    title: "Evanescence - Call Me When You're Sober",
    url: 'https://www.youtube.com/watch?v=_RrA-R5VHQs',
  },
  {
    title: 'Evanescence - Lithium',
    url: 'https://www.youtube.com/watch?v=PJGpsL_XYQI',
  },
  {
    title: 'Paramore - Hard Times',
    url: 'https://www.youtube.com/watch?v=vw4RgDCMMhk',
  },
  {
    title: 'Imagine Dragons - Believer',
    url: 'https://www.youtube.com/watch?v=R5NFwVV2GN4',
  },
  {
    title: 'Miley Cyrus - WRECKING BALL',
    url: 'https://www.youtube.com/watch?v=cpzO4OGP9q0',
  },
  {
    title: 'Proerd - Proerd é o programa',
    url: 'https://www.youtube.com/watch?v=GhQWPSVaq6U',
  },
  {
    title: 'DJ Leoncio - Bolinha de Gorfe',
    url: 'https://www.youtube.com/watch?v=AqsPBtKiFrY',
  },
  {
    title: 'Green Day - Boulevard Of Broken Dreams',
    url: 'https://www.youtube.com/watch?v=Soa3gO7tL-c',
  },
  {
    title: 'Green Day - 21 Guns',
    url: 'https://www.youtube.com/watch?v=r00ikilDxW4',
  },
  {
    title: 'Linkin Park - Numb',
    url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
  },
  {
    title: 'Linkin Park - In The End',
    url: 'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
  },
  {
    title: 'Linkin Park - New Divide',
    url: 'https://www.youtube.com/watch?v=rGedjDnQ9cw',
  },
  {
    title: 'Passenger - Let Her Go',
    url: 'https://www.youtube.com/watch?v=wItHNS2LDZQ',
  },
  {
    title: 'Led Zeppelin - Immigrant Song',
    url: 'https://www.youtube.com/watch?v=y8OtzJtp-EM',
  },
  {
    title: 'Sum 41 - In Too Deep',
    url: 'https://www.youtube.com/watch?v=emGri7i8Y2Y',
  },
  {
    title: 'Led Zeppelin - Kashmir',
    url: 'https://www.youtube.com/watch?v=sfR_HWMzgyc',
  },
  {
    title: 'Red Hot Chili Peppers - Californication',
    url: 'https://www.youtube.com/watch?v=YlUKcNNmywk',
  },
  {
    title: 'Led Zeppelin - Black Dog',
    url: 'https://www.youtube.com/watch?v=yBuub4Xe1mw',
  },
  {
    title: 'Oasis - Wonderwall',
    url: 'https://www.youtube.com/watch?v=X8otOS-GFoA',
  },
  {
    title: 'Queen - Bohemian Rhapsody',
    url: 'https://www.youtube.com/watch?v=axAtWjn3MfI',
  },
  {
    title: 'Arctic Monkeys - Do I Wanna Know?',
    url: 'https://www.youtube.com/watch?v=fQ17tnRrA8k',
  },
  {
    title: 'Gotye - Somebody That I Used To Know',
    url: 'https://www.youtube.com/watch?v=fVYiAJFND0I',
  },
  {
    title: 'Lukas Graham - 7 Years',
    url: 'https://www.youtube.com/watch?v=Gl6Xq9GBNdQ',
  },
  {
    title: 'Avicii - Wake Me Up',
    url: 'https://www.youtube.com/watch?v=IcrbM1l_BoI',
  },
  {
    title: 'Arctic Monkeys - R U Mine?',
    url: 'https://www.youtube.com/watch?v=SLnU3aPzczc',
  },
  {
    title: 'The Neighbourhood - Sweater Weather',
    url: 'https://www.youtube.com/watch?v=GCdwKhTtNNw',
  },
  {
    title: 'Arctic Monkeys - Arabella',
    url: 'https://www.youtube.com/watch?v=Jn6-TItCazo',
  },
  {
    title: 'Avicii - Levels',
    url: 'https://www.youtube.com/watch?v=_ovdm2yX4MA',
  },
  {
    title: 'Lil Nas X - Old Town Road',
    url: 'https://www.youtube.com/watch?v=r7qovpFAGrQ',
  },
  {
    title: "Bon Jovi - Livin' On A Prayer",
    url: 'https://www.youtube.com/watch?v=lDK9QqIzhwk',
  },
  {
    title: "Bee Gees - Stayin' Alive",
    url: 'https://www.youtube.com/watch?v=I_izvAbhExY',
  },
  {
    title: 'Boney M - Rasputin',
    url: 'https://www.youtube.com/watch?v=16y1AkoZkmQ',
  },
  {
    title: 'TONES AND I - DANCE MONKEY',
    url: 'https://www.youtube.com/watch?v=q0hyYWKXF0Q',
  },
  {
    title: 'Ray Charles - Hit the Road Jack',
    url: 'https://www.youtube.com/watch?v=Q8Tiz6INF7I',
  },
  {
    title: 'Depeche Mode - Strangelove',
    url: 'https://www.youtube.com/watch?v=JIrm0dHbCDU',
  },
  {
    title: 'Bruno Mars - The Lazy Song',
    url: 'https://www.youtube.com/watch?v=fLexgOxsZu0',
  },
  {
    title: 'Depeche Mode - Personal Jesus',
    url: 'https://www.youtube.com/watch?v=u1xrNaTO1bI',
  },
  {
    title: 'Imagine Dragons - Radioactive',
    url: 'https://www.youtube.com/watch?v=ktvTqknDobU',
  },
  {
    title: 'Imagine Dragons - Believer',
    url: 'https://www.youtube.com/watch?v=7wtfhZwyrcc',
  },
  {
    title: 'Imagine Dragons - Thunder',
    url: 'https://www.youtube.com/watch?v=fKopy74weus',
  },
  {
    title: 'Katy Perry - Dark Horse',
    url: 'https://www.youtube.com/watch?v=0KSOMA3QBU0',
  },
  {
    title: 'Erasure - A Little Respect',
    url: 'https://www.youtube.com/watch?v=x34icYC8zA0',
  },
  {
    title: 'Creedence Clearwater Revival - Have You Ever Seen The Rain?',
    url: 'https://www.youtube.com/watch?v=Gu2pVPWGYMQ',
  },
  {
    title: 'Creedence Clearwater Revival - Bad Moon Rising',
    url: 'https://www.youtube.com/watch?v=5BmEGm-mraE',
  },
  {
    title: 'Dua Lipa - New Rules',
    url: 'https://www.youtube.com/watch?v=k2qgadSvNyU',
  },
  {
    title: 'Creedence Clearwater Revival - Fortunate Son',
    url: 'https://www.youtube.com/watch?v=ec0XKhAHR5I',
  },
  {
    title: 'Billie Eilish - bad guy',
    url: 'https://www.youtube.com/watch?v=DyDfgMOUjCI',
  },
  {
    title: 'Kansas - Carry On Wayward Son',
    url: 'https://www.youtube.com/watch?v=2X_2IdybTV0',
  },
  {
    title: 'Ed Sheeran - Shape of You',
    url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
  },
  {
    title: 'Boston - More Than A Feeling',
    url: 'https://www.youtube.com/watch?v=oR4uKcvQbGQ',
  },
  {
    title: 'LMFAO - Sexy and I Know It',
    url: 'https://www.youtube.com/watch?v=wyx6JDQCslE',
  },
  {
    title: 'PSY - GANGNAM STYLE',
    url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
  },
  {
    title: 'The Who - Behind Blue Eyes',
    url: 'https://www.youtube.com/watch?v=dMrImMedYRo',
  },
  {
    title: 'Muse - Knights Of Cydonia',
    url: 'https://www.youtube.com/watch?v=G_sBOsh-vyI',
  },
  {
    title: 'Avicii - Wake Me Up',
    url: 'https://www.youtube.com/watch?v=IcrbM1l_BoI',
  },
  {
    title: 'twenty one pilots - Stressed Out',
    url: 'https://www.youtube.com/watch?v=pXRviuL6vMY',
  },
  {
    title: 'Galantis - No Money',
    url: 'https://www.youtube.com/watch?v=xUVz4nRmxn4',
  },
  {
    title: 'Lasgo - Surrender',
    url: 'https://www.youtube.com/watch?v=mYdUwyJBRrc',
  },
  {
    title: 'Naughty Boy - La la la',
    url: 'https://www.youtube.com/watch?v=3O1_3zBUKM8',
  },
];

export default musics;
