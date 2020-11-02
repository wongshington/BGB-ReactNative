import {FETCH_ALL_NOTES} from "../action-types/note_action_types"

//action creators
const receiveNotes = (payload) => {
  debugger
  return{
    type: FETCH_ALL_NOTES,
    notes: payload.notes
  }
}

//thunk action creator
export const fetchAllNotes = () => {
  return async (dispatch) => {
    try{
      const response = await fetch("http://localhost:3000/api/notes").then((response) => {
        console.log(response)
      })
    } 
    catch (error) {
      // debugger
    }
  }
}