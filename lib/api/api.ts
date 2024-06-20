import { APIRequestContext } from "@playwright/test";
import { postApi } from "./postApi"
import { userApi } from "./userapi";

const api = (request : APIRequestContext)=>{

    postApi: new postApi(request);
    userApi: new userApi(request);
}