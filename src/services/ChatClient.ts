import { StreamChat } from 'stream-chat';

import 'stream-chat-react/css/v2/index.css';

export const client = StreamChat.getInstance('rakut57jw7xs');
console.log(client);

client.connectUser(
  {
    id: 'loshad',
    name: 'loshad',
  },
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibG9zaGFkIn0.G-Z5D_iK9svuE73U3AKxbX6UF0KdX4lOsf4Il_BSrPE',
);
export const channel = client.channel('messaging', 'bred', {
  name: 'bred',
});

// fetch the channel state, subscribe to future updates
channel.watch();
console.log(channel);

export const text = 'I’m mowing the air Randy, I’m mowing the air.';

const response = channel.sendMessage({
  text,
  customField: '123',
});
console.log(response);
