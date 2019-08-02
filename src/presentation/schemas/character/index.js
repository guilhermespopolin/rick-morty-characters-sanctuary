import { schema } from 'normalizr'

import buildByPicking from 'helpers/buildByPicking'
import episodesSchema from 'presentation/schemas/episodes'

function makeCharacterSchemaProcessStrategy() {
  const interestedInFields = [
    { key: 'id' },
    { key: 'name' },
    { key: 'image' },
    { key: 'species' },
    { key: 'status' },
    { key: 'origin', path: 'origin.name' },
    { key: 'location', path: 'location.name' },
  ]

  return value => buildByPicking(value, interestedInFields)
}

const characterSchema = new schema.Entity(
  'characters',
  { episode: episodesSchema },
  { processStrategy: makeCharacterSchemaProcessStrategy() },
)

export default characterSchema
