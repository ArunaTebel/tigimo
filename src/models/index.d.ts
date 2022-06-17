import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum VisibilityType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}



type PostingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Posting {
  readonly id: string;
  readonly title?: string | null;
  readonly url?: string | null;
  readonly note?: string | null;
  readonly update_at?: number | null;
  readonly create_at?: number | null;
  readonly boardID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Posting, PostingMetaData>);
  static copyOf(source: Posting, mutator: (draft: MutableModel<Posting, PostingMetaData>) => MutableModel<Posting, PostingMetaData> | void): Posting;
}

export declare class Board {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly visibility?: VisibilityType | keyof typeof VisibilityType | null;
  readonly update_at?: number | null;
  readonly create_at?: number | null;
  readonly Postings?: (Posting | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Board, BoardMetaData>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board, BoardMetaData>) => MutableModel<Board, BoardMetaData> | void): Board;
}