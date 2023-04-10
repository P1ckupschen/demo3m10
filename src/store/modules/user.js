
const user = {

    state: {
        user: null,
        token: null,
        age:3,
        role: null,
        company: null
      },
      mutations: {
        setToken (state, token) {
          state.token = token
        },
        setUser (state, user) {
          state.user = user
        },
        setRole (state, role) {
          state.role = role
        },
        setCompany (state, company) {
          state.company = company || {
            company_id: '',
            company_name: ''
          }
        }
      },
      actions: {
        logout (context) {
          return new Promise((resolve) => {
            if (!context.state.token) resolve()
            try {
              context.commit('setToken', null)
              context.commit('setUser', null)
              context.commit('setRole', null)
              context.dispatch('setMenu', null)
              resolve()
            } catch (_) {
              resolve()
            }
          })
        },
        // loginByUsername (context, userInfo) {
        //   const username = userInfo.username.trim()
        //   return new Promise(async (resolve, reject) => {
        //     try {
        //       const postData = {
        //         'login': {
        //           'user_name': username,
        //           'password': userInfo.password
        //         }
        //       }
        //     } catch (error) {
        //       reject(error)
        //     }
        //   })
        // },
        // getUserInfo (context) {
         
        // }
      }
}
export default user