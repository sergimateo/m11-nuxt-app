import apiData from './data/data.js'
import ApiMarvelPlaceholder from './ApiMarvelPlaceholder.js'

export default {
  GetCharactersPlaceholder(eventNum) {
    return ApiMarvelPlaceholder().get(
      '/v1/public/events/' +
        eventNum +
        '/characters?limit=50&ts=' +
        apiData.ts +
        '&apikey=' +
        apiData.apiKey +
        '&hash=689b5cdf8aa6bb06cbfc760745709b9e'
    )
  },
  GetSeriesPlaceholder(eventNum) {
    return ApiMarvelPlaceholder().get(
      '/v1/public/events/' +
        eventNum +
        '/series?limit=100&ts=' +
        apiData.ts +
        '&apikey=' +
        apiData.apiKey +
        '&hash=689b5cdf8aa6bb06cbfc760745709b9e'
    )
  },

  GetComicsByCharacterPlaceholder(character) {
    return ApiMarvelPlaceholder().get(
      '/v1/public/characters/' +
        character +
        '/comics?limit=50&ts=' +
        apiData.ts +
        '&apikey=' +
        apiData.apiKey +
        '&hash=689b5cdf8aa6bb06cbfc760745709b9e'
    )
  },
  GetEventsByCharacterPlaceholder(character) {
    return ApiMarvelPlaceholder().get(
      '/v1/public/characters/' +
        character +
        '/events?limit=50&ts=' +
        apiData.ts +
        '&apikey=' +
        apiData.apiKey +
        '&hash=689b5cdf8aa6bb06cbfc760745709b9e'
    )
  },
  GetComicsBySeriePlaceholder(serie) {
    return ApiMarvelPlaceholder().get(
      '/v1/public/series/' +
        serie +
        '/comics?limit=60&ts=' +
        apiData.ts +
        '&apikey=' +
        apiData.apiKey +
        '&hash=689b5cdf8aa6bb06cbfc760745709b9e'
    )
  },
  GetCharactersBySeriePlaceholder(serie) {
    return ApiMarvelPlaceholder().get(
      '/v1/public/series/' +
        serie +
        '/characters?limit=60&ts=' +
        apiData.ts +
        '&apikey=' +
        apiData.apiKey +
        '&hash=689b5cdf8aa6bb06cbfc760745709b9e'
    )
  },
  // GetComicsPlaceholder() {
  //   return ApiMarvelPlaceholder().get(
  //     '/v1/public/events/314/comics?limit=100&ts=1&apikey=5048b649ff1da6422ad9039248e892fe&hash=689b5cdf8aa6bb06cbfc760745709b9e'
  //   )
  // },
  // GetStoriesPlaceholder() {
  //   return ApiMarvelPlaceholder().get(
  //     '/v1/public/events/314/stories?limit=100&ts=1&apikey=5048b649ff1da6422ad9039248e892fe&hash=689b5cdf8aa6bb06cbfc760745709b9e'
  //   )
  // },
  // GetPicturesPlaceholder() {
  //   return ApiPlaceholder().get("/photos");
  // },
  // GetUsersPlaceholder() {
  //   return ApiPlaceholder().get("/users");
  // },
}
