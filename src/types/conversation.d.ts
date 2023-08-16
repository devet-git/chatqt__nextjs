interface IConversation {
  id: string;
  members: IUser[] | string[];
  type: 'group' | 'personal';
}

interface IGroupConversation extends IConversation {
  type: 'group';
}
