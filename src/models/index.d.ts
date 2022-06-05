import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Posting {
  readonly id: string;
  readonly title?: string | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Posting, PostingMetaData>);
  static copyOf(source: Posting, mutator: (draft: MutableModel<Posting, PostingMetaData>) => MutableModel<Posting, PostingMetaData> | void): Posting;
}