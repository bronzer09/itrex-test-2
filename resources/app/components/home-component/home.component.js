import _ from 'underscore';

class HomeController {
    /** @ngInject */
    constructor($http, utilService) {
        this.utilService    = utilService;
        this.$http          = $http;

        this.init();
    }

    init() {
        this.getData();
    }

    getData() {
        this.$http(this._getHttpOptions())
            .then(res => {
                this.user     = res.data.user;
                this.usersList = res.data.usersList;
            })
    }

    _getHttpOptions(data) {
        return {
            url : this.utilService.apiPrefix('app/user-data'),
            method: 'GET'
        }
    }
}

const HomeComponent = {
    template        : require('./home-component.template.html'),
    controller      : HomeController
};

export default HomeComponent;