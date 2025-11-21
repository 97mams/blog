import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class BlogController {
  async index({ view }: HttpContext) {
    const posts = await Post.all()
    return view.render('blog/index', { posts })
  }

  async show({ params, view }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    return view.render('blog/update', { post })
  }
}
