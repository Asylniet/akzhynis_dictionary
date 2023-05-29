const themeReducer = (state, action) => {
    if(action.mode === 'light' || action.mode === 'dark') return { mode: action.mode };
    return state;
};

export default themeReducer;