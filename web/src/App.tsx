import './styles/main.css'
import logoImagem from './assets/logo-esports.svg'
import { GameCard } from './components/GameCard'
import { BannerHome } from './components/BannerHome'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImagem} alt="Logo Esports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-gradient bg-clip-text">duo</span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => (
          <GameCard
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <BannerHome />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black">
            <Dialog.Title className='text-3xl' font-black>Publicar Anúncio</Dialog.Title>
            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor="game">Qual o game?</label>
                  <input id="game" placeholder='Selecione o game que deseja jogar' />
                </div>

                <div> 
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <input id="name" placeholder='Como te chamam dentro do game?' />
                </div>

                <div>
                  <div>
                    <label>htmlFor="yearPlaying">Joga há quantos anos?</label>
                    <input id="yearPlaying" type='number' placeholder="Tudo bem ser ZERO" />
                  </div>
                  <div>
                    <label htmlFor="Qual seu Discord?"></label>
                    <input id="discord" type='text' placeholder='Usuario#0000' />
                    </div>

                  <div>
                    <label htmlFor='weekDays'>Quando costuma jogar?</label>
                  </div>

                  <div>
                    <label htmlFor='hourStart'>Qual o horário do dia?</label>
                  </div>

                  <div>
                    <input id='hourStart' type='time' placeholder='De' />
                    <input id='hourEnd' type='time' placeholder='Até'/>
                  </div>

                  <div>
                    <
              </form>

            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
