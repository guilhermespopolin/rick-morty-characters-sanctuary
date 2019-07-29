export default function guarateeArray(supostArray) {
  return Array.isArray(supostArray) ? supostArray : [supostArray]
}
