import {
  GET_KUR,
  GET_ORDERS,
  GET_TAOM,
  ZAK_YET,
  SET_LOADING,
  GET_COSTUMERS,
  GET_COSTUM,
  LOG_IN,
  LOG_OUT,
  GET_OSHXONA,
} from './types.js'
import BaseUrl from '../BaseUrl'
import { toast } from 'react-toastify'
export const getOrders = () => async (dispatch) => {
  try {
    const res = await fetch(`${BaseUrl}/get_zakazlar.php`)
    const data = await res.json()

    dispatch({
      type: GET_ORDERS,
      payload: data,
    })

    const zak_tush = data.filter((d) => d.status == 0).length
    const zak_kur = data.filter((d) => d.status == 3).length
    const zak_osh = data.filter((d) => d.status == 1).length
    const zak_tay = data.filter((d) => d.status == 2).length
    const zak_yet = data.filter((d) => d.status == 4).length
    const zak_bek = data.filter((d) => d.status == 5).length

    const counts = {
      zak_tush,
      zak_osh,
      zak_kur,
      zak_yet,
      zak_bek,
      zak_tay,
    }
    dispatch({
      type: ZAK_YET,
      payload: counts,
    })
  } catch (err) {
    console.log(err)
  }
}
export const getKur = () => async (dispatch) => {
  try {
    const res = await fetch(`${BaseUrl}/get_kurs.php`)
    const data = await res.json()

    dispatch({
      type: GET_KUR,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}
export const getTaom = (id) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  })

  try {
    const res = await fetch(`${BaseUrl}/get_taom.php?id=${id}`)
    const data = await res.json()

    dispatch({
      type: GET_TAOM,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
  dispatch({
    type: SET_LOADING,
    payload: false,
  })
}

export const getCostum = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  })

  try {
    const res = await fetch(`${BaseUrl}/get_costum.php`)
    const data = await res.json()

    dispatch({
      type: GET_COSTUMERS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
  dispatch({
    type: SET_LOADING,
    payload: false,
  })
}

export const getCostum1 = (id) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  })

  try {
    const res = await fetch(`${BaseUrl}/get_costum1.php?id=${id}`)
    const data = await res.json()

    dispatch({
      type: GET_COSTUM,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
  dispatch({
    type: SET_LOADING,
    payload: false,
  })
}
export const editCostum = (data) => async (dispatch) => {
  toast('kuting...')
  dispatch({
    type: SET_LOADING,
    payload: true,
  })

  var formData = new FormData()
  formData.append('id', data.id)
  formData.append('ismi', data.ismi)
  formData.append('fam', data.fam)
  formData.append('tel_nomer', data.phone)
  formData.append('state', data.status ? '0' : '1')
  try {
    const res = await fetch(`${BaseUrl}/edit_costum.php`, {
      method: 'POST',
      body: formData,
    })
    const d = await res.json()
    toast.dismiss()
    toast.success('saqlandi')
  } catch (err) {
    console.log(err)
  }
  dispatch({
    type: SET_LOADING,
    payload: false,
  })
}

export const loginUser = (data) => async (dispatch) => {
  toast('kuting...')
  var formData = new FormData()
  formData.append('login', data.login)
  formData.append('parol', data.parol)
  try {
    const res = await fetch(`${BaseUrl}/get_login.php`, {
      method: 'POST',
      body: formData,
    })
    const d = await res.json()
    localStorage.setItem('Ismi', d[0].ismi)
    dispatch({
      type: LOG_IN,
      payload: d,
    })

    toast.dismiss()
  } catch (error) {}
}

export const logOut = () => {
  return {
    type: LOG_OUT,
  }
}

export const oshxona = () => async (dispatch) => {
  try {
    const res = await fetch(`${BaseUrl}/get_element.php`)
    const data = await res.json()

    dispatch({
      type: GET_OSHXONA,
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}
