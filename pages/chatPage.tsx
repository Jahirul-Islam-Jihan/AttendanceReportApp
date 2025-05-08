import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, Text, ScrollView, StyleSheet } from 'react-native';
import { HubConnection } from '@microsoft/signalr';
import createSignalRConnection from '../Service/signalR';

const ChatScreen = () => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newConnection = createSignalRConnection();

    newConnection
      .start()
      .then(() => {
        console.log('✅ SignalR Connected');
        setConnection(newConnection);
        setIsConnected(true);

        newConnection.on('ReceiveMessage', (user: string, message: string) => {
          const fullMessage = `${user}: ${message}`;
          console.log('📩', fullMessage);
          setReceivedMessages(prev => [...prev, fullMessage]);
        });
      })
      .catch(err => console.error('Connection error:', err));

    return () => {
      newConnection.stop();
    };
  }, []);

  const sendMessage = async () => {
    if (connection && isConnected && message.trim()) {
      try {
        await connection.invoke('SendMessage', 'Jihan', message);
        setMessage('');
      } catch (err) {
        console.error('Send failed:', err);
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {receivedMessages.map((msg, index) => (
          <Text key={index} style={styles.messageText}>
            {msg}
          </Text>
          
        ))}

      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} disabled={!isConnected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageText: {
    padding: 8,
    backgroundColor: '#eee',
    marginBottom: 5,
    borderRadius: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ChatScreen;
