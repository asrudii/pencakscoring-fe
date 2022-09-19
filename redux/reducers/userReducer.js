const init_state = {
  uid: '',
  displayName: '',
  email: '',
  username: '',
  phoneNumber: '',
  photoURL: '',
  errMsg: '',
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, ...action.payload };
    case 'USER_LOGOUT':
      return init_state;
    case 'AUTH_ERROR':
      return { ...state, errMsg: action.payload };
    default:
      return state;
  }
};

export default reducer;
