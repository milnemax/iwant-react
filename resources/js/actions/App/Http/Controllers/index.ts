import ContactUsController from './ContactUsController'
import ListController from './ListController'
import ContactController from './ContactController'
import DashboardController from './DashboardController'
import Settings from './Settings'
const Controllers = {
    ContactUsController: Object.assign(ContactUsController, ContactUsController),
ListController: Object.assign(ListController, ListController),
ContactController: Object.assign(ContactController, ContactController),
DashboardController: Object.assign(DashboardController, DashboardController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers