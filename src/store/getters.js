const getters = {
    token: state => state.user.token,
    age:state=>state.user.age,
    user: state => state.user.user,
    role: state => state.user.role,
    company: state => state.user.company,
}
export default getters