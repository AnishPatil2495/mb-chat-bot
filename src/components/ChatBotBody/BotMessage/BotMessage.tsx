import { CSSProperties } from "react";
import { useSettingsContext } from "../../../context/SettingsContext";
import { useStylesContext } from "../../../context/StylesContext";
import { Message } from "../../../types/Message";

import "./BotMessage.css";

/**
 * Renders message from the bot.
 *
 * @param message message to render
 * @param isNewSender whether this message is from a new sender
 */
const BotMessage = ({
  message,
  isNewSender,
}: {
  message: Message;
  isNewSender: boolean;
}) => {
  // handles settings
  const { settings } = useSettingsContext();

  // handles styles
  const { styles } = useStylesContext();

  // checks if content should be rendered as html
  const isStringContent = typeof message.content === "string";
  const baseContent: React.ReactNode = message.content;

  // checks if content wrapper is defined to wrap around content
  const finalContent = message.contentWrapper ? (
    <message.contentWrapper>{baseContent}</message.contentWrapper>
  ) : (
    baseContent
  );

  // styles for bot bubble
  const botBubbleStyle: CSSProperties = {
    backgroundColor: "#f3f4f6",
    color: "rgb(31 41 55 / var(--tw-text-opacity, 1))",
    maxWidth: settings.botBubble?.showAvatar ? "65%" : "70%",
    ...styles.botBubbleStyle,
  };
  const botBubbleEntryStyle = settings.botBubble?.animate
    ? "rcb-bot-message-entry"
    : "";

  // determines whether it's a new sender (affects avatar display and offset)
  const showAvatar = settings.botBubble?.showAvatar && isNewSender;
  const offsetStyle = `rcb-bot-message`;

  return (
    <div className="rcb-bot-message-container">
      {showAvatar && (
        <div className="rcb-message-bot-avatar-container">
          <div className="rcb-message-bot-avtar">
            {settings.botBubble?.avatar}
          </div>
          <div className="rcb-message-bot-avatar-heading">Ai Assistant</div>
        </div>
      )}

      {isStringContent ? (
        <div
          style={botBubbleStyle}
          className={`${offsetStyle} ${botBubbleEntryStyle}`}
        >
          {finalContent}
        </div>
      ) : (
        <>{finalContent}</>
      )}
    </div>
  );
};

export default BotMessage;
