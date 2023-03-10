import axios from "axios";

let endPoints = [
    `${process.env.REACT_APP_URL}/auth/login`,
    `${process.env.REACT_APP_URL}/auth/signup`,
    `${process.env.REACT_APP_URL}/auth/forgot-password`,
    `${process.env.REACT_APP_URL}/auth/reset-password/`,
    `${process.env.REACT_APP_URL}/auth/verify-account`
]

export const axiosInterceptorHandle = (navigate) => {
    axios.interceptors.response.use(
        (res) => {
            if (res.config.url !== `${process.env.REACT_APP_URL}/auth/logout` && res.data['refresh'] !== undefined) {
                let headerAuth = res.data['access'];
                let headerRefresh = res.data['refresh'];

                localStorage.setItem(process.env.REACT_APP_ACCESS_KEYWORD, headerAuth);
                localStorage.setItem(process.env.REACT_APP_REFRESH_KEYWORD, headerRefresh);
                localStorage.setItem("roleName", res.data.userId.role.role )
                
            }
            return res;
        },
        (err) => {
            if (err.response.status === 401 || err.response.status === 400) {
                navigate("/login");
                localStorage.removeItem(process.env.REACT_APP_ACCESS_KEYWORD);
                localStorage.removeItem(process.env.REACT_APP_REFRESH_KEYWORD);
                localStorage.removeItem("roleName")
                return;
            }
            return Promise.reject(err);
        }
    );

    axios.interceptors.request.use(
        (req) => {
            if (!endPoints.includes(req.url)) {
                let localDataAuth = localStorage.getItem(process.env.REACT_APP_ACCESS_KEYWORD);
                let localDataRefresh = localStorage.getItem(process.env.REACT_APP_REFRESH_KEYWORD);

                req.headers['emanat-access'] = localDataAuth;
                req.headers['emanat-refresh'] = localDataRefresh;
            }
            return req;
          
        },
        
        (err) => {
            return Promise.reject(err);
        }
    );
}