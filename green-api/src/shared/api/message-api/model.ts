export interface IfetchMessageReq {
  chatId: string;
  message: string;
}
export interface IfetchMessageRes {
  idMessage: string;
}

export interface IfetchChatHistoryReq {
  chatId: string;
  count: number;
}

export type IfetchChatHistoryRes = Root2[];

export interface Root2 {
  type: string;
  idMessage: string;
  timestamp: number;
  typeMessage: string;
  chatId: string;
  downloadUrl?: string;
  caption?: string;
  fileName?: string;
  jpegThumbnail?: string;
  statusMessage: string;
  sendByApi: boolean;
  textMessage?: string;
  extendedTextMessage?: ExtendedTextMessage;
  quotedMessage?: QuotedMessage;
}

export interface ExtendedTextMessage {
  text: string;
  stanzaId: string;
  participant: string;
}

export interface QuotedMessage {
  stanzaId: string;
  participant: string;
  typeMessage: string;
  downloadUrl?: string;
  caption?: string;
  fileName?: string;
  jpegThumbnail?: string;
  textMessage?: string;
}
