import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import PlatformIcons from "./PlatformIcons";
import { modifyImageUrl } from "../utils/utils";

const GameCard = ({ game }) => {
  return (
    <div className="flex flex-col bg-gray-700 shadow-lg transition duration-300 hover:scale-[1.02]">
      <Link to={`/games/${game.id}`} state={{ game: game }}>
        <img
          src={modifyImageUrl(game.background_image, "medium")}
          alt={game.name + " thumbnail"}
          className="aspect-[1.7/1] object-cover bg-center w-full overflow-hidden"
        />
        <div className="flex flex-col gap-2 p-3">
          <h3 className="text-white font-bold text-xl">{game.name}</h3>
          <IconContext.Provider value={{ color: "white", size: "0.875rem" }}>
            <PlatformIcons platforms={game.parent_platforms} />
          </IconContext.Provider>
          <p className="text-sm text-gray-300">
            {game.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default GameCard;
