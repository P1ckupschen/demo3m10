/**
 * 根据后端返回的信息属性中的“name”与前端的“meta.name”对应
 * 只需修改属性名即可
 * @param {Array} userRouter  后端返回的路由权限
 * @param {Array} allRouter   前端配置好的路由权限
 * @returns 
 */

export function recursionRouter(userRouter=[],allRouter=[]){
    var resultRoutes = [];
    allRouter.forEach((v,i)=>{
        userRouter.forEach((item,index)=>{
            if(item.name===v.meta.title){
                if(item.children && item.children.length>0){
                    v.children = recursionRouter(item.children,v.children)
                }
                resultRoutes.push(v)
            }
        })
    })
    return resultRoutes
}