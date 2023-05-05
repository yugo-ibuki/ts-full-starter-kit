import { builder } from '@/schema/builder'

builder.queryType({
  fields: (t) => ({
    hey: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name}, World'}`,
      // resolve: (parent) => `hello, World'}`,
    }),
  }),
});