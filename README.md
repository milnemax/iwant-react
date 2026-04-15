## iWantiWant

This sites allows a user to create lists of presents or things you like and send them to family and friends. The recipients will receive an email allowing them to view the list. They can mark the ones they will buy or ones they would be willing to partially pay for if someone else is willing to join with them.

### Public Pages
- Home Page; with view shared list form
- Login
- Registration
- Forgotten Password
- Shared List; page allowing anyone with a correct code to view a users shared list

### GDPR Pages
- Privacy; with contact controller form
- Recipients; form to enter an email and get sent a report on all personal information held
- Unsubscribe; form to enter an email to unsubscribe, users will have their permissions revoked, contacts of users will have their email removed and the contact appears to the user as not emailable

### Private Pages
- Dashboard
- Details Page; to manage your personal information, permissions and settings
- Contacts Page; to manage the contacts you share you list with and see which are emailable
- Lists Page; to manage your lists and decide who to share them with
- Shopping List Page; shows which items you have claimed or placed offers against and when they are due.

### Admin Pages
- Stats Page
- GDPR Log; searchable log of permission changes and emails sent

### Testing and Trial

php artisan migrate:fresh<br>
php artisan db:seed

Login - admin@milnedevelopment.co.uk<br>
Password - Pass1234!

Unit Tests use the same database with transactions