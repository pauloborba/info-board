import { IUser } from '../model/User';
import INotification from '../notification/notification.interface';

export interface INetworking {
    getNotifications: () => Promise<INotification[]>;
}
