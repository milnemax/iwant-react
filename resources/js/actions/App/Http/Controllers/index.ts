import ContactUsController from './ContactUsController'
import ListController from './ListController'
import Settings from './Settings'
const Controllers = {
    ContactUsController: Object.assign(ContactUsController, ContactUsController),
ListController: Object.assign(ListController, ListController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers