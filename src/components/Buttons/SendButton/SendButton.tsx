import { useState, MouseEvent } from "react";

import { useSubmitInputInternal } from "../../../hooks/internal/useSubmitInputInternal";
import { useBotStatesContext } from "../../../context/BotStatesContext";
import { useSettingsContext } from "../../../context/SettingsContext";
import { useStylesContext } from "../../../context/StylesContext";

import "./SendButton.css";

/**
 * Sends current user input to the chat bot.
 */
const SendButton = () => {
  // handles settings
  const { settings } = useSettingsContext();

  // handles styles
  const { styles } = useStylesContext();

  // handles bot states
  const { textAreaDisabled } = useBotStatesContext();

  // tracks if send button is hovered
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // handles user input submission
  const { handleSubmitText } = useSubmitInputInternal();

  // styles for send button
  const sendButtonStyle: React.CSSProperties = {
    backgroundColor: settings.general?.secondaryColor,
    ...styles.sendButtonStyle,
  };

  // styles for disabled send button
  const sendButtonDisabledStyle: React.CSSProperties = {
    cursor: `url("${settings.general?.actionDisabledIcon}"), auto`,
    backgroundColor: "#93c2c3",
    ...styles.sendButtonStyle, // by default inherit the base style
    ...styles.sendButtonDisabledStyle,
  };

  // styles for hovered send button
  const sendButtonHoveredStyle: React.CSSProperties = {
    backgroundColor: settings.general?.secondaryColor,
    ...styles.sendButtonStyle, // by default inherit the base style
    ...styles.sendButtonHoveredStyle,
  };

  /**
   * Handles mouse enter event on send button.
   */
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  /**
   * Handles mouse leave event on send button.
   */
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  /**
   * Renders button depending on whether an svg component or image url is provided.
   */

  return (
    <div
      aria-label={settings.ariaLabel?.sendButton ?? "send message"}
      role="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={async (event: MouseEvent) => {
        event?.preventDefault();
        if (textAreaDisabled) {
          return;
        }
        await handleSubmitText();
      }}
      style={
        textAreaDisabled
          ? sendButtonDisabledStyle
          : isHovered
          ? sendButtonHoveredStyle
          : sendButtonStyle
      }
      className="rcb-send-button"
    >
      {settings.chatInput?.sendButtonIcon}
    </div>
  );
};

export default SendButton;
