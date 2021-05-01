export default {
  CLEAR_ByCharacterSubsection(state) {
    state.comicsByCharacter = []
    state.seriesByCharacter = []
  },
  CLEAR_BySerieSubsection(state) {
    state.comicsBySerie = []
    state.charactersBySerie = []
  },
  SET_Characters(state, items) {
    state.characters = items
  },
  SET_Series(state, items) {
    state.series = items
  },
  SET_ComicsByCharacter(state, items) {
    state.comicsByCharacter = items
  },
  SET_EventsByCharacter(state, items) {
    state.eventsByCharacter = items
  },
  SET_ComicsBySerie(state, items) {
    state.comicsBySerie = items
  },
  SET_CharactersBySerie(state, items) {
    state.charactersBySerie = items
  },
  ADD_Character(state, character) {
    state.visitedCharacters.push(character)
  },
  ADD_Serie(state, serie) {
    state.visitedSeries.push(serie)
  },

  SORT_MostVisitedCharacters(state) {
    const sortedCharacters = state.visitedCharacters.sort(
      (characterA, characterB) =>
        characterB.views - characterA.views ||
        characterA.name.localeCompare(characterB.name)
    )
    state.mostVisitedCharacters = sortedCharacters.slice(0, 5)
  },
  SORT_MostVisitedSeries(state) {
    const sortedSeries = state.visitedSeries.sort(
      (serieA, serieB) =>
        serieB.views - serieA.views || serieA.title.localeCompare(serieB.title)
    )
    state.mostVisitedSeries = sortedSeries.slice(0, 5)
  },
}
