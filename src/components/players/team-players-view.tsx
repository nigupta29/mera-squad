import { playerTypes } from "@/lib/constants"
import { PlayerStatsType } from "@/types"
import PlayerCard from "./player-card"

export default function PlayersView({
  playerStats = []
}: {
  playerStats: PlayerStatsType[]
}) {
  if (!playerStats.length) return null
  return (
    <div className="space-y-8">
      {playerTypes.map((item) => (
        <PlayersSection key={item} type={item} playerStats={playerStats} />
      ))}
    </div>
  )
}

function PlayersSection({
  playerStats = [],
  type
}: {
  playerStats: PlayerStatsType[]
  type: string
}) {
  const filteredPlayers = playerStats.filter((item) => item.type === type)

  return (
    <div className="space-y-2">
      <h3 className="sticky left-0 top-0 z-10 bg-background px-5 py-2 text-3xl font-semibold md:relative md:text-center md:text-4xl capitalize">
        {type}
      </h3>
      {filteredPlayers.length === 0 ? (
        <p className="md:text-center px-5">No players from this category.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 px-5 md:grid-cols-3 lg:grid-cols-5 ">
          {filteredPlayers.map((item) => (
            <PlayerCard key={item.id} player={item} />
          ))}
        </div>
      )}
    </div>
  )
}
