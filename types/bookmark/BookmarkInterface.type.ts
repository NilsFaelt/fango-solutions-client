import { ContentInterface } from "../content";

export interface BookmarkInterface {
  createdAt: string;
  id: string;
  url: string;
  alias: string | null;
  userEmail: string;
  children?: ChildUrls[];
  todos?: string[];
  content: ContentInterface[];
}

export interface ChildUrls {
  bookmarkId: string;
  createdAt: string;
  deletedAt: string | null;
  id: string;
  updatedAt: string;
  url: string;
}
