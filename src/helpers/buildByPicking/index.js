import getObjectValueByItsPath from 'helpers/getObjectValueByItsPath'

/**
 * Given a reference object, built a new one by taking some of its properties.
 *
 * @param {object} srcObject - Object that should used as reference.
 * @param {{ key: string, path: string }[]} pickMapList - List of objects that describes
 * which properties should be taken from `srcObject` (path) and under which property of on
 * construction object its value should be placed on (key).
 *
 * If provided, `path` should be on dotted format (e.g addres.city). In case it's not
 * provided, `key` will be used as location.
 *
 * Examples:
 *
 * const person = { name: 'John Doe', address: { city: 'Goron', zicode: '11111' } }
 *
 * buildByPicking(person, [{ key: 'name' }]) --> { name: 'John Doe' }
 * buildByPicking(person, [{ key: 'fullname', path: 'name' }]) --> { fullname: 'John Doe' }
 * buildByPikcing(person, [{ key: 'name' }, { key: 'city', path: 'address.city' }])
 *  --> { name: 'John Doe', city: 'Goron' }
 */
const buildByPicking = (srcObject, pickMapList) => pickMapList.reduce((builtObject, pickMap) => ({
  ...builtObject,
  [pickMap.key]: getObjectValueByItsPath(srcObject, pickMap.path || pickMap.key),
}), {})

export default buildByPicking
