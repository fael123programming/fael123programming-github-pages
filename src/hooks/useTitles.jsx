import { useAppState } from "../state/AppStateContext";

export default function useTitles() {
  const { dict } = useAppState();

  return [
    dict.homeComputerScientist,
    dict.homeDataScienceResearcher,
    dict.homeAIEnthusiastic,
    dict.homeFullStackDev,
  ];
}
