import {observable,action} from 'mobx'
// import Axios from 'axios'

//引入axios配置文件
import Axios from '../util/axios'
//引入接口文件api
import Api from "../api/index"

export default class UserStore {
    @observable user=[];//用户
    @observable isLogin=false;//登录状态
    @observable token="";

    @action
    login=()=>{//登录方法
        return new Promise((resolve,reject)=>{
            Axios.post(Api.user.userLogin,{userName:"admin",userPwd:123})
                .then((res)=>{
                    console.log(res);
                    if(res.data.returnCode===200){
                        this.user=res.data.data;//用户和用户菜单信息
                        this.token=res.data.token;//token
                        resolve("登录成功")
                    }else{
                        reject("登录失败")
                    }

                })
        })
    }
}
