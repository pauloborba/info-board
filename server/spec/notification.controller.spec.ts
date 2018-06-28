import NotificationController from "../src/api/controller/notification.controller";
import * as sinon from "sinon";
import { Notification, NotificationType } from "../src/data/model/notification.model";

describe("Notificação", () => {

    let notificationController: NotificationController;

    const mockNotifications = [
        {   _id: 'n0001',
            wasSeen: false,
            userId: "00001",
            senderId: "00002",
            title: 'mock title 1', 
            subtitle: 'mock subtitle 4', 
            type: NotificationType.Post,
            body: { title: "mock title 2" }
        },
        {   _id: 'n0002',
            wasSeen: false,
            userId: "00001",
            senderId: "00002",
            title: 'mock title 3', 
            subtitle: 'mock subtitle 5', 
            type: NotificationType.Chat,
            body: { mensagem: "mock mensagem" }
        },
        {   _id: 'n0003',
            wasSeen: false,
            userId: "00001",
            senderId: "00003",
            title: 'mock title 4', 
            subtitle: 'mock subtitle 6', 
            type: NotificationType.Post,
            body: { title: "mock title 5" }
        },
    ];

    it("Retorna uma lista de notificações", async () => {

        const notificationManager: any = {
            listNotification: sinon.stub().resolves(mockNotifications)
        };

        const mockRequest: any = {
            body: {
                userId: "00001"
            }
        };
        const mockResponse: any = {
            send: sinon.stub(),
            status: sinon.stub().callsFake(() => mockResponse)
        };

        notificationController = new NotificationController(notificationManager);

        await notificationController.getNotifications(mockRequest, mockResponse);


        sinon.assert.calledWith(mockResponse.status, 200);
        sinon.assert.calledWith(mockResponse.send, mockNotifications);
    });

    it("Troca a visibilidade de uma notificação", async() => {

        let mockNotification = mockNotifications[0];
        mockNotification.wasSeen = true;

        const notificationManager: any = {
            setVisibility: sinon.stub().resolves(mockNotification)
        };

        const mockRequest: any = {
            params: {
                notificationId: "n0001"
            }
        };

        const mockResponse: any = {
            send: sinon.stub(),
            status: sinon.stub().callsFake( () => mockResponse)
        };

        notificationController = new NotificationController(notificationManager);
        await notificationController.setVisibility(mockRequest, mockResponse);

        sinon.assert.calledWith(mockResponse.status, 200);
        sinon.assert.calledWith(mockResponse.send, mockNotification);

    });


});