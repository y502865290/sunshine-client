/**
 * 解析后端返回的结果,并且弹出对应的提示信息
 * 状态码及其含义
 * 1000：成功但警告
 * 2000：成功
 * 3000：后端发生了错误
 * 4000：前端发送数据异常
 * 
 * @param {*} proxy 
 * @param {*} res 
 * @returns
 * 返回一个对象包含状态码和后端返回的数据 
 * 状态码及其含义
 * 1：成功
 * 2：未成功
 */
const analysis = function(proxy,res,notAlert){
    if(res.data.code === 2000){
        if(!notAlert){
            proxy.$message.success({content:res.data.message})
        }
        return {code:1,data:res.data.data}
    }else if(res.data.code === 1000){
        proxy.$message.warning({content:res.data.message})
        return {code:1,data:res.data.data}
    }else if(res.data.code === 3000){
        proxy.$message.error({content:res.data.message})
    }else if(res.data.code === 4000){
        proxy.$message.error({content:res.data.message})
    }else if(res.data.code === 4001){
        proxy.$message.success({content:'请登录'})
        proxy.$router.push('/login')
    }else if(res.data.code === 4002){
        proxy.$message.warning({content:'token过期，请重新登录'})
        proxy.$router.push('/login')
    }
    else{
        proxy.$message.error({content:'返回状态码异常'})
    }
    return {code:2,data:res.data.data}
}
export {analysis}