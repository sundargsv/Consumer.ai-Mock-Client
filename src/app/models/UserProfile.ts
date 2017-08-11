import {UserStatus} from '../models/enums/userStatus';
import {NotifyMode} from '../models/enums/notifyMode';

export class UserProfile {
    firstName:	string;
    lastName:	string;
    email:	string;
    userStatus:	UserStatus;
    notifyMode: NotifyMode;
}