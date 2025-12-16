import axios from "axios"

export const saveOrUpdateUser = async userData => {
    const { data } = await axios.post(
        `https://style-decor-server-iota.vercel.app/user`,
        userData
    )
    return data
}