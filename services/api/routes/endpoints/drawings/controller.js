import { getDrawings } from '../../commands/drawings'
import { wrapAsyncFunc } from '../../../common/utils/wrap-async-route'

export default class AuthController {
  constructor(router) {
    router.get('/', wrapAsyncFunc(this.getAllDrawings))
  }

  async getAllDrawings(req, res) {
    const results = await getDrawings()
    res.send(results)
  }
}
