import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Book',
    link: '/book/',
  },
  {
    text: 'Middlewares',
    children: [
      {
        text: 'Common Features',
        children: [
          '/zh-hans/book/middlewares/affix.md',
          '/zh-hans/book/middlewares/compression.md',
          '/zh-hans/book/middlewares/flash.md',
          '/zh-hans/book/middlewares/force-https.md',
          '/zh-hans/book/middlewares/logging.md',
          '/zh-hans/book/middlewares/proxy.md',
          '/zh-hans/book/middlewares/serve-static.md',
          '/zh-hans/book/middlewares/session.md',
          '/zh-hans/book/middlewares/sse.md',
          '/zh-hans/book/middlewares/timeout.md',
          '/zh-hans/book/middlewares/trailing-slash.md',
          '/zh-hans/book/middlewares/ws.md',
        ],
      },
      {
        text: 'Authentication',
        children: [
          '/zh-hans/book/middlewares/basic-auth.md',
          '/zh-hans/book/middlewares/jwt-auth.md',
        ],
      },
      {
        text: 'Security',
        children: [
          '/zh-hans/book/middlewares/cors.md',
          '/zh-hans/book/middlewares/csrf.md',
          '/zh-hans/book/middlewares/rate-limiter.md',
        ],
      },
      {
        text: 'Caching',
        children: [
          '/zh-hans/book/middlewares/cache.md',
          '/zh-hans/book/middlewares/caching-headers.md',
        ],
      },
    ],
  },
  {
    text: 'Donate',
    link: '/donate.md',
  },
  {
    text: `v0.37.x`,
    children: [
      {
        text: 'v0.37.x',
        link: 'https://salvo.rs',
      },
      {
        text: 'v0.38.x',
        link: 'https://next.salvo.rs',
      },
    ],
  },
]
