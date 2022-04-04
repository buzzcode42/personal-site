import { v4 } from 'uuid'

import Route, { TRoute } from 'constants/routes'

const navigation = [
  { name: 'Home', route: Route.Home, id: v4() },
  { name: 'Hi', route: Route.Hi, id: v4() },
  { name: 'Blog', route: Route.Blog, id: v4() },
  { name: 'Tips', route: Route.Tips, id: v4() },
  { name: 'Lab', route: Route.Lab, id: v4() }
] as Array<{ name: string; route: TRoute; id: string }>

export default navigation
