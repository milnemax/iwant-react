import ContactUsController from './ContactUsController'
import ListController from './ListController'
import ContactController from './ContactController'
import DashboardController from './DashboardController'
import ListItemController from './ListItemController'
import LookUpController from './LookUpController'
import ShoppingListController from './ShoppingListController'
import Settings from './Settings'
const Controllers = {
    ContactUsController: Object.assign(ContactUsController, ContactUsController),
ListController: Object.assign(ListController, ListController),
ContactController: Object.assign(ContactController, ContactController),
DashboardController: Object.assign(DashboardController, DashboardController),
ListItemController: Object.assign(ListItemController, ListItemController),
LookUpController: Object.assign(LookUpController, LookUpController),
ShoppingListController: Object.assign(ShoppingListController, ShoppingListController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers