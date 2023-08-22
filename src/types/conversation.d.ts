interface IConversation {
  id: string | number;
  members: IUser[] | string[];
  type: 'group' | 'personal';
  content: IMessage[];
}

interface IGroupConversation extends IConversation {
  type: 'group';
}
interface IMessage {
  userId: string | number;
  content: string | undefined;
  conversationId: string | number;
  replyTo?: IMessage;
}
