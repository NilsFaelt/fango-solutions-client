export interface BookmarkInterface {
  createdAt: string;
  id: string;
  url: string;
  userEmail: string;
  children?: ChildUrls[];
  todos?: string[];
}

export interface ChildUrls {
  bookmarkId: string;
  createdAt: string;
  deletedAt: string | null;
  id: string;
  updatedAt: string;
  url: string;
}
