'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.post('/mail/login', controller.api.login.login);
    router.post('/mail/changePassword', controller.api.login.changePassword);
};
