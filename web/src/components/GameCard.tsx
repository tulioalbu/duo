interface GameCardProps {
  title: string;
  urlImage: string;
  adsCount: number;
}

export function GameCard(props: GameCardProps) {
  return (
<a href="" className="relative roudend-lg overflow-hidden">
<img src={ props.urlImage } alt="" />
<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
  <strong className="font-bold text-white block">
    { props.title }
  </strong>
  <span className="text-zinc-300 text-sm block">{ props.adsCount } anúncio(s)</span>
</div>
</a>
  )
}