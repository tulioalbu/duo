import express from 'express'
import { PrismaClient } from '@prisma/client'
import { convertHoursToMinutes } from './utils/convert-hours-to-minutes'

const app = express()
app.use(express.json())
const prisma = new PrismaClient({
  log: ['query']
})

app.get('/games', async (_req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: { ads: true }
      }
    }
  })
  return res.json(games)
})

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const body: any = req.body;

  
  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      weekDays: body.weekDays.join(','),
      useVoiceChannel: body.useVoiceChannel,
      yearsPlaying: body.yearsPlaying,
      hourStart: convertHoursToMinutes(body.hourStart),
      hourEnd: convertHoursToMinutes(body.hourEnd),
      discord: body.discord,

    }


})

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return res.json([ads])
})

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  })
  return res.json([{
    discord: ad.discord,
  }])
})

app.listen(3000)

})
