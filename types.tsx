/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  landingPage: undefined;
  userPage: undefined;
  topTab: undefined;
  NotFound: undefined;
};

export type TopTabParamList = {
  Followers: undefined;
  Following: undefined;
};

export interface UsersArray {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface Props {
  searchedFun: (searchedFor: string) => void;
  value: string;
}

export interface Userprops {
  value: string;
  usersArray: UsersArray[];
}

export interface followersListProps {
  usersArray: UsersArray[];
  clicked: string;
}

export interface specificUserType {
  avatar_url: string;
  bio: string | undefined;
  blog: string | undefined;
  company: string | undefined;
  created_at: string;
  email: string | undefined;
  events_url: string;
  followers: number;
  following: number;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string | undefined;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string | undefined;
  node_id: string;
  url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  twitter_username: string | undefined;
  type: string;
  updated_at: string | undefined;
  site_admin: boolean;
}
export interface info {
  login: string;
  followersUrl: string;
  followingUrl: string;
}

export interface FollowersProps {
  clicked: string;
  params: info;
}
