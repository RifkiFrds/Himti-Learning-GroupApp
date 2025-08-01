import { useState, useEffect, useMemo, useRef } from "react";
import {
  isToday,
  isYesterday,
  isWithinInterval,
  subDays,
  startOfMonth,
} from "date-fns";
import notificationSound from "../assets/song/notification.mp3";

// Fungsi helper untuk mengelompokkan percakapan
const groupConversationsByDate = (conversations) => {
  const now = new Date();
  const groups = {
    "Hari Ini": [],
    Kemarin: [],
    "7 Hari Terakhir": [],
    "Bulan Ini": [],
    "Lebih Lama": [],
  };
  conversations.forEach((convo) => {
    const convoDate = new Date(convo.id);
    if (isToday(convoDate)) groups["Hari Ini"].push(convo);
    else if (isYesterday(convoDate)) groups["Kemarin"].push(convo);
    else if (isWithinInterval(convoDate, { start: subDays(now, 7), end: now }))
      groups["7 Hari Terakhir"].push(convo);
    else if (
      isWithinInterval(convoDate, { start: startOfMonth(now), end: now })
    )
      groups["Bulan Ini"].push(convo);
    else groups["Lebih Lama"].push(convo);
  });
  Object.keys(groups).forEach((key) => {
    if (groups[key].length === 0) delete groups[key];
  });
  return groups;
};

// Custom Hook utama
export const useChat = () => {
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem("himtiConversations");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: Date.now(),
            title: "Percakapan Awal",
            messages: [
              {
                sender: "ai",
                text: "Halo! Saya HIMTIChat, asisten AI untuk membantumu belajar coding. Ada yang bisa saya bantu?",
                feedback: null,
              },
            ],
          },
        ];
  });
  const [activeConversationId, setActiveConversationId] = useState(
    () => conversations[0]?.id,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const audioRef = useRef(new Audio(notificationSound));

  // Efek untuk sinkronisasi dengan localStorage
  useEffect(() => {
    localStorage.setItem("himtiConversations", JSON.stringify(conversations));
  }, [conversations]);

  // Handler untuk memulai percakapan baru
  const handleNewConversation = () => {
    const newId = Date.now();
    const newConversation = {
      id: newId,
      title: "Percakapan Baru",
      messages: [
        {
          sender: "ai",
          text: "Halo! Ada lagi yang bisa saya bantu?",
          feedback: null,
        },
      ],
    };
    setConversations((prev) => [newConversation, ...prev]);
    setActiveConversationId(newId);
  };

  // Handler untuk menghapus percakapan
  const handleDeleteConversation = (idToDelete) => {
    const remaining = conversations.filter((c) => c.id !== idToDelete);
    if (remaining.length === 0) {
      handleNewConversation();
    } else {
      setConversations(remaining);
      if (activeConversationId === idToDelete) {
        setActiveConversationId(remaining[0].id);
      }
    }
  };

  // Handler untuk mengirim pesan (termasuk panggilan API)
  const handleSubmit = async (prompt) => {
    if (!prompt.trim()) return;
    const newUserMessage = { sender: "user", text: prompt };

    setConversations((prev) =>
      prev.map((convo) => {
        if (convo.id === activeConversationId) {
          const newTitle =
            convo.messages.length === 1
              ? prompt.substring(0, 25) + "..."
              : convo.title;
          return {
            ...convo,
            title: newTitle,
            messages: [...convo.messages, newUserMessage],
          };
        }
        return convo;
      }),
    );
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/getAIResponse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok)
        throw new Error("Gagal mendapatkan respons dari server.");
      const data = await response.json();

      const cleanedText = data.response.replace(/<s>|<\/s>/g, "").trim();
      const aiMessage = { sender: "ai", text: cleanedText, feedback: null };

      setConversations((prev) =>
        prev.map((convo) =>
          convo.id === activeConversationId
            ? { ...convo, messages: [...convo.messages, aiMessage] }
            : convo,
        ),
      );

      if (isSoundEnabled) {
        audioRef.current
          .play()
          .catch((e) => console.error("Gagal memainkan suara:", e));
      }
    } catch (error) {
      console.error("Gagal menghubungi AI:", error);
      const errorMessage = {
        sender: "ai",
        text: "Maaf, terjadi kesalahan. Coba lagi nanti.",
        feedback: null,
      };
      setConversations((prev) =>
        prev.map((convo) =>
          convo.id === activeConversationId
            ? { ...convo, messages: [...convo.messages, errorMessage] }
            : convo,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handler untuk feedback
  const handleFeedback = (messageIndex, feedbackType) => {
    setConversations((prev) =>
      prev.map((convo) => {
        if (convo.id === activeConversationId) {
          const newMessages = [...convo.messages];
          if (newMessages[messageIndex].feedback === null)
            newMessages[messageIndex].feedback = feedbackType;
          return { ...convo, messages: newMessages };
        }
        return convo;
      }),
    );
  };

  // Memoized data untuk performa
  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeConversationId),
    [conversations, activeConversationId],
  );
  const groupedAndFilteredConversations = useMemo(() => {
    const filtered = conversations.filter((convo) =>
      convo.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return groupConversationsByDate(filtered);
  }, [conversations, searchTerm]);

  return {
    isLoading,
    isSoundEnabled,
    conversations,
    activeConversation,
    groupedAndFilteredConversations,
    activeConversationId,
    searchTerm,
    setSearchTerm,
    handleNewConversation,
    handleDeleteConversation,
    handleSubmit,
    handleFeedback,
    handleSwitchConversation: setActiveConversationId,
    toggleSound: () => setIsSoundEnabled((prev) => !prev),
  };
};
