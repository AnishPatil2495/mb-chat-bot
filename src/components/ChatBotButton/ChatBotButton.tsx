import { useChatWindowInternal } from "../../hooks/internal/useChatWindowInternal";
import { useBotStatesContext } from "../../context/BotStatesContext";
import { useSettingsContext } from "../../context/SettingsContext";
import { useStylesContext } from "../../context/StylesContext";

import "./ChatBotButton.css";

/**
 * Toggles opening and closing of the chat window when general.embedded is false.
 */
const ChatBotButton = () => {
  // handles settings
  const { settings } = useSettingsContext();

  // handles styles
  const { styles } = useStylesContext();

  // handles bot states
  const { unreadCount } = useBotStatesContext();

  // handles chat window
  const { isChatWindowOpen, toggleChatWindow } = useChatWindowInternal();

  // styles for chat button
  const chatButtonStyle: React.CSSProperties = {
    backgroundColor: "rgb(8, 133, 134)",
    ...styles.chatButtonStyle,
  };

  // styles for chat icon
  const chatIconStyle: React.CSSProperties = {
    backgroundImage: `url(${settings.chatButton?.icon})`,
    fill: "#fff",
    width: 75,
    height: 75,
    ...styles.chatIconStyle,
  };

  /**
   * Renders button depending on whether an svg component or image url is provided.
   */
  const renderButton = () => {
    return <span className="rcb-toggle-icon">{settings.chatButton?.icon}</span>;
  };

  return (
    <>
      {!settings.general?.embedded && (
        <div
          aria-label={settings.ariaLabel?.chatButton ?? "open chat"}
          role="button"
          style={chatButtonStyle}
          className={`rcb-toggle-button ${
            isChatWindowOpen ? "rcb-button-hide" : "rcb-button-show"
          }`}
          onClick={() => toggleChatWindow(true)}
        >
          {renderButton()}
          {!settings.notification?.disabled &&
            settings.notification?.showCount && (
              <span
                style={{ ...styles.notificationBadgeStyle }}
                className="rcb-badge"
              >
                {unreadCount}
              </span>
            )}
        </div>
      )}
    </>
  );
};

export default ChatBotButton;
