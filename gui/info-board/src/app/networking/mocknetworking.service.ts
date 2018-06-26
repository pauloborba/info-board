import INotification from '../notification/notification.interface';
import { INetworking } from './networking.service.interface';
import { mockNotifications } from '../notification/mock.notifications';

export class MockNetworkingService implements INetworking {

    constructor() { }

    getNotifications(): Promise<INotification[]> {
        return Promise.resolve(mockNotifications);
    }

}
