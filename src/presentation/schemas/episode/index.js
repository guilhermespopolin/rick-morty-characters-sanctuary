import { schema } from 'normalizr'

import buildByPicking from 'helpers/buildByPicking'

function makeEpisodeSchemaProcessStrategy() {
  const interestedInFields = [
    { key: 'id' },
    { key: 'name' },
    { key: 'episode' },
    { key: 'airDate', path: 'air_date' },
  ]

  return value => buildByPicking(value, interestedInFields)
}

const episodeSchema = new schema.Entity(
  'episodes',
  {},
  {
    processStrategy: makeEpisodeSchemaProcessStrategy(),
  },
)

export default episodeSchema
