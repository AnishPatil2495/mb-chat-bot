import { MouseEvent } from "react";

import { useChatWindowInternal } from "../../../hooks/internal/useChatWindowInternal";
import { useSettingsContext } from "../../../context/SettingsContext";
import { useStylesContext } from "../../../context/StylesContext";

import "./CloseChatButton.css";

/**
 * Handles closing of chat.
 */
const CloseChatButton = () => {
  // handles settings
  const { settings } = useSettingsContext();

  // handles styles
  const { styles } = useStylesContext();

  // handles chat window
  const { toggleChatWindow } = useChatWindowInternal();

  /**
   * Renders button depending on whether an svg component or image url is provided.
   */
  const renderButton = () => {
    return (
      <span className="rcb-close-chat-icon" data-testid="rcb-close-chat-icon">
        {settings.header?.closeChatIcon}
      </span>
    );
  };

  return (
    <div
      aria-label={settings.ariaLabel?.closeChatButton ?? "close chat"}
      role="button"
      onMouseDown={(event: MouseEvent) => {
        event.stopPropagation();
        toggleChatWindow(false);
      }}
      style={{ ...styles.closeChatButtonStyle }}
    >
      {renderButton()}
    </div>
  );
};

export default CloseChatButton;
