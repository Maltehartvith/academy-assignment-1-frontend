import { useState, useEffect } from 'react';
import { supabase } from 'apis/supabaseClient';

type MessageType = {
  id: number;
  message: string | null;
  author: string | null;
  created_at: string | null;
};

const ChatRoom = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = async () => {
    const { data, error } = await supabase.from('messages').select('*');
    if (error) {
      console.log('error', error);
    } else {
      setMessages(data);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(() => {
      fetchMessages();
    }, 5000); // fetch new messages every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage !== '') {
      const { error } = await supabase.from('messages').insert([{ message: newMessage }]);
      if (error) {
        console.log('error', error);
      } else {
        setNewMessage('');
      }
    }
  };

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.message}</p>
          <p>{message.author}</p>
          <p>{message.created_at}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
