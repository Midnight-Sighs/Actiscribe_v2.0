import Request from './Api';

const aBase = "/activities/"

const get = async (props)=>{

    return(
        Request({
            url: aBase,
            method: "GET"
        })
    )
}

const create = async(props)=>{
    return(
        Request({
            url: aBase,
            method: "POST",
            data: props.data
        })
    )
}

const archive=async(props)=>{

    return(
        Request({
            url: aBase + `${props.activityId}/`,
            method: "PATCH",
            data: props.data
        })
    )
}

const edit=async(props)=>{

    return(
        Request({
            url: aBase + `${props.activityId}/`,
            method: "PUT",
            data: props.data
        })
    )
}

const deleteActivity=async(props)=>{

    return(
        Request({
            url: aBase + `${props.activityId}/`,
            method: "DELETE",

        })
    )
}

const byDOW = async(props)=>{

    return(
        Request({
            url: aBase + `${props.dow}/`,
            method: 'GET'
        })
    )
}

const getArchived = async(props)=>{

    return(
        Request ({
            url: aBase + "archived/",
            method: "GET"
        })
    )
}

const Activities = {
    get, create, archive, edit, deleteActivity, byDOW, getArchived
}
export default Activities