export default function list(list = {
    loading: true,
    data:[]
}, action) {
    switch(action.type){
        case "LIST_LOAD":
            return {
                loading: true,
                data: []
            }
        case "LIST_LOADOVER":
            return {
                loading: false,
                data: action.data
            }
        default:
            break;
    }

    return list;
}