import { CONSTANS } from './index'

/**
 * Akcja pozwalająca na dodanie nowej karty
 * @param {String} cityName - Nowa nazwa miasta
 * @param {String} text - opcjonalnie koordynaty
 */
export const findCity = (cityName, coords) => {
   return {
      type: CONSTANS.FIND_CITY,
      payload: { cityName, coords }
   }
}