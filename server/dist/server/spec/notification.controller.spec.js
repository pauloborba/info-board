"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const notification_controller_1 = require("../src/api/controller/notification.controller");
const sinon = require("sinon");
const notification_model_1 = require("../src/data/model/notification.model");
describe("Notificação", () => {
    let notificationController;
    const mockNotifications = [
        { _id: 'n0001',
            wasSeen: false,
            userId: "00001",
            senderId: "00002",
            title: 'mock title 1',
            subtitle: 'mock subtitle 4',
            type: notification_model_1.NotificationType.Post,
            body: { title: "mock title 2" }
        },
        { _id: 'n0002',
            wasSeen: false,
            userId: "00001",
            senderId: "00002",
            title: 'mock title 3',
            subtitle: 'mock subtitle 5',
            type: notification_model_1.NotificationType.Chat,
            body: { mensagem: "mock mensagem" }
        },
        { _id: 'n0003',
            wasSeen: false,
            userId: "00001",
            senderId: "00003",
            title: 'mock title 4',
            subtitle: 'mock subtitle 6',
            type: notification_model_1.NotificationType.Post,
            body: { title: "mock title 5" }
        },
    ];
    it("Retorna uma lista de notificações", () => __awaiter(this, void 0, void 0, function* () {
        const notificationManager = {
            listNotification: sinon.stub().resolves(mockNotifications)
        };
        const mockRequest = {
            body: {
                userId: "00001"
            }
        };
        const mockResponse = {
            send: sinon.stub().callsFake((_) => mockNotifications),
            status: sinon.stub().callsFake(() => mockResponse)
        };
        notificationController = new notification_controller_1.default(notificationManager);
        yield notificationController.getNotifications(mockRequest, mockResponse);
        sinon.assert.calledWith(mockResponse.status, 200);
        sinon.assert.calledWith(mockResponse.send, mockNotifications);
        // let result = await notificationController.getNotifications(mockRequest, mockResponse);
        // expect(result).toEqual(mockNotifications);
    }));
    it("Troca a visibilidade de uma notificação", () => {
        let mockNotification = mockNotifications[0];
        mockNotification.wasSeen = true;
        const notificationManager = {
            setVisibility: sinon.stub().resolves(mockNotification)
        };
        const mockRequest = {
            params: {
                notificationId: "n0001"
            }
        };
        const mockResponse = {
            send: sinon.stub().callsFake(() => mockResponse),
            status: 200
        };
        notificationController = new notification_controller_1.default(notificationManager);
        let result = notificationController.setVisibility(mockRequest, mockResponse);
    });
});
//# sourceMappingURL=notification.controller.spec.js.map