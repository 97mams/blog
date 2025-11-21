/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const BlogController = () => import('#controllers/blog_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [BlogController, 'index']).as('home_page')
