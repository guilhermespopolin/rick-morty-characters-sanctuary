/**
 *  Returns object value given its path.
 *
 * @param {object} srcObject - Source object
 * @param {string} path - value path
 * @param {any} defaultValue - optional. Default value to be returned
 * in case value `path` doesnt exist on provided `srcObject`.
 */
function getObjectValueByItsPath(srcObject, path, defaultValue) {
  const dottedSplittedPath = path.split('.')
  const dottedSplittedPathLength = dottedSplittedPath.length
  const key = dottedSplittedPathLength === 1 ? path : dottedSplittedPath[0]

  if (!Object.prototype.hasOwnProperty.call(srcObject, key)) {
    return defaultValue
  }

  if (dottedSplittedPathLength === 1) {
    return srcObject[key]
  }

  const nextPath = dottedSplittedPath.slice(1).join('.')

  return getObjectValueByItsPath(srcObject[key], nextPath, defaultValue)
}

export default getObjectValueByItsPath
