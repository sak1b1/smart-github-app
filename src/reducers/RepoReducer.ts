import {
  // REPO_FAIL,
  // REPO_LOADING,
  REPO_SUCCESS,

  SIGNUP,
  LOGIN,
  LOGOUT,

  COLLECTION_CREATE,  

  UPDATE_ALL_USER,
  UPDATE_USER_ALL_REPO,

  RepoDispatchTypes,
  // RepoType,
  CollectionItemType,
  RepoXType,
  RepoListType,
  User
} from "../actions/RepoActionTypes";

interface DefaultStateI {
  loading: boolean,
  allUserList?: [User],
  repo?: [RepoXType],
  user: User,
  collectionList?: [CollectionItemType]
  // repox?: RepoXType,
  // repoList?: RepoListType,
  // notes: RepoListType[]

}

const defaultState: DefaultStateI = {
  loading: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    github: '',
    allRepo: [],
    collectionList: [],
  },
 
  // allUserList: null,
  // user?: null
  //notes: []
  // repo: []

};

interface NoteState {
  notes: RepoListType[]
}



const repoReducer = (state: DefaultStateI = defaultState, action: RepoDispatchTypes): DefaultStateI => {
  switch (action.type) {

    case SIGNUP:
      return { 
        ...state,
        allUserList: action.payload 
      }
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        user: {
          id: '',
          name: '',
          email: '',
          password: '',
          github: '',
          allRepo: [],
          collectionList: [],
        },
      }
    case COLLECTION_CREATE:
      return{
        ...state,
        // collectionList: action.payload
        user: {
          ...state.user,
          collectionList: [...state.user.collectionList, action.payload],
        }
      }

    case UPDATE_USER_ALL_REPO:
      return{
        ...state,
        user:{
          ...state.user,
          allRepo: action.payload
        }
      }  
    case UPDATE_ALL_USER:
      return{
        ...state,
        allUserList: action.payload
      }   
    // case REPO_FAIL:
    //   return {
    //     loading: false,
    //     // notes: []
    //   }
    // case REPO_LOADING:
    //   return {
    //     loading: true,
    //     // notes: []
    //   }
    case REPO_SUCCESS:
      return {
        ...state,
        repo: action.payload
      }
    
    default:
      return state
  }
};


export default repoReducer