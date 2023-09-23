const accountRouter = require("../account_account/account_route");
const mainRouter = require("../main/mian_route");
const reportRouter = require("../onlyAdmin/report_route");
const adminRouter = require("../onlyAdmin/admin_route");
const manageRouter = require("../onlyAdmin/manage_route");
const superAdminRouter = require("../onlyAdmin/superAdmin_route");

module.exports.adminRouter = adminRouter;
module.exports.manageRouter = manageRouter;
module.exports.superAdminRouter = superAdminRouter;
module.exports.accountRouter = accountRouter;
module.exports.mainRouter = mainRouter;
module.exports.reportRouter = reportRouter;
