const initState = {
    projects: [
        {id: '1', title: 'project 1', content: 'project 1 content'},
        {id: '2', title: 'project 2', content: 'project 2 content'},
        {id: '3', title: 'project 3', content: 'project 3 content'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer