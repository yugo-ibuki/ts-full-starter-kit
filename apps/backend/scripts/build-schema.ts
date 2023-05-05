import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { schema } from '@/schema';
import { lexicographicSortSchema } from 'graphql/utilities';

const schemaAsString = printSchema(lexicographicSortSchema(schema))
writeFileSync('./schema.graphql', schemaAsString)