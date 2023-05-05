import { builder } from '@/schema/builder'

type User = {
  id: string,
  name: string,
  email: string,
}

export const user = builder.objectRef<User>('User')
user.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.string({
      resolve: (parent) => parent.name,
    }),
    email: t.string({
      resolve: (parent) => parent.email,
    }),
  }),
})
