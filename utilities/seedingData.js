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

const countries = [
  {
    name: 'Ireland Dublin',
    description: 'Some town',
  },
  {
    name: 'Japan',
    description: 'Japan is one of the most popular travel destinations in the world. It is a unique blend of traditional and modern, with many temples and buildings from the past co-existing with modern achievements in architecture and technology. Visitors can be immersed in Japanese history and culture one day and get a glimpse of the future through technological developments the next',
    rating: '5',
  }
]

export default { countries, users }
