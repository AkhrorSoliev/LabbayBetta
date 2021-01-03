import {
  GET_KUR,
  GET_ORDERS,
  GET_TAOM,
  SET_LOADING,
  USERS_ERROR,
  ZAK_YET,
  GET_COSTUMERS,
  GET_COSTUM,
  LOG_IN,
  LOG_OUT,
  GET_OSHXONA,
} from '../actions/types.js'

const initialScale = {
  isLogged: false,
  orders: [],
  loading: false,
  error: null,
  counts: {
    zak_tush: 0,
    zak_osh: 0,
    zak_tay: 0,
    zak_kur: 0,
    zak_yet: 0,
    zak_bek: 0,
  },
  kurs: [],
  oshxona: [],
  taom: [],
  costum: [],
  costum1: [],
  currentUser: '',
}

export default (state = initialScale, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_KUR:
      return {
        ...state,
        kurs: action.payload,
      }
      case GET_OSHXONA:
      return {
        ...state,
        oshxona: action.payload,
      }
    case GET_COSTUMERS:
      return {
        ...state,
        costum: action.payload,
      }
    case GET_COSTUM:
      return {
        ...state,
        costum1: action.payload,
      }
    case GET_TAOM:
      return {
        ...state,
        taom: action.payload,
      }
    case ZAK_YET:
      return {
        ...state,
        counts: action.payload,
      }
    case USERS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload,
      }
    case LOG_IN:
      console.log(action.payload)
      return {
        ...state,
        currentUser: action.payload[0].ismi,
        isLogged: true,
      }
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        currentUser: '',
      }
    default:
      return state
  }
}
