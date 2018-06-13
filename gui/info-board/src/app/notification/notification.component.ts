import INotification from './notification.interface';

class Notification implements INotification {
  user: any;
  title: string;
  subtitle: string;

  constructor(notification: INotification) {
    this.user = notification.user;
    this.title = notification.title;
    this.subtitle = notification.subtitle;
  }

}

export default Notification;
