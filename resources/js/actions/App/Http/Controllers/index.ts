import ContactUsController from './ContactUsController'
import ContactController from './ContactController'
import SharedListController from './SharedListController'
import AdminController from './AdminController'
import DashboardController from './DashboardController'
import UserController from './UserController'
import ListController from './ListController'
import ListItemController from './ListItemController'
import LookUpController from './LookUpController'
import ShoppingListController from './ShoppingListController'
const Controllers = {
    ContactUsController: Object.assign(ContactUsController, ContactUsController),
ContactController: Object.assign(ContactController, ContactController),
SharedListController: Object.assign(SharedListController, SharedListController),
AdminController: Object.assign(AdminController, AdminController),
DashboardController: Object.assign(DashboardController, DashboardController),
UserController: Object.assign(UserController, UserController),
ListController: Object.assign(ListController, ListController),
ListItemController: Object.assign(ListItemController, ListItemController),
LookUpController: Object.assign(LookUpController, LookUpController),
ShoppingListController: Object.assign(ShoppingListController, ShoppingListController),
}

export default Controllers