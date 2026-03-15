import ContactUsController from './ContactUsController'
import SharedListController from './SharedListController'
import ContactController from './ContactController'
import DashboardController from './DashboardController'
import ListController from './ListController'
import ListItemController from './ListItemController'
import LookUpController from './LookUpController'
import ShoppingListController from './ShoppingListController'
import Settings from './Settings'
const Controllers = {
    ContactUsController: Object.assign(ContactUsController, ContactUsController),
SharedListController: Object.assign(SharedListController, SharedListController),
ContactController: Object.assign(ContactController, ContactController),
DashboardController: Object.assign(DashboardController, DashboardController),
ListController: Object.assign(ListController, ListController),
ListItemController: Object.assign(ListItemController, ListItemController),
LookUpController: Object.assign(LookUpController, LookUpController),
ShoppingListController: Object.assign(ShoppingListController, ShoppingListController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers