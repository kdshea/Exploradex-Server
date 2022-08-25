import bcrypt from 'bcrypt'

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

const users = {
  admin: [
    {
      displayName: 'Admin Admin',
      profileImg: 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-profile-avatar.jpg',
      email: 'admin@gmailcom',
      userName: 'admin',
      password: await hashPassword('1234'),
      role: 'admin',
      aboutMeText: 'I\'m an admin. I enjoy travelling.',
      reviews: [
        {
          reviewText: 'We loved it!',
          rating: 5,
          activities: [ 'shopping', 'sightseeing' ],
          destinationId: '6304ef8126cede9afd876118',
          destinationName: 'Dubai',
          reviewImgUrl: [ 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-image.jpg' ],
          reviewId: '630520d30b7f7a4f9473aa66',

        }
      ],
      _id: '0fc2faa7725e24f505da6c3e',
    } 
  ],
  user: [
    {
      displayName: 'User User',
      profileImg: 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-profile-avatar.jpg',
      email: 'user@gmail.com',
      userName: 'user',
      password: await hashPassword('1234'),
      role: 'user',
      aboutMeText: 'I\'m a user and I love to travel!!!',
    },
    {
      displayName: 'Serhan Miah',
      profileImg: 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/serhan.webp',
      email: 'serhan@gmail.com',
      userName: 'serhan',
      password: await hashPassword('1234'),
      role: 'user',
      aboutMeText: 'I\'m Serhan and I love to travel!!!',
    }
  ],
}

const destination = [
  {
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Dubai (دبي) is one of the seven emirates that make up the United Arab Emirates. With shape like a slant rectangle, its bounded in the north by Sharjah and in the south by Abu Dhabi. The city is rather like an independent city-state and is the most modern and progressive emirate in the UAE, developing at a rapid pace, especially in the tourist and trade sectors. Recently, Dubai won the bid to host EXPO 2020, a Universal scale Registered Exposition approved by the Bureau of International Expositions (BIE), Paris.',
    rating: 5,
    reviews: [{
      destinationId: '6304ef8126cede9afd876118',
      reviewText: 'We loved it!',
      rating: 5,
      activities: [ 'shopping', 'sightseeing' ],
      reviewImgUrl: [ 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-image.jpg' ],
      createdBy: users.admin[0]._id,
      displayName: 'Admin Admin',
      reviewId: '630520d30b7f7a4f9473aa66',
    }],
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubai/200924183413-dubai-9-1.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubai/40q7aGxH-Dubai-skyline2021.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubai/dubai-skyline.jpg'
    ],
    _id: '6304ef8126cede9afd876118',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    description: 'Japan is one of the most popular travel destinations in the world. It is a unique blend of traditional and modern, with many temples and buildings from the past co-existing with modern achievements in architecture and technology. Tokyo is Japan\'s capital and the world\'s most populous metropolis. It is also one of Japan\'s 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Tokyo/8efd3f69-63bb-4398-a595-095cea25fc37.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Tokyo/Tokyo_GettyImages-505797368.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Tokyo/Tokyo-2021-GettyImages-1208124099.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Tokyo/tokyo-street-e1525114923862.jpg'
    ],
  },
  {
    name: 'Istanbul',
    country: 'Turkey',
    description: 'Istanbul is a city steeped in history and culture so there is much to see and do there. From its Byzantine churches adorned with mosaics and frescoes to its magnificent mosques decorated by sky-high minarets, Istanbul is a city that will mesmerize you at every turn.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Istanbul/1604840061.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Istanbul/Istanbul-CreditiStock_Explora_2005.jpg.crdownload',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Istanbul/image_processing20200107-4-1gkta6n.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Istanbul/istockphoto-1327842864-170667a.jpg'
    ],
  },
  {
    name: 'Rome',
    country: 'Italy',
    description: 'With its unparalleled history, Rome is the third most visited city in Europe and the fourteenth worldwide. It attracts visitors from all over the world who are impatient to discover the city’s impressive monuments and archaeological sites; not to mention its renowned cuisine and its lively atmosphere.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rome/1000_F_221409118_dmwllZXDBTLRWvdcsmLht5WlRiV2SXbv.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rome/IMG_7888_Crp_Prc_regular.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rome/r.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rome/5febae9bc5292-shutterstock-119048854-low-e1531295934663.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rome/Rome-cityscape-view-from-Monte-Mario.jpg.webp'
    ],
  },
  {
    name: 'Munich',
    country: 'Germany',
    description: 'With its lengthy and intense history, incredible architectural and cultural heritage and beautiful natural landscapes, Munich is one of the most popular tourist destinations in Germany. The city, which is capital of the federal state of Bavaria, is home to a perfect fusion of modernity and tradition. From lakes, parks and beer gardens to museums, historical sites and massive stores, there\'s something for everyone who visits Munich. If you seek the finest beers, the most idyllic views, eco-parks, amazing cuisine, mind-blowing art collections or you just wish to sit in the midst of really great people, a trip to the Bavarian capital is all you need.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Munich/a2a99d53-city-14057-54e213d9.jpg'
    ],
  },
  {
    name: 'Cancun',
    country: 'Mexico',
    description: 'More than 10 millions tourist every year can\'t be wrong. Cancun Mexico is the ultimate vacation and resort destination whether your idea of a good time is sunbathing, scuba, adventure, eco-parks, nighlife, water sports among many other activities. You’ll want to make the most of the ocean here; this area has been an enduring favourite for scuba diving and snorkelling tours since the 1970s, when the city was a then-remote idyll. Since then Cancun has transformed into Mexico’s most famous resort destination, and the appeal of its turquoise lagoons and palm-fringed shorelines endures.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cancun/Cancun/22bab5ad4b9aa1027ad00a84ea7493d2c0c5e666d43d3b9413e332bdbd3f1780.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cancun/Cancun/Canc_n_Aerea_Oficial_c27890a5-7439-48c4-b722-321c3b71b1df.jpg.crdownload.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cancun/Cancun/Arial-view-of-cancun-hotel-zone-Mexico.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cancun/Cancun/cancun-travel-guide.jpg'
    ],
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    description: 'The famed "Island of the Gods", with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual, and unique culture stakes a serious claim to be paradise on earth. With world-class surfing and diving, a large number of cultural, historical, and archaeological attractions, and an enormous range of accommodations, this is one of the world\'s most popular island destinations and one which consistently wins travel awards.',
    rating: '5',
    imgUrl: [      
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bali/bali-temple.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bali/baliguide.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bali/shutterstock_631736717.webp'
    ],
  },
  {
    name: 'New York',
    country: 'USA',
    description: 'New York is the most populous city in the United States. It lies at the mouth of the Hudson River in the southernmost part of the state of New York. New York City has a population of approximately 8.2 million people. The New York Metropolitan Area, which spans lower New York, northern New Jersey, and southwestern Connecticut, has a population of 18.7 million, making it the largest metropolitan area in the U.S. As of 2014, it was one of the 15 largest metro areas in the world. New York City is a center for media, culture, food, fashion, art, research, finance, and trade. It has one of the largest and most famous skylines on earth, dominated by the iconic Empire State Building.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewYork/637128604553104030HA.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewYork/gettyimages-688899881-1519413300.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewYork/NewYorkStreets.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewYork/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewYork/nyc1.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewYork/shutterstockRF_1564421236.avif',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewYork/gettyimages-670885994-1519675758.jpg'
    ],
  },
  {
    name: 'New Orleans',
    country: 'United States',
    description: 'In New Orleans you\'ll find the roots of jazz and a blossoming culture that has been long described as being unlike anything else in the United States. Founded in 1718, it is one the nation\'s oldest cities and has an atmosphere rich with a mix of French, Spanish, African-American, Caribbean, Irish, Italian, Haitian, German, and Vietnamese, all creating an energy that can be described as something greater than the sum of its parts. Though hit hard by Hurricane Katrina in 2005, the city continues to rebound, and it remains the largest city in Louisiana and one of the top tourist destinations in the United States.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewOrleans/new-orleans-bourbon-street.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewOrleans/streetcar-in-new-orleans-699112771-592dcb643df78cbe7e6bd39a.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewOrleans/5104226627001_5717620037001_5479294429001-vs.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/NewOrleans/neworleans_dsc2493_hr.jpg'
    ],
  },
  {
    name: 'Dublin',
    country: 'Republic of Ireland',
    description: 'Dublin is the capital city of Ireland. Its vibrancy, nightlife and tourist attractions are renowned and it is the most popular entry point for international visitors to Ireland. It\'s disproportionately large for the size of Ireland with nearly two million in the Greater Dublin Region - well over a third of the Republic\'s population! The centre is, however, relatively small and can be navigated by foot, with most of the population living in suburbs.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dublin/dublin-river-liffey-alamy-RH9469.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dublin/dublinguide.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dublin/dublin-travel-guide-the-temple-bar-visit-ireland-top-attractions.jpg'
    ],
  },
  {
    name: 'Marrakech',
    country: 'Morocco',
    description: 'Marrakech, also spelt Marrakesh, is an intoxicating city known for its souks, spices and snake charmers, though these days it is also prized as much for its trendy art galleries, classy boutique hotels and luxurious hammams. The ancient section of the city, known as the medina, was designated a UNESCO World Heritage site in 1985.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Marrakesh/Depositphotos_23937101_XL.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Marrakesh/Morocco-Tour-8.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Marrakesh/dmo-momrk-header.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Marrakesh/Marrakech-travel-guide.jpg.crdownload.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Marrakesh/morocco-marrakesh-top-attractions-djemaa-el-fna.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Marrakesh/Panoramic-view-of-Marrakesh-and-old-medina-1024x658.jpg'
    ],
  },
  {
    name: 'Sydney',
    country: 'Australia',
    description: 'Sydney is a cosmopolitan city surrounded by stunning beaches, iconic architecture, and acclaimed wine regions. Besides being Australia\'s largest city (over 5 million people live here, almost 20% of the entire country), Sydney is also its most visited. Though, contrary to popular belief, not the country\'s capital.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Sydney/SensationalSydneyandtheReef_SWAIN1.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Sydney/boats-and-skyline-at-sydney-harbor-cover.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Sydney/people-dining-at-outdoor-restaurants-in-circular-quay-in-sydney-586364738-11e467ff91e041f3aae7b317f8d499c4.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Sydney/shu-Australia-Sydney-662769640-1440x823.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Sydney/sydney-guide-lead-sunset.webp'
    ],
  },
  {
    name: 'Gold Coast',
    country: 'Australia',
    description: 'The Gold Coast is a metropolitan region south of Brisbane on Australia’s east coast. It\'s famed for its long sandy beaches, surfing spots and elaborate system of inland canals and waterways. It’s also home to theme parks such as Dreamworld, Sea World and Wet’n’Wild. Inland, hiking trails crisscross Lamington National Park’s mountain ridges and valleys, home to rare birds and rainforest.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Gold+Coast/Gold-Coast-Beaches.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Gold+Coast/gold-coast-987a.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Gold+Coast/gold-coast-travel-ideas.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Gold+Coast/jo3a7ztiglxzw5om459k.jpg'
    ],
  },
  {
    name: 'Paris',
    country: 'France',
    description: 'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Paris/63e66ec2-lm-943-16ac6629cb7.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Paris/paris-statistics-banner-1600x600.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Paris/7066.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Paris/paris-trip.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Paris/d7b25779-e79e-4fed-b8ea-f45b3653a654-7648-paris-small-group-magnificent-louvre-museum-tour-01.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Paris/parisguide.jpg'
    ],
  },
  {
    name: 'Saint Tropez',
    country: 'France',
    description: 'Saint-Tropez is one of the best places to visit in France to experience the glamour and beauty of the French Riviera. This sun-drenched resort town offers gorgeous sandy beaches and exclusive beach clubs along with a delightful historic village.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/St+Tropez/Saint-Tropez-Discovery-Riviera-Tours-007.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/St+Tropez/michael-kroul-XCeF9q1YyAE-unsplash.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/St+Tropez/Saint-Tropez-cover.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/St+Tropez/view-city-saint-tropez-provence-cote-d-azur-popular-destination-travel-europe-163565716.jpg'
    ],
  },
  {
    name: 'Cape Town',
    country: 'South Africa',
    description: 'Cape Town is a port city on South Africa\'s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain\'s flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island, the notorious prison that once held Nelson Mandela, which is now a living museum.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cape+Town/cape-town-south-africa.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cape+Town/cape-town-guides-lead.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cape+Town/cape-town-travel.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Cape+Town/capetownguide1.jpg'
    ],
  },
  {
    name: 'Dubrovnik',
    country: 'Croatia',
    description: 'Visiting Dubrovnik gives you a city break and beach holiday all in one. It\'s the chance to discover the culture of this ancient republic whose history goes back to the 7th century, while basking on the beaches and soaking up that laid-back Dalmatian vibe they call fjaka. The famous city walls were used heavily in the filming of HBO\'s Game of Thrones.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/00-lede-dubrovnik-croatia-travel-guide.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/Dubrovnik-Travel-1-scaled-e1590320834362.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/dubrovnik-city-walls-lead-guide.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/Croatia-Dubrovnik-photosmatic-shutterstock_333967037-RFE.avif',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/iStock178359609dubrovnik2400x800.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/Croatia_Dubrovnik-56fd6323f9d1.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/Things-to-do-in-Dubrovnik-Croatia.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Dubrovnik/Dubrovnik_GettyImages-530016981.webp'
    ],
  },
  {
    name: 'Beijing',
    country: 'China',
    description: 'China\'s awesome and monumental ancient treasures exceed all other countries for size and number — from ancient palaces to the Great Wall, city walls, buried armies, canals, pagodas, temples, and giant Buddhas. See: The Seven Ancient Wonders of China. China\'s World Heritage.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Beijing/22c46ab3-city-3286-164700d5d0b.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Beijing/EG4N7_Beijing_Travel.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Beijing/ForbiddenCity.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Beijing/Think-China-Beijing-491990549-hxdyl-copy.jpg'
    ],
  },
  {
    name: 'Riga',
    country: 'Latvia',
    description: 'The Gothic spires that dominate Rīga\'s cityscape might suggest austerity, but it is the flamboyant art nouveau that forms the flesh and the spirit of this vibrant cosmopolitan city, the largest of all three Baltic capitals. Like all northerners, it is quiet and reserved on the outside, but there is some powerful chemistry going on inside its hip bars, modern art centres and the kitchens of its cool experimental restaurants.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Riga/Riga_-_Latvia.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Riga/9594740-0-image-a-30_1549720834157.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Riga/bigstock-208409443-990x556.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Riga/latvia_rigasquare.jpg'
    ],
  },
  {
    name: 'Antalya',
    country: 'Turkey',
    description: 'Turkey\'s principal holiday resort in the Mediterranean region (ancient Pamphylia), is an attractive city with shady palm-lined boulevards, a prize-winning marina on the Mediterranean. In the picturesque old quarter, Kaleici, narrow winding streets and old wooden houses abut the ancient city walls.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Antalya/1.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Antalya/antalya.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Antalya/hotel-area.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Antalya/land_legends_banner_imagev1.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Antalya/erik-karits-OZfVcu3Hy9E-unsplash_1920x1920.jpeg'
    ],
  },
  {
    name: 'Puerto Vallarta',
    country: 'Mexico',
    description: 'Puerto Vallarta is a stunning resort town located on Mexico\'s Pacific coast in Jalisco state. Known for its spectacular beaches, marine life, water sports, and local resorts, Puerto Vallarta is one of the most popular vacation destinations in the world.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Puerto+Vallarta/66132-Malecon.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Puerto+Vallarta/BPVALL_POOL_48.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Puerto+Vallarta/Ultimate-Guide-for-Planning-a-Trip-to-Puerto-Vallarta-Mexico-10.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Puerto+Vallarta/hotel-krystal-puerto.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Puerto+Vallarta/playa-los-muertos-pier-and-beach--puerto-vallarta--comes-alive-with-activity-by-locals-and-tourists-1062964602-1f152cee77854b088600fd043462a939.jpeg'
    ],
  },
  {
    name: 'Bangkok',
    country: 'Thailand',
    description: 'Bangkok is one of those cities that never gets old. No matter how many times you\'ve been, you\'ll always discover something new and exciting to see, do, and eat. It\'s got a near perfect mix of food, culture, nightlife, shopping, and affordability that\'s unmatched anywhere in Southeast Asia.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bangkok/bangkok1.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bangkok/390653_ImageGalleryLightboxLarge.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bangkok/Shangri-La-Bangkok-Header-1600x700.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bangkok/Sri-Panwa-Phuket.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Bangkok/Thailand_2.jpeg'
    ],
  },
  {
    name: 'Phuket',
    country: 'Thailand',
    description: 'It is the biggest Island of Thailand and sits on the Andaman sea. The nearest province to the north is Phang-nga and the nearest provinces to the east are Phang-nga and Krabi. Phuket has a large Chinese influence, so you will see many Chinese shrines and Chinese Restaurants around the City.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Phuket/23191.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Phuket/Sri-Panwa-Phuket.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Phuket/phuket-and-koh-samui-villa.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Phuket/Depositphotos_138573298_xl-2015_1920x1920.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Phuket/image_63_v5.jpeg'
    ],
  },
  {
    name: 'Berlin',
    country: 'Germany',
    description: 'Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that\'s somehow all go yet relaxed.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Berlin/Gallery-6-8.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Berlin/berlin-desktop.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Berlin/berlin.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Berlin/Holiday-with-Pride-Specialist-in-LGBT-Holidays-to-Berlin.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Berlin/berlin-guide-lead-2018.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Berlin/family-holidays-to-berlin.jpeg'
    ],
  },
  {
    name: 'London',
    country: 'United Kingdom',
    description: 'London — home to world-class restaurants, an unparalleled music scene, and some seriously rich history. Plus, tea. Who could forget the tea? London is a wonderful city to visit, and with London\'s fantastic public transportation, it\'s a breeze to get from point A to point B. You could easily spend a week or more exploring all that each London neighborhood has to offer, and still have things left over for your next visit.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/London/londra_featured-1.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/London/London_Eye_Twilight_April_2006.jpeg',   
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/London/b4a15da2-lm-5246-16da53a6d21.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/London/f8147872-890b-e611-80cb-c81f66f7476e.jpeg'
    ],
  },
  {
    name: 'Edinburgh',
    country: 'United Kingdom',
    description: 'Edinburgh has a rare charm with narrow and cobbled passageways, called closes in Scots. The town is also known for its dark corners where terrifying events have taken place, its majestic buildings and gardens, countless fascinating museums, which are free to visit and, especially, the city\'s kind and open locals.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Edinburgh/UK_Edinburg_UK_Header.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Edinburgh/edinburgh.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Edinburgh/jorg-angeli-S56zN8cV5fk-unsplash-2-1800x965.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Edinburgh/edinburgh-castle-and-ross-fountain-1.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Edinburgh/edinburgh.png.gallery.jpg'
    ],
  },
  {
    name: 'Barcelona',
    country: 'Spain',
    description: 'Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe\'s trendiest cities. It\'s a hub of new trends in the world of culture, fashion and cuisine. It combines the creativity of its artists and designers with respect and care for local traditions.',
    rating: '5',
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Barcelona/1200x675-743746107.jpeg                    ',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Barcelona/barcelona2.jpeg ',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Barcelona/spain_barcelona_3840x2160.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Barcelona/1200x675-993863262.jpeg',      
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Barcelona/1200x675-743746107.jpeg'
    ],
  },
  {
    name: 'Madrid',
    country: 'Spain',
    description: 'The number of foreign tourists who visit Madrid continues to grow due to its rich culture, its numerous landmarks, great nightlife and fun activities. In Madrid, you can feel the true essence of Spain, in its elegant architecture, the life in its plazas and the delicious cuisine.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Madrid/Madrid-Spain-Travel-Holidays-Guide.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Madrid/madrid1.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Madrid/13803.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Madrid/madrid-desktop.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Madrid/1479226630-madrid-shutterstock_146707415ejpg.jpeg'
    ],
  },
  {
    name: 'Rio de Janeiro',
    country: 'Brazil',
    description: 'Rio is a sprawling city, but each neighborhood has a distinct vibe. Think of Rio more like a collection of small beach and mountain towns, and it\'s less overwhelming. Copacabana and Ipanema are obvious beach neighborhoods, but a tram ride up to Santa Teresa is worth it for the boho vibe, ocean views, and samba clubs. Very few places in the world match the hospitality and natural charm in which Rio is perpetually swathed.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rio+de+Janeiro/001288-Copacabana-Rio-de-Janeiro-pixabay-1963744.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rio+de+Janeiro/1621606473_riodejaneiro318248558.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rio+de+Janeiro/aerial-view-of-rio-de-janeiroee4454-800x800.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rio+de+Janeiro/rio-de-janeiro-and-carnival-1778340.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Rio+de+Janeiro/89176841.jpeg'
    ],
  },
  {
    name: 'Buenos Aires',
    country: 'Argentina',
    description: 'The city is filled with rich history, beautiful architecture, verdant parks, quirky bookstores, and a fantastic nightlife — particularly if you like lively clubs that party until dawn. Because Buenos Aires is a city that sleeps in and stays out late!',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Buenos+Aires/373746_ImageGalleryLightboxLarge.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Buenos+Aires/article-2004849-0C99787800000578-734_634x408.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Buenos+Aires/iStock-166021179.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Buenos+Aires/header-four-seasons-buenos-aires-luxury-argentina-holiday-packages--1600x700.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Buenos+Aires/holidays-celebration-argentina.jpeg'
    ],
  },
  {
    name: 'Auckland',
    country: 'New Zealand',
    description: 'With towering skyscrapers, volcanic islands and picturesque beaches, Auckland seamlessly blends majestic scenery with the hustle and bustle of city living. For adventure junkies, there\'s everything from zip lining on Waiheke Island to bungee jumping from the Sky Tower.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Auckland/ss_1973285717_mount_eden_auckland_3000x1000.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Auckland/2f.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Auckland/Auckland-destination-3.webp',      
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Auckland/8002269-mount-eden-auckland.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Auckland/Holidaymakers-New-Zealand-Auckland-Visit-Traveling--1280x720.jpeg'
    ],
  },
  {
    name: 'Christchurch',
    country: 'New Zealand',
    description: 'Christchurch is the city of exploration, where urban regeneration and heritage thrive. The city is constantly evolving, always giving locals and visitors something new to explore. Expect street art and innovative projects, a bustling hospitality scene and established green spaces. Christchurch is the newest city in the world, and it\'s time the world rediscovered its secrets.',
    rating: '5',
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/ChristChurch/15996709-punting-on-the-river-avon.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/ChristChurch/1621988484471.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/ChristChurch/245834-river-avon-christchurch.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/ChristChurch/img-1536252589-2021-20362-9929A062-0496-9120-1FE87C45646D255F__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/ChristChurch/7034877379_04035df007_k.webp'
    ],
  },
  {
    name: 'Vancouver',
    country: 'Canada',
    description: 'The city\'s North Shore nature doorstep offers snow sports, mountain biking and rainforest hiking trails, while the city itself is studded with sandy shorelines, kayaking routes, verdant gardens and Canada\'s urban green-space jewel, the mighty and highly beloved Stanley Park.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Vancouver/08.-Vancouver_British_Columbia-2.jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Vancouver/Stanley-Park-1440x810.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Vancouver/vancouver.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Vancouver/Top-Vancouver-holiday-ideas-6.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Vancouver/8579_180.jpeg'
    ],
  },
  {
    name: 'Las Vegas',
    country: 'USA',
    description: 'Often called "America\'s Playground" or "Sin City," Las Vegas is an iconic U.S. town known for over-the-top fun. The Las Vegas Strip is all about neon lights, casinos, lavish hotels, and restaurants helmed by some of the world\'s best chefs. Whether you\'re heading to Las Vegas to celebrate, gamble, take in a Cirque du Soleil show, or catch your favorite musician\'s residency, you\'ll find it in the city where visitors go all out for entertainment.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Las+Vagas/1..jpg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Las+Vagas/las-vegas-usa.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Las+Vagas/106901699-1624478603272Resorts-World-Las-Vegas---Casino---Credit-Megan-Blair-jpg.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Las+Vagas/jcr_content.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Las+Vagas/view-of-the-bellagio-fountains-and-the-strip-in-las-vegas.jpeg'
    ],
  },
  {
    name: 'Amsterdam',
    country: 'Netherlands',
    description: 'It has all the advantages of a big city: rich culture, lively Amsterdam nightlife, international restaurants, good transport - but is quiet, and largely thanks to its extensive canals, has a little road traffic. In this city your destination is never far away, but get a bike for an authentic local experience.',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/AmsterDam/0c271631-545f-4f5f-8145-e59904c725ae.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/AmsterDam/312244.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/AmsterDam/98b76d02a1a8e3.webp',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/AmsterDam/Overview-Amsterdam.webp'
    ],
  },
  {
    name: 'Venice',
    country: 'Italy',
    description: 'Venice is one of Italy\'s most romantic cities and also one of the most unique cities in the world. It is located in the northeast of Italy and it is the capital of the province with the same name. Venice is built on a set of about 120 islands formed in the Venetian Lagoon along the Adriatic Sea and it has become famous worldwide thanks to the channels that form the streets of this floating city. ',
    rating: 5,
    imgUrl: [
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Venice+/1535468043-nicolo-di-giovanni-509932-unsplash2jpg.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Venice+/image_66_v5.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Venice+/venice-desktop.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Venice+/362690_ImageGalleryLightboxLarge.jpeg',
      'https://sei65-destinations.s3.eu-west-1.amazonaws.com/Destination+/Venice+/italy-venice-city-break-Grand-Canal-Gondola.jpeg'
    ],
  }
].map((destination) => ({
  ...destination,
  createdBy: users.admin[0]._id,
}))

const review = [
  {
    reviewText: 'We loved it!',
    rating: 5,
    activities: [ 'shopping', 'sightseeing' ],
    createdBy: users.admin[0]._id,
    destinationId: destination[0]._id,
    destinationName: 'Dubai',
    reviewImgUrl: 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-image.jpg',
    _id: '630520d30b7f7a4f9473aa66',
  }
]

export default { destination, users, review }


