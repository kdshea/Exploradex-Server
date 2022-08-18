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
    description: 'Dubai (دبي) is one of the seven emirates that make up the United Arab Emirates. With shape like a slant rectangle, its bounded in the north by Sharjah and in the south by Abu Dhabi. The city is rather like an independent city-state and is the most modern and progressive emirate in the UAE, developing at a rapid pace, especially in the tourist and trade sectors. Recently, Dubai won the bid to host EXPO 2020, a Universal scale Registered Exposition approved by the Bureau of International Expositions (BIE), Paris.',
    rating: '5',
  },
  {
    name: 'Japan',
    description: 'Japan is one of the most popular travel destinations in the world. It is a unique blend of traditional and modern, with many temples and buildings from the past co-existing with modern achievements in architecture and technology. Visitors can be immersed in Japanese history and culture one day and get a glimpse of the future through technological developments the next',
    rating: '5',
  },
  {
    name: 'Turkey - Istanbul, Antalya',
    description: 'Türkiye, or Turkey as formerly known, is a country located in both Asia and Europe. While some of its religious and social aspects are traditionally associated with Western Asia, it is culturally considered European. Geographically, a small part of its territory is located in Southeastern Europe; the separation between the two continents is delimited by the Turkish Straits (Bosphorus, Sea of Marmara, and Dardanelles). With the Black Sea to the north and the Aegean Sea in the west and Mediterranean Sea to the southwest, Turkey is surrounded by Bulgaria and Greece to the west, Armenia, Azerbaijan and Georgia to the northeast, Syria, Iraq and Iran to the southeast.',
    rating: '5',
  },
  {
    name: 'Italy -  ',
    description: 'Italy (Italian: Italia) is a country in Southern Europe. Together with Greece, it is acknowledged as the birthplace of Western culture. Not surprisingly, it is also home to the greatest number of UNESCO World Heritage Sites in the world. High art and monuments are to be found everywhere around the country. It is also famous worldwide for its delicious cuisine, its trendy fashion industry, luxury sports cars and motorcycles, diverse regional cultures and dialects, as well as for its beautiful coast, alpine lakes and mountain ranges (the Alps and Apennines). No wonder it is often nicknamed the Bel Paese (the Beautiful Country).',
    rating: '5',
  },
  {
    name: 'Germany -  ',
    description: 'Germany, (officially: the Federal Republic of Germany; German: Bundesrepublik Deutschland) is the largest country in Central Europe. It is bordered to the north by Denmark, to the east by Poland and the Czech Republic, to the south by Austria and Switzerland, and to the west by France, Luxembourg, Belgium and the Netherlands. Germany is a federation of 16 states, roughly corresponding to regions with their own distinct and unique cultures. Germany is one of the most influential European nations culturally, and one of the worlds main economic powers. Known around the world for its precision engineering and high-tech products, it is equally admired by visitors for its old-world charm and "Gemütlichkeit" (coziness). If you have perceptions of Germany as simply homogeneous, it will surprise you with its many historical regions and local diversity.',
    rating: '5',
  },
  {
    name: 'Mexico -  ',
    description: 'Mexico (Spanish: México), is a fascinating country in North America, lying between the United States of America to the north, and Guatemala and Belize to the southeast. Its extensive coastlines of more than 10,000km include the Gulf of Mexico and the Caribbean Sea to the east and the Pacific Ocean to the west. Mexico has pleasant and warm weather, unique food, art and archaeology, pyramids, music, history, museums, haciendas, superb architecture and 21st century cities, weather from snow mountains in the Sierras, to rainy jungles in the Southeast and desert in the Northwest, numerous golf courses, excellent fishing, and world-class destinations like Acapulco, Cancun, Cozumel, Los Cabos, and Mazatlan. Mexico is ranked as the 7th major destination for foreign visitors, according to the World Trade Organization.',
    rating: '5',
  }
]

export default { destination, users }

