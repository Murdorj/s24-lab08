import { CardStatus } from "../../cards/cardstatus.js";
import { CardOrganizer } from "../cardorganizer.js";

export function newRecentMistakesFirstSorter(): CardOrganizer {
  return {
    reorganize: function (cards: CardStatus[]): CardStatus[] {
      return [...cards].sort((a, b) => {
        const aMistakeIndex = lastIncorrectIndex(a.getResults());
        const bMistakeIndex = lastIncorrectIndex(b.getResults());

        // Алдаа гаргасан index нь бага байвал сүүлд гаргасан гэсэн үг (нэг бол хамгийн сүүлд)
        return aMistakeIndex - bMistakeIndex;
      });
    },
  };
}

// Туслах функц: буруу хариулт хамгийн сүүлд гарсан index-г буцаана, эсвэл -1
function lastIncorrectIndex(results: boolean[]): number {
  for (let i = results.length - 1; i >= 0; i--) {
    if (!results[i]) return i;
  }
  return Infinity; // хэрвээ зөвхөн зөв хариулт байвал хамгийн сүүлд байршина
}
