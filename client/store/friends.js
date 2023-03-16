import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_FRIENDS = "SET_FRIENDS";
const ADD_FRIEND = "ADD_FRIEND";
const DELETE_FRIEND = "DELETE_FRIEND";

/**
 * ACTION CREATORS
 */
const _setFriends = (friends) => ({
  type: SET_FRIENDS,
  friends,
});

const _addFriend = (friend) => ({
  type: ADD_FRIEND,
  friend,
});

const _deleteFriend = (id) => ({
  type: DELETE_FRIEND,
  friend,
});

/**
 * THUNK CREATORS
 */

export const setFriends = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/friends`);
      const friends = res.data;
      dispatch(_setFriends(friends));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFriend = (newFriend) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/friends/", newFriend);
      const friend = res.data;
      dispatch(_addFriend(friend));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFriend = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/api/friends/${friendDeleteId}`);
      const friend = res.data;
      dispatch(_deleteFriend(friend));
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_FRIENDS:
      return action.friends;
    case ADD_FRIEND:
      return [...state, action.friend];
    case DELETE_FRIEND:
      const relationships = [...state];
      const relationshipsUpdated = relationships.filter(
        (relationship) => relationship.id !== action.friend.id
      );
      return relationshipsUpdated;
    default:
      return state;
  }
}
