import './styles/main.css'
import logoImagem from './assets/logo-esports.svg'
import { GameCard } from './components/GameCard'
import { BannerHome } from './components/BannerHome'
import { useEffect, useState } from 'react'

interface Game {
  id: string;
  title: string;
  urlImage: string;
  _count: {
    ads: number;
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
            urlImage={game.urlImage}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <BannerHome />
    </div>
  )
}

export default App
