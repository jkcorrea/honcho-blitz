import Chance from 'chance'

import { Prisma } from '.prisma/client'

import db from './index'

const chance = new Chance()

const NUM_USERS = 20

// This seed function is executed when you run `blitz db seed`.
const seed = async () => {
  const allData = chance.n<Prisma.UserUncheckedCreateInput>(
    () => ({
      email: chance.email(),
      name: chance.name({ full: true }),
    }),
    NUM_USERS,
  )

  // NOTE: sqlite doesn't support createMany, so we just need to map it into a transaction
  const txs = allData.map((data) => db.user.create({ data }))
  await db.$transaction(txs)
  console.log('Done!')
}

export default seed
