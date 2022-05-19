export class Authorization{
    getTokenFromLocalStorage() {
        const token = localStorage.getItem("ip_token");
        console.log("the token from local storage is -> " + token);
        if (token === null) {
            return undefined;
        }
        return token;
    }
}
