export interface Notification {
    title: string;
    subtitle: string;
    userid: string;
    senderId: string;
    wasSeen: boolean;
    body: any;
    type: NotificationType;
}

export enum NotificationType {
    Chat,
    Post
}