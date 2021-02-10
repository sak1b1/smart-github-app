export const REPO_LOADING = "REPO_LOADING";
export const REPO_FAIL = "REPO_FAIL";
export const REPO_SUCCESS = "REPO_SUCCESS";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

export const COLLECTION_CREATE = "COLLECTION_CREATE"
export const COLLECTION_READ = "COLLECTION_READ"
export const COLLECTION_UPDATE = "COLLECTION_LOADING"
export const COLLECTION_DELETE = "COLLECTION_DELETE"

export const UPDATE_ALL_USER = "UPDATE_ALL_USER"
export const UPDATE_USER_ALL_REPO = "UPDATE_USER_ALL_REPO"

// export type RepoType = {
//   // repos: RepoXType[],
//   // sprites: RepoSprites,
//   // stats: RepoStat[]

// }

// export type RepoAbility = {
//   ability: {
//     name: string
//     url: string
//   }
// }

// export type RepoSprites = {
//   front_default: string
// }

// export type RepoStat = {
//   base_stat: number,
//   stat: {
//     name: string
//   }
// }

export type RepoListType = {
  repoList: RepoXType[]
}

export type RepoXType = {

  id: string,
  name: string,
  url: string,
  used: boolean,

}

export type User = {
  id: string,
  name: string,
  email: string,
  password: string,
  github: string,
  allRepo: RepoXType[],
  collectionList: CollectionItemType[],
}

export type CollectionItemType = {
  id: string,
  name: string,
  type: string,
  repos: RepoXType[],
  dateCreated: string
}

export type CollectionType = {
  list: CollectionItemType[]
}


export interface RepoLoading {
  type: typeof REPO_LOADING
}

export interface RepoFail {
  type: typeof REPO_FAIL
}

export interface RepoSuccess {
  type: typeof REPO_SUCCESS,
  // payload: [{
  //   id: string,
  //   name: string
  // }]
  payload: [RepoXType]
}

export interface Login {
  type: typeof LOGIN
  payload: User
}

export interface SignUp {
  type: typeof SIGNUP,
  payload: [User]
}

export interface Logout {
  type: typeof LOGOUT,
  // payload: User
}

export interface CollectionCreate {
  type: typeof COLLECTION_CREATE,
  payload: CollectionItemType
}

export interface CollectionRead {
  type: typeof COLLECTION_READ
  // payload: CollectionItemType
}

export interface UpdateUserAllRepo{
  type: typeof UPDATE_USER_ALL_REPO,
  payload: [RepoXType]
}

export interface UpdateAllUser{
  type: typeof UPDATE_ALL_USER,
  payload: [User]
}

export type RepoDispatchTypes = RepoLoading
  | RepoFail | RepoSuccess | SignUp | Login | Logout | CollectionCreate
  | UpdateAllUser | UpdateUserAllRepo