import bcrypt from 'bcrypt'

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

const users = {
  admin: {
    email: 'admin@gmailcom',
    userName: 'admin',
    password: await hashPassword('1234'),
    role: 'admin',
  },
  user: {
    email: 'user@gmail.com',
    userName: 'user',
    password: await hashPassword('1234'),
    role: 'user',
  },
}

const destination = [
  {
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Dubai (دبي) is one of the seven emirates that make up the United Arab Emirates. With shape like a slant rectangle, its bounded in the north by Sharjah and in the south by Abu Dhabi. The city is rather like an independent city-state and is the most modern and progressive emirate in the UAE, developing at a rapid pace, especially in the tourist and trade sectors. Recently, Dubai won the bid to host EXPO 2020, a Universal scale Registered Exposition approved by the Bureau of International Expositions (BIE), Paris.',
    rating: '5',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    description: 'Japan is one of the most popular travel destinations in the world. It is a unique blend of traditional and modern, with many temples and buildings from the past co-existing with modern achievements in architecture and technology. Tokyo is Japan\'s capital and the world\'s most populous metropolis. It is also one of Japan\'s 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo.'
  },
  {
    name: 'Istanbul',
    country: 'Turkey',
    description: 'Istanbul is a city steeped in history and culture so there is much to see and do there. From its Byzantine churches adorned with mosaics and frescoes to its magnificent mosques decorated by sky-high minarets, Istanbul is a city that will mesmerize you at every turn.',
    rating: '5',
  },
  {
    name: 'Rome',
    country: 'Italy',
    description: 'With its unparalleled history, Rome is the third most visited city in Europe and the fourteenth worldwide. It attracts visitors from all over the world who are impatient to discover the city\’s impressive monuments and archaeological sites; not to mention its renowned cuisine and its lively atmosphere.',
    rating: '5',
  },
  {
    name: 'Munich',
    country: 'Germany',
    description: 'With its lengthy and intense history, incredible architectural and cultural heritage and beautiful natural landscapes, Munich is one of the most popular tourist destinations in Germany. The city, which is capital of the federal state of Bavaria, is home to a perfect fusion of modernity and tradition. From lakes, parks and beer gardens to museums, historical sites and massive stores, there\'s something for everyone who visits Munich. If you seek the finest beers, the most idyllic views, eco-parks, amazing cuisine, mind-blowing art collections or you just wish to sit in the midst of really great people, a trip to the Bavarian capital is all you need.',
    rating: '5',
  },
  {
    name: 'Cancun',
    country: 'Mexico',
    description: 'More than 10 millions tourist every year can\'t be wrong. Cancun Mexico is the ultimate vacation and resort destination whether your idea of a good time is sunbathing, scuba, adventure, eco-parks, nighlife, water sports among many other activities. You’ll want to make the most of the ocean here; this area has been an enduring favourite for scuba diving and snorkelling tours since the 1970s, when the city was a then-remote idyll. Since then Cancun has transformed into Mexico’s most famous resort destination, and the appeal of its turquoise lagoons and palm-fringed shorelines endures.',
    rating: '5',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    description: 'The famed "Island of the Gods", with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual, and unique culture stakes a serious claim to be paradise on earth. With world-class surfing and diving, a large number of cultural, historical, and archaeological attractions, and an enormous range of accommodations, this is one of the world\'s most popular island destinations and one which consistently wins travel awards.',
    rating: '5',
  },
  {
    name: 'New York',
    country: 'USA',
    description: 'New York is the most populous city in the United States. It lies at the mouth of the Hudson River in the southernmost part of the state of New York. New York City has a population of approximately 8.2 million people. The New York Metropolitan Area, which spans lower New York, northern New Jersey, and southwestern Connecticut, has a population of 18.7 million, making it the largest metropolitan area in the U.S. As of 2014, it was one of the 15 largest metro areas in the world. New York City is a center for media, culture, food, fashion, art, research, finance, and trade. It has one of the largest and most famous skylines on earth, dominated by the iconic Empire State Building.',
    rating: '5',
  },
  {
    name: 'New Orleans',
    country: 'United States',
    description: 'In New Orleans you\'ll find the roots of jazz and a blossoming culture that has been long described as being unlike anything else in the United States. Founded in 1718, it is one the nation\'s oldest cities and has an atmosphere rich with a mix of French, Spanish, African-American, Caribbean, Irish, Italian, Haitian, German, and Vietnamese, all creating an energy that can be described as something greater than the sum of its parts. Though hit hard by Hurricane Katrina in 2005, the city continues to rebound, and it remains the largest city in Louisiana and one of the top tourist destinations in the United States.',
    rating: '5',
  },
  {
    name: 'Dublin',
    country: 'Republic of Ireland',
    description: 'Dublin is the capital city of Ireland. Its vibrancy, nightlife and tourist attractions are renowned and it is the most popular entry point for international visitors to Ireland. It\'s disproportionately large for the size of Ireland with nearly two million in the Greater Dublin Region - well over a third of the Republic\'s population! The centre is, however, relatively small and can be navigated by foot, with most of the population living in suburbs.',
    rating: '5',
  },
  {
    name: 'Marrakech',
    country: 'Morocco',
    description: 'Marrakech, also spelt Marrakesh, is an intoxicating city known for its souks, spices and snake charmers, though these days it is also prized as much for its trendy art galleries, classy boutique hotels and luxurious hammams. The ancient section of the city, known as the medina, was designated a UNESCO World Heritage site in 1985.',
    rating: '5',
  },
  {
    name: 'Sydney',
    country: 'Australia',
    description: 'Sydney is a cosmopolitan city surrounded by stunning beaches, iconic architecture, and acclaimed wine regions. Besides being Australia\'s largest city (over 5 million people live here, almost 20% of the entire country), Sydney is also its most visited. Though, contrary to popular belief, not the country\'s capital.',
    rating: '5',
  },
  {
    name: 'Gold Coast',
    country: 'Australia',
    description: 'The Gold Coast is a metropolitan region south of Brisbane on Australia\’s east coast. It\'s famed for its long sandy beaches, surfing spots and elaborate system of inland canals and waterways. It\’s also home to theme parks such as Dreamworld, Sea World and Wet\’n\’Wild. Inland, hiking trails crisscross Lamington National Park\’s mountain ridges and valleys, home to rare birds and rainforest.',
    rating: '5',
  },
  {
    name: 'Paris',
    country: 'France',
    description: 'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.',
    rating: '5',
  },
  {
    name: 'Saint Tropez',
    country: 'France',
    description: 'Saint-Tropez is one of the best places to visit in France to experience the glamour and beauty of the French Riviera. This sun-drenched resort town offers gorgeous sandy beaches and exclusive beach clubs along with a delightful historic village.',
    rating: '5',
  },
  {
    name: 'Cape Town',
    country: 'South Africa',
    description: 'Cape Town is a port city on South Africa\'s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain\'s flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island, the notorious prison that once held Nelson Mandela, which is now a living museum.',
    rating: '5',
  },
  {
    name: 'Dubrovnik',
    country: 'Croatia',
    description: 'Visiting Dubrovnik gives you a city break and beach holiday all in one. It\'s the chance to discover the culture of this ancient republic whose history goes back to the 7th century, while basking on the beaches and soaking up that laid-back Dalmatian vibe they call fjaka. The famous city walls were used heavily in the filming of HBO\'s Game of Thrones.',
    rating: '5',
  },
  {
    name: 'Beijing',
    country: 'China',
    description: 'China\'s awesome and monumental ancient treasures exceed all other countries for size and number — from ancient palaces to the Great Wall, city walls, buried armies, canals, pagodas, temples, and giant Buddhas. See: The Seven Ancient Wonders of China. China\'s World Heritage.',
    rating: '5',
  },
  {
    name: 'Rome',
    country: 'Italy',
    description: 'A heady mix of haunting ruins, awe-inspiring art and vibrant street life, Italy\'s hot-blooded capital is one of the world\'s most romantic and charismatic cities.',
    rating: '5',
  },
  {
    name: 'Antalya',
    country: 'Turkey',
    description: 'Turkey\'s principal holiday resort in the Mediterranean region (ancient Pamphylia), is an attractive city with shady palm-lined boulevards, a prize-winning marina on the Mediterranean. In the picturesque old quarter, Kaleici, narrow winding streets and old wooden houses abut the ancient city walls.',
    rating: '5',
  },
  {
    name: 'Puerto Vallarta',
    country: 'Mexico',
    description: 'Puerto Vallarta is a stunning resort town located on Mexico\'s Pacific coast in Jalisco state. Known for its spectacular beaches, marine life, water sports, and local resorts, Puerto Vallarta is one of the most popular vacation destinations in the world.',
    rating: '5',
  },
  {
    name: 'Bangkok',
    country: 'Thailand',
    description: 'Bangkok is one of those cities that never gets old. No matter how many times you\'ve been, you\'ll always discover something new and exciting to see, do, and eat. It\'s got a near perfect mix of food, culture, nightlife, shopping, and affordability that\'s unmatched anywhere in Southeast Asia.',
    rating: '5',
  },
  {
    name: 'Phuket',
    country: 'Thailand',
    description: 'It is the biggest Island of Thailand and sits on the Andaman sea. The nearest province to the north is Phang-nga and the nearest provinces to the east are Phang-nga and Krabi. Phuket has a large Chinese influence, so you will see many Chinese shrines and Chinese Restaurants around the City.',
    rating: '5',
  },
  {
    name: 'Berlin',
    country: 'Germany',
    description: 'Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that\'s somehow all go yet relaxed.',
    rating: '5',
  },
  {
    name: 'London',
    country: 'United Kingdom',
    description: 'London — home to world-class restaurants, an unparalleled music scene, and some seriously rich history. Plus, tea. Who could forget the tea? London is a wonderful city to visit, and with London\'s fantastic public transportation, it\'s a breeze to get from point A to point B. You could easily spend a week or more exploring all that each London neighborhood has to offer, and still have things left over for your next visit.',
    rating: '5',
  },
  {
    name: 'Edinburgh',
    country: 'United Kingdom',
    description: 'Edinburgh has a rare charm with narrow and cobbled passageways, called closes in Scots. The town is also known for its dark corners where terrifying events have taken place, its majestic buildings and gardens, countless fascinating museums, which are free to visit and, especially, the city\'s kind and open locals.',
    rating: '5',
  },
  {
    name: 'Barcelona',
    country: 'Spain',
    description: 'Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe\'s trendiest cities. It\'s a hub of new trends in the world of culture, fashion and cuisine. It combines the creativity of its artists and designers with respect and care for local traditions.',
    rating: '5',
  },
  {
    name: 'Madrid',
    country: 'Spain',
    description: 'The number of foreign tourists who visit Madrid continues to grow due to its rich culture, its numerous landmarks, great nightlife and fun activities. In Madrid, you can feel the true essence of Spain, in its elegant architecture, the life in its plazas and the delicious cuisine.',
    rating: '5',
  },
  {
    name: 'Rio de Janeiro',
    country: 'Brazil',
    description: 'Rio is a sprawling city, but each neighborhood has a distinct vibe. Think of Rio more like a collection of small beach and mountain towns, and it\'s less overwhelming. Copacabana and Ipanema are obvious beach neighborhoods, but a tram ride up to Santa Teresa is worth it for the boho vibe, ocean views, and samba clubs. Very few places in the world match the hospitality and natural charm in which Rio is perpetually swathed.',
    rating: '5',
  },
  {
    name: 'Buenos Aires',
    country: 'Argentina',
    description: 'The city is filled with rich history, beautiful architecture, verdant parks, quirky bookstores, and a fantastic nightlife — particularly if you like lively clubs that party until dawn. Because Buenos Aires is a city that sleeps in and stays out late!',
    rating: '5',
  },
  {
    name: 'Auckland',
    country: 'New Zealand',
    description: 'With towering skyscrapers, volcanic islands and picturesque beaches, Auckland seamlessly blends majestic scenery with the hustle and bustle of city living. For adventure junkies, there\'s everything from zip lining on Waiheke Island to bungee jumping from the Sky Tower.',
    rating: '5',
  },
  {
    name: 'Christchurch',
    country: 'New Zealand',
    description: 'Christchurch is the city of exploration, where urban regeneration and heritage thrive. The city is constantly evolving, always giving locals and visitors something new to explore. Expect street art and innovative projects, a bustling hospitality scene and established green spaces. Christchurch is the newest city in the world, and it\s time the world rediscovered its secrets.',
    rating: '5',
  },
  {
    name: 'Vancouver',
    country: 'Canada',
    description: 'The city\'s North Shore nature doorstep offers snow sports, mountain biking and rainforest hiking trails, while the city itself is studded with sandy shorelines, kayaking routes, verdant gardens and Canada\'s urban green-space jewel, the mighty and highly beloved Stanley Park.',
    rating: '5',
  },
  {
    name: 'Las Vegas',
    country: 'USA',
    description: 'Often called "America\'s Playground" or "Sin City," Las Vegas is an iconic U.S. town known for over-the-top fun. The Las Vegas Strip is all about neon lights, casinos, lavish hotels, and restaurants helmed by some of the world\'s best chefs. Whether you\'re heading to Las Vegas to celebrate, gamble, take in a Cirque du Soleil show, or catch your favorite musician\'s residency, you\'ll find it in the city where visitors go all out for entertainment.',
    rating: '5',
  },
  {
    name: 'Amsterdam',
    country: 'Netherlands',
    description: 'It has all the advantages of a big city: rich culture, lively Amsterdam nightlife, international restaurants, good transport - but is quiet, and largely thanks to its extensive canals, has a little road traffic. In this city your destination is never far away, but get a bike for an authentic local experience.',
    rating: '5',
  },
  {
    name: 'Venice',
    country: 'Italy',
    description: 'Venice is one of Italy\'s most romantic cities and also one of the most unique cities in the world. It is located in the northeast of Italy and it is the capital of the province with the same name. Venice is built on a set of about 120 islands formed in the Venetian Lagoon along the Adriatic Sea and it has become famous worldwide thanks to the channels that form the streets of this floating city. ',
    rating: '5',
  },
  
]

export default destination



