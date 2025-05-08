// signalR.ts
import {
    HubConnectionBuilder,
    LogLevel,
    HttpTransportType,
    HubConnection,
  } from '@microsoft/signalr';
  
  let connection: HubConnection;
  
  export const createSignalRConnection = () => {
    connection = new HubConnectionBuilder()
      .withUrl('http://192.168.88.117:5121/chathub', {
        transport: HttpTransportType.WebSockets,
        skipNegotiation: true,
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();
  
    return connection;
  };
  
  export default createSignalRConnection;
  