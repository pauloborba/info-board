import { TestBed, async } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import INotification, { NotificationType } from './notification.interface';

describe('NotificationComponent', () => {
    let notificationComponent: NotificationComponent;
    const mockNotifications = [
        {   _id: '123abb44',
            wasSeen: false,
            user:
                { firstName: 'Jhony', lastName: 'B. Good', userId: 'abcde' },
            title: 'Votação', subtitle: 'Votação para ata e data de reunião', type: NotificationType.Post,
            body: { }
        },
        {   _id: '123abb45',
            wasSeen: false,
            user:
                { firstName: 'Jhony', lastName: 'B. Good', userId: 'abcde' },
            title: 'Mensagem', subtitle: 'Alguem mandou mensagem para você', type: NotificationType.Chat,
            body: { user:
                { firstName: 'Daenerys', lastName: 'Dragon', userId: 'abcdf'}
            }
        },
        {   _id: '123abb46',
            wasSeen: false,
            user:
                { firstName: 'Jhony', lastName: 'B. Good', userId: 'abcde' },
            title: 'Novas regras', subtitle: 'Novas regras de convivencia serão adotadas.', type: NotificationType.Post,
            body: { }
        },
    ];

    beforeEach( async () => {
        notificationComponent = new NotificationComponent();
    });

    it('Should split the notifications', async () => {
        notificationComponent.splitNotifications(mockNotifications);
        expect(notificationComponent.postNotifications.length).toEqual(2);
        expect(notificationComponent.chatNotifications.length).toEqual(1);
    });

    it('Should update badge indicators', async () => {
        expect(notificationComponent.chatBadgeIndicator).toEqual(0);
        expect(notificationComponent.postBadgeIndicator).toEqual(0);
        notificationComponent.splitNotifications(mockNotifications);
        expect(notificationComponent.chatBadgeIndicator).toEqual(1);
        expect(notificationComponent.postBadgeIndicator).toEqual(2);
    });

    it('Should return true for Chat notification', async () => {
        const result = notificationComponent.getChatNotification(mockNotifications[1]);
        expect(result).toBeTruthy();
    });

    it('Should return true for Post notification', async () => {
        const result = notificationComponent.getPostNotification(mockNotifications[0]);
        expect(result).toBeTruthy();
    });

    it('Should change the wasSeen of the notification to true', async () => {
        notificationComponent.splitNotifications(mockNotifications);
        expect(notificationComponent.postNotifications[0].wasSeen).toBeFalsy();
        notificationComponent.setNotificationSeen(mockNotifications[0]);
        expect(notificationComponent.postNotifications[0].wasSeen).toBeTruthy();

        expect(notificationComponent.chatNotifications[1].wasSeen).toBeFalsy();
        notificationComponent.setNotificationSeen(mockNotifications[1]);
        expect(notificationComponent.chatNotifications[1].wasSeen).toBeTruthy();
    });

});
