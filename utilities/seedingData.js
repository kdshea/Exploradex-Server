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
    description: 'I want to visit this place',
  }

]

export default { countries, users }
