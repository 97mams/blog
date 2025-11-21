import type { HttpContext } from '@adonisjs/core/http'

export default class BlogController {
  async index({ view }: HttpContext) {
    return view.render('blog/index')
  }
}
