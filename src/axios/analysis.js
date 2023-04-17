const analysis = function(proxy,res){
    if(res.data.code === 2000){
        proxy.$message.success({content:res.data.message})
        return 
    }else if(res.data.code === 1000){
        proxy.$message.warning({content:res.data.message})
    }else if(res.data.code === 3000){
        proxy.$message.error({content:res.data.message})
    }else if(res.data.code === 4000){
        proxy.$message.error({content:res.data.message})
    }
    else{
        proxy.$message.error({content:'返回状态码异常'})
    }
    return 
}
export {analysis}