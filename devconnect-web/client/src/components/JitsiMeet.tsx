import { useEffect, useRef } from "react";

interface JitsiMeetComponentProps {
  roomName: string;
  displayName: string;
}

export default function JitsiMeetComponent({
  roomName,
  displayName,
}: JitsiMeetComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Script do Jitsi Meet
    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const options = {
        roomName: `devconnect-${roomName.toLowerCase().replace(/\s+/g, "-")}`,
        width: "100%",
        height: "100%",
        parentNode: containerRef.current,
        userInfo: {
          displayName: displayName,
        },
        configOverwrite: {
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          disableSimulcast: false,
        },
        interfaceConfigOverwrite: {
          DEFAULT_BACKGROUND: "#1a1a1a",
          MOBILE_APP_PROMO: false,
          SHOW_JITSI_WATERMARK: false,
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "closedcaptions",
            "desktop",
            "fullscreen",
            "fodeviceselection",
            "hangup",
            "profile",
            "chat",
            "recording",
            "livestreaming",
            "etherpad",
            "sharedvideo",
            "settings",
            "raisehand",
            "videoquality",
            "filmstrip",
            "invite",
            "feedback",
            "stats",
            "shortcuts",
            "tileview",
            "toggle-camera",
            "download-logs",
          ],
          LANG_DETECTION: true,
          SHOW_CHROME_EXTENSION_BANNER: false,
        },
      };

      // @ts-ignore
      const api = new window.JitsiMeetExternalAPI(
        "meet.jit.si",
        options
      );

      return () => {
        api.dispose();
      };
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [roomName, displayName]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-black rounded-lg overflow-hidden"
      style={{ minHeight: "500px" }}
    />
  );
}
