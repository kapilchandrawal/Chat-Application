import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="02bf996b-77b6-4b31-bec3-560912796e98"
      userName="JSMastery"
      userSecret="123123"
      renderChatFeed={(ChatAppProps)=> <ChatFeed {...ChatAppProps} />}
    />
  );
};

export default App;
