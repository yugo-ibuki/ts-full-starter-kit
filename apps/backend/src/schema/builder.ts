import SchemaBuilder from '@pothos/core';
import { DateTimeResolver } from 'graphql-scalars'

export const builder = new SchemaBuilder<{
  Scalars: {
    DateTime: {
      Output: Date;
      Input: Date;
    };
  };
}>({
  plugins: [],
});

// builder.queryType();
// builder.mutationType();

builder.addScalarType('DateTime', DateTimeResolver, {});