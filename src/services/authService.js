import webService from './webSerivce';
import ServiceBuilder from './serviceBuilder';

class AuthService extends ServiceBuilder {
    constructor() {
        super('authService');
    }

    async isAuthenticated() {
        const url = `${this.serviceAddress}/auth`;
        const method = 'POST';

        const response =  await webService({
            url,
            method,
        });
        return response;
    }
}

export default AuthService;