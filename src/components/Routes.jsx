import React from 'react'

import Loadable from 'react-loadable'
import { Switch, Route } from 'react-router-dom'
import PageLoader from 'components/ui/PageLoader'

const LoadableHome = Loadable({
  loader: () => import('components/pages/Home'),
  loading: PageLoader,
})

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LoadableHome} />
    </Switch>
  )
}

export default Routes
