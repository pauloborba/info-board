export default interface  INotification {
  _id: string;
  user: any;
  title: string;
  subtitle: string;
  type: NotificationType;
  body: any;
  wasSeen: boolean;
}

export enum NotificationType {
  Chat,
  Post
}
