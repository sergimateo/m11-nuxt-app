export const state = () => ({
  characters: [],
  series: [],
  mostVisitedCharacters: [],
  visitedCharacters: [],
  mostVisitedSeries: [],
  visitedSeries: [],
  comicsByCharacter: [],
  eventsByCharacter: [],
  comicsBySerie: [],
  charactersBySerie: [],

  navigationItems: [
    { id: '1', title: 'Home', icon: 'mdi-home', to: '/' },
    {
      id: '2',
      title: 'Characters',
      icon: 'mdi-account-group',
      to: '/characters',
    },
    {
      id: '3',
      title: 'Series',
      icon: 'mdi-image-multiple',
      to: '/series',
    },
    { id: '4', title: 'About', icon: 'mdi-information', to: '/about' },
  ],
})

export const getters = {
  charactersGetter: (state) => {
    return state.characters
  },
  seriesGetter: (state) => {
    return state.series
  },
  mostVisitedCharactersGetter: (state) => {
    return state.mostVisitedCharacters
  },
  mostVisitedSeriesGetter: (state) => {
    return state.mostVisitedSeries
  },
  comicsByCharacterGetter: (state) => {
    return state.comicsByCharacter
  },
  eventsByCharacterGetter: (state) => {
    return state.eventsByCharacter
  },
  comicsBySerieGetter: (state) => {
    return state.comicsBySerie
  },
  charactersBySerieGetter: (state) => {
    return state.charactersBySerie
  },
}
