import { Settings } from "../../types/Settings";
import { Button } from "../Button";

import actionDisabledIcon from "../../assets/action_disabled_icon.svg";
import botAvatar from "../../assets/bot_avatar.svg";
import userAvatar from "../../assets/user_avatar.svg";
import ChatIcon from "../../assets/chat_icon.svg?react";
import FileAttachmentIcon from "../../assets/file_attachment_icon.svg?react";
import NotificationIcon from "../../assets/notification_icon.svg?react";
import NotificationIconDisabled from "../../assets/notification_icon_disabled.svg?react";
import CloseChatIcon from "../../assets/close_chat_icon.svg?react";
import SendButtonIcon from "../../assets/send_icon.svg?react";
import VoiceIcon from "../../assets/voice_icon.svg?react";
import VoiceIconDisabled from "../../assets/voice_icon_disabled.svg?react";
import EmojiIcon from "../../assets/emoji_icon.svg?react";
import AudioIcon from "../../assets/audio_icon.svg?react";
import AudioIconDisabled from "../../assets/audio_icon_disabled.svg?react";
import notificationSound from "../../assets/notification_sound.wav";

// default settings provided to the bot
export const DefaultSettings: Settings = {
  general: {
    primaryColor: "#1e2848",
    secondaryColor: "#20818c",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', " +
      "'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', " +
      "sans-serif",
    showHeader: true,
    showFooter: false,
    showInputRow: true,
    actionDisabledIcon: actionDisabledIcon,
    embedded: false,
    flowStartTrigger: "ON_LOAD",
    showTooltip: false,
  },
  tooltip: {
    mode: "CLOSE",
    text: "Need Help! 😊",
  },
  chatButton: {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        ></path>
      </svg>
    ),
  },
  header: {
    title: (
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            margin: 0,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          AI Assistant
        </div>
        <div
          style={{
            cursor: "pointer",
            fontSize: 12,
            color: "#fff",
            opacity: 0.8,
          }}
        >
          Online now
        </div>
      </div>
    ),
    showAvatar: true,
    avatar: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "100%",
          backgroundColor: "#548b96",
          width: "32px",
          height: "32px",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    ),
    buttons: [Button.CLOSE_CHAT_BUTTON],
    closeChatIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    ),
  },
  notification: {
    disabled: true,
    defaultToggledOn: true,
    volume: 0.2,
    icon: NotificationIcon,
    iconDisabled: NotificationIconDisabled,
    sound: notificationSound,
    showCount: true,
  },
  audio: {
    disabled: true,
    defaultToggledOn: false,
    language: "en-US",
    voiceNames: [
      "Microsoft David - English (United States)",
      "Alex (English - United States)",
    ],
    rate: 1,
    volume: 1,
    icon: AudioIcon,
    iconDisabled: AudioIconDisabled,
  },
  chatHistory: {
    disabled: true,
    maxEntries: 30,
    storageKey: "rcb-history",
    storageType: "LOCAL_STORAGE",
    viewChatHistoryButtonText: "Load Chat History ⟳",
    chatHistoryLineBreakText: "----- Previous Chat History -----",
    autoLoad: false,
  },
  chatInput: {
    disabled: false,
    allowNewline: false,
    enabledPlaceholderText: "Type your message...",
    disabledPlaceholderText: "",
    showCharacterCount: false,
    characterLimit: -1,
    botDelay: 1000,
    sendButtonIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 19"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
        <path d="m21.854 2.147-10.94 10.939"></path>
      </svg>
    ),
    blockSpam: true,
    sendOptionOutput: true,
    sendCheckboxOutput: true,
    buttons: [Button.SEND_MESSAGE_BUTTON],
  },
  chatWindow: {
    showScrollbar: false,
    showTypingIndicator: true,
    autoJumpToBottom: false,
    showMessagePrompt: true,
    messagePromptText: "New Messages ↓",
    messagePromptOffset: 30,
    defaultOpen: false,
  },
  sensitiveInput: {
    maskInTextArea: true,
    maskInUserBubble: true,
    asterisksCount: 10,
    hideInUserBubble: false,
  },
  userBubble: {
    animate: true,
    showAvatar: false,
    avatar: userAvatar,
    simulateStream: false,
    streamSpeed: 30,
  },
  botBubble: {
    animate: true,
    showAvatar: false,
    avatar: (
      <div
        style={{
          cursor: "pointer",
          margin: 0,
          fontSize: 12,
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        AI
      </div>
    ),
    simulateStream: false,
    streamSpeed: 30,
  },
  voice: {
    disabled: true,
    defaultToggledOn: false,
    language: "en-US",
    timeoutPeriod: 10000,
    autoSendDisabled: false,
    autoSendPeriod: 1000,
    sendAsAudio: false,
    icon: VoiceIcon,
    iconDisabled: VoiceIconDisabled,
  },
  footer: {
    text: (
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 3,
        }}
        onClick={() => window.open("https://react-chatbotify.com")}
      >
        <span key={0}>Powered By </span>
        <div
          key={1}
          style={{
            borderRadius: "50%",
            width: 14,
            height: 14,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to right, #42b0c5, #491d8d)",
          }}
        >
          <ChatIcon style={{ width: "80%", height: "80%", fill: "#fff" }} />
        </div>
        <span key={2} style={{ fontWeight: "bold" }}>
          Epico
        </span>
      </div>
    ),
    buttons: [Button.FILE_ATTACHMENT_BUTTON, Button.EMOJI_PICKER_BUTTON],
  },
  fileAttachment: {
    disabled: false,
    multiple: true,
    accept: ".png",
    icon: FileAttachmentIcon,
    iconDisabled: FileAttachmentIcon,
    sendFileName: true,
    showMediaDisplay: false,
  },
  emoji: {
    disabled: false,
    icon: EmojiIcon,
    iconDisabled: EmojiIcon,
    list: [
      "😀",
      "😃",
      "😄",
      "😅",
      "😊",
      "😌",
      "😇",
      "🙃",
      "🤣",
      "😍",
      "🥰",
      "🥳",
      "🎉",
      "🎈",
      "🚀",
      "⭐️",
    ],
  },
  toast: {
    maxCount: 3,
    forbidOnMax: false,
    dismissOnClick: true,
  },
  event: {
    rcbPreInjectMessage: false,
    rcbPostInjectMessage: false,
    rcbStartSimulateStreamMessage: false,
    rcbStopSimulateStreamMessage: false,
    rcbStartStreamMessage: false,
    rcbChunkStreamMessage: false,
    rcbStopStreamMessage: false,
    rcbRemoveMessage: false,
    rcbLoadChatHistory: false,
    rcbToggleChatWindow: false,
    rcbStartSpeakAudio: false,
    rcbToggleAudio: false,
    rcbToggleNotifications: false,
    rcbToggleVoice: false,
    rcbChangePath: false,
    rcbShowToast: false,
    rcbDismissToast: false,
    rcbUserSubmitText: false,
    rcbUserUploadFile: false,
    rcbTextAreaChangeValue: false,
    rcbPreLoadChatBot: false,
    rcbPostLoadChatBot: false,
    rcbPreProcessBlock: false,
    rcbPostProcessBlock: false,
  },
  ariaLabel: {
    chatButton: "open chat",
    audioButton: "toggle audio",
    closeChatButton: "close chat",
    emojiButton: "emoji picker",
    fileAttachmentButton: "upload file",
    notificationButton: "toggle notifications",
    sendButton: "send message",
    voiceButton: "toggle voice",
    inputTextArea: "input text area",
  },
  device: {
    desktopEnabled: true,
    mobileEnabled: true,
    applyMobileOptimizations: true,
  },
};
