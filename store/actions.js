import MarvelPlaceholderService from '~/plugins/MarvelPlaceholderService.js'

export default {
  async loadCharacters({ commit }) {
    const eventNum = 318
    const response = await MarvelPlaceholderService.GetCharactersPlaceholder(
      eventNum
    )
    commit('SET_Characters', response.data.data.results)
  },
  async loadSeries({ commit }) {
    const eventNum = 318
    const response = await MarvelPlaceholderService.GetSeriesPlaceholder(
      eventNum
    )

    commit('SET_Series', response.data.data.results)
  },
  async loadComicsByCharacter({ commit }, e) {
    commit('CLEAR_ByCharacterSubsection')
    const response = await MarvelPlaceholderService.GetComicsByCharacterPlaceholder(
      e
    )

    // this.$nuxt.$loading.finish()
    commit('SET_ComicsByCharacter', response.data.data.results)
  },

  async loadEventsByCharacter({ commit }, e) {
    commit('CLEAR_ByCharacterSubsection')
    const response = await MarvelPlaceholderService.GetEventsByCharacterPlaceholder(
      e
    )

    commit('SET_EventsByCharacter', response.data.data.results)
  },
  async loadComicsBySerie({ commit }, e) {
    commit('CLEAR_BySerieSubsection')
    const response = await MarvelPlaceholderService.GetComicsBySeriePlaceholder(
      e
    )

    commit('SET_ComicsBySerie', response.data.data.results)
  },
  async loadCharactersBySerie({ commit }, e) {
    commit('CLEAR_BySerieSubsection')
    const response = await MarvelPlaceholderService.GetCharactersBySeriePlaceholder(
      e
    )

    commit('SET_CharactersBySerie', response.data.data.results)
  },

  loadMostVisitedCharacters(state) {
    const sortedCharacters = state.mostVisitedCharacters.sort(
      (characterA, characterB) =>
        characterB.views - characterA.views ||
        characterA.name.localeCompare(characterB.name)
    )
    state.mostVisitedCharacters = sortedCharacters.slice(0, 5)
  },
  characterViewed({ commit }, character) {
    const viewed = this.state.visitedCharacters.findIndex(
      (item) => item.id === character.id
    )

    if (viewed === -1) {
      character.views = 1
      commit('ADD_Character', character)
    } else {
      const characterViewed = this.state.visitedCharacters.find(
        (item) => item.id === character.id
      )
      characterViewed.views++
    }
    commit('SORT_MostVisitedCharacters')
  },
  serieViewed({ commit }, serie) {
    const viewed = this.state.visitedSeries.findIndex(
      (item) => item.id === serie.id
    )

    if (viewed === -1) {
      serie.views = 1
      commit('ADD_Serie', serie)
    } else {
      const serieViewed = this.state.visitedSeries.find(
        (item) => item.id === serie.id
      )
      serieViewed.views++
    }
    commit('SORT_MostVisitedSeries')
  },
}
