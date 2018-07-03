import INotification, { NotificationType } from './notification.interface';

export const mockNotifications: INotification[] = [
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
    {   _id: '123abb47',
        wasSeen: false,
        user:
            { firstName: 'Jhony', lastName: 'B. Good', userId: 'abcde' },
        title: 'Mudanças de horario', subtitle: 'A partir de amanhã novos horários serão adotados', type: NotificationType.Post,
        body: { }
    },
    {   _id: '123abb48',
        wasSeen: false,
        user:
            { firstName: 'Jhony', lastName: 'B. Good', userId: 'abcde' },
        title: 'Mensagem', subtitle: 'Alguem mandou mensagem para você', type: NotificationType.Chat,
        body: { user:
            { firstName: 'Jhon', lastName: 'Snow', userId: 'abcdg'}
        }
    },
    {   _id: '123abb49',
        wasSeen: false,
        user:
            { firstName: 'Jhony', lastName: 'B. Good', userId: 'abcde' },
        title: 'Votação', subtitle: 'Votação para ata e data de reunião amanhà', type: NotificationType.Post,
        body: { }
    },
    {   _id: '123abb50',
        wasSeen: false,
        user:
            { firstName: 'Jhony', lastName: 'B. Good', userId: 'abcde' },
        title: 'Mensagem', subtitle: 'Alguem mandou mensagem para você', type: NotificationType.Chat,
        body: { user:
            { firstName: 'Sansa', lastName: 'Stark', userId: 'abcdh'}
        }
    },
];
