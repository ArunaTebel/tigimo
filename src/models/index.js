// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Posting } = initSchema(schema);

export {
  Posting
};