import { IUser } from '../model/user';
import INotification from '../notification/notification.interface';

export interface INetworking {
    getNotifications: () => Promise<INotification[]>;
}
