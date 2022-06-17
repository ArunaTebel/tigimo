// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const VisibilityType = {
  "PUBLIC": "PUBLIC",
  "PRIVATE": "PRIVATE"
};

const { Posting, Board } = initSchema(schema);

export {
  Posting,
  Board,
  VisibilityType
};