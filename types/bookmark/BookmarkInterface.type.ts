export interface BookmarkInterface {
  createdAt: string;
  id: string;
  url: string;
  userEmail: string;
  childUlrs?: string[];
  todos?: string[];
}