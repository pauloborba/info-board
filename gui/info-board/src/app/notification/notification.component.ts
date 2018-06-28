import INotification, { NotificationType } from './notification.interface';
import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { MockNetworkingService } from '../networking/mocknetworking.service';
import { NetworkingService } from '../networking/networking.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {
  title: String = 'Notification Component';
  chatNotifications: INotification[];
  postNotifications: INotification[];
  chatBadgeIndicator: Number;
  postBadgeIndicator: Number;

  constructor(private networkingService: NetworkingService) {
    this.splitNotifications([]);
  }

  getBadgeIndicator(type: NotificationType) {
    if (type === NotificationType.Chat) {
      this.chatBadgeIndicator = this.chatNotifications.filter( notification => !notification.wasSeen ).length;
    } else {
      this.postBadgeIndicator = this.postNotifications.filter( notification => !notification.wasSeen ).length;
    }
  }

  getChatNotification(notification: INotification) {
    return notification.type === NotificationType.Chat;
  }

  getPostNotification(notification: INotification) {
    return notification.type === NotificationType.Post;
  }

  splitNotifications(notifications: INotification[]): void {
    this.chatNotifications = notifications.filter(this.getChatNotification);
    this.getBadgeIndicator(NotificationType.Chat);
    this.postNotifications = notifications.filter(this.getPostNotification);
    this.getBadgeIndicator(NotificationType.Post);
  }

  setNotificationSeen(notification) {
    notification.wasSeen = true;
    if (notification.type === NotificationType.Chat) {
      const index = this.chatNotifications.findIndex(currentNotification => currentNotification._id === notification._id );
      this.chatNotifications[index] = notification;
      this.getBadgeIndicator(NotificationType.Chat);
    } else {
      const index = this.postNotifications.findIndex(currentNotification => currentNotification._id === notification._id );
      this.postNotifications[index] = notification;
      this.getBadgeIndicator(NotificationType.Post);
    }
  }

  ngOnInit(): void {
    this.networkingService.getNotifications()
      .then(res => this.splitNotifications(res))
      .catch(error => console.log('Não foi possivel recuperar notificações'));
  }

}
