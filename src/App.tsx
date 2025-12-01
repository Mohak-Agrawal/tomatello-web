import React, { useState, useEffect, useCallback, useMemo } from "react";

// ====================================================================================================
// CONFIGURATION & CONSTANTS (SUNFLOWER THEME)
// No Firebase imports required, simplifying the file.
// ====================================================================================================

const SUNFLOWER_ACCENT = "#ffc34d"; // Soft Yellow (Primary Accent)
const EARTH_BROWN = "#594033"; // Soft Brown (Dark Text)
const CREAM_NEUTRAL = "#f7f0e6"; // Soft Warm Neutral (Main Background)
const LUSH_GREEN = "#69a054"; // Gentle Green (Growth/Success)
const WARM_SHADOW = "#e2c59d"; // Subtle Shadow Color

// Utility class names derived from custom colors for consistency
const TEXT_PRIMARY = `text-[${EARTH_BROWN}]`;
const BG_ACCENT = `bg-[${SUNFLOWER_ACCENT}]`;
const TEXT_ACCENT = `text-[${SUNFLOWER_ACCENT}]`;
const BORDER_ACCENT = `border-[${SUNFLOWER_ACCENT}]`;
const BG_NEUTRAL = `bg-[${CREAM_NEUTRAL}]`;
const TEXT_GROWTH = `text-[${LUSH_GREEN}]`;
const BG_GROWTH = `bg-[${LUSH_GREEN}]`;

// Card Shadow Style: Soft and large for an elegant look
const CARD_STYLE = `rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] border-t-2 border-l-2 border-opacity-30 p-6`;

// ====================================================================================================
// TYPE DEFINITIONS AND INTERFACES
// ====================================================================================================

interface Score {
  communication: number;
  connection: number;
  trust: number;
  emotionalIntimacy: number;
}
interface DailyCheckIn {
  mood: "great" | "good" | "neutral" | "bad" | "terrible";
  energyLevel: number;
  wentWell: string;
  stressedBy: string;
  insights: string;
  timestamp: Date;
  userId: string;
}
interface JournalEntry {
  id: string;
  text: string;
  isPrivate: boolean;
  authorId: string;
  timestamp: Date;
  prompt?: string;
}
interface WeeklyTask {
  id: string;
  title: string;
  description: string;
  due: string;
  completedBy: string[];
}
interface OnboardingStatus {
  step: number;
  complete: boolean;
  partnerSynced: boolean;
}

type AppTab =
  | "dashboard"
  | "checkin"
  | "coach"
  | "journal"
  | "conflict"
  | "settings";

// ====================================================================================================
// MOCK DATA AND INITIAL STATE
// ====================================================================================================

const MOCK_USER_ID = "local-user-id-abc123";
const INITIAL_SCORES: Score = {
  communication: 72,
  connection: 65,
  trust: 80,
  emotionalIntimacy: 58,
};
const MOCK_TASKS: WeeklyTask[] = [
  {
    id: "w1",
    title: "Gratitude Week: 5 Appreciations",
    description:
      "Share five distinct, specific things you appreciate about your partner this week.",
    due: "2025-12-01",
    completedBy: [],
  },
  {
    id: "w2",
    title: "Intimacy Task: 15-Minute Cuddle",
    description:
      "Schedule and execute a 15-minute, screen-free cuddle session.",
    due: "2025-12-08",
    completedBy: [],
  },
];
const MOCK_JOURNAL: JournalEntry[] = [
  {
    id: "j1",
    text: "Had a wonderful shared laugh over a silly movie tonight. Moments like these are the best.",
    isPrivate: false,
    authorId: MOCK_USER_ID,
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: "j2",
    text: "Felt a little anxious about work today, decided to keep that to myself for now.",
    isPrivate: true,
    authorId: MOCK_USER_ID,
    timestamp: new Date(Date.now() - 172800000),
  },
];
const MOCK_RESOURCES = [
  {
    title: "Attachment Styles: Secure vs. Anxious",
    duration: "1:45",
    category: "Conflict",
    videoUrl: "https://placehold.co/300x150/f9bb2a/371d02?text=Video",
  },
  {
    title: "5 Love Languages Refresher",
    duration: "2:10",
    category: "Connection",
    videoUrl: "https://placehold.co/300x150/527f3a/e8d0a2?text=Video",
  },
];
const INITIAL_ONBOARDING: OnboardingStatus = {
  step: 1,
  complete: false,
  partnerSynced: false,
};

// ====================================================================================================
// UTILITY FUNCTIONS (AI Mock)
// ====================================================================================================

const mockGeminiCoach = async (
  prompt: string
): Promise<{ advice: string; starters: string[] }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const adviceTopic = prompt.toLowerCase().includes("conflict")
    ? "conflict resolution"
    : prompt.toLowerCase().includes("advice")
    ? "connection building"
    : "general guidance";

  let adviceText = "";
  let starters: string[] = [];

  if (adviceTopic === "conflict resolution") {
    adviceText =
      "Always aim for 'I' statements, not 'You' statements. Remember, the goal is mutual understanding, not winning. Acknowledge your partner's feelings first, even if you disagree with the substance of the argument.";
    starters = [
      "Tell me more about what triggered that feeling.",
      "I feel X when Y happens. Can we talk about it?",
      "What is one thing I can do right now to de-escalate?",
    ];
  } else {
    adviceText =
      "Daily micro-investments are key to strong relationships. A quick, genuine compliment or a shared 5-minute activity can significantly boost your Connection Score.";
    starters = [
      "What is your favorite memory from this week?",
      "What's one thing I can take off your plate tomorrow?",
      "If you could have any superpower, what would it be and why? (Fun Starter)",
    ];
  }

  return {
    advice: adviceText,
    starters: starters,
  };
};

// ====================================================================================================
// CORE APPLICATION COMPONENT
// ====================================================================================================

export const App: React.FC = () => {
  // --- STATE (LOCAL ONLY) ---
  // Mock User ID, since there is no actual authentication
  const userId = MOCK_USER_ID;

  const [activeTab, setActiveTab] = useState<AppTab>("dashboard");
  const [currentScores, setCurrentScores] = useState<Score>(INITIAL_SCORES);
  const [weeklyTasks, setWeeklyTasks] = useState<WeeklyTask[]>(MOCK_TASKS);
  const [journalEntries, setJournalEntries] =
    useState<JournalEntry[]>(MOCK_JOURNAL);
  const [onboardingStatus, setOnboardingStatus] =
    useState<OnboardingStatus>(INITIAL_ONBOARDING);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [coachInput, setCoachInput] = useState("");
  const [coachResponse, setCoachResponse] = useState<{
    advice: string;
    starters: string[];
  } | null>(null);
  const [isCoachLoading, setIsCoachLoading] = useState(false);

  // --- Utility: Show Floating Message ---
  const showMessageModal = useCallback(
    (message: string, duration: number = 3000) => {
      setModalMessage(message);
      setIsModalOpen(true);
      setTimeout(() => setIsModalOpen(false), duration);
    },
    []
  );

  // --- HANDLERS (Local State Management) ---

  const handleCoachSubmit = useCallback(async () => {
    if (!coachInput.trim()) return;
    setIsCoachLoading(true);
    setCoachResponse(null);
    const userPrompt = coachInput;
    setCoachInput("");

    try {
      const response = await mockGeminiCoach(userPrompt);
      setCoachResponse(response);
    } catch (e) {
      setCoachResponse({
        advice:
          "Sorry, the AI Coach is offline right now. Try a quick grounding exercise instead!",
        starters: [],
      });
    } finally {
      setIsCoachLoading(false);
    }
  }, [coachInput]);

  const handleJournalSubmit = useCallback(
    (text: string, isPrivate: boolean) => {
      if (!text.trim()) return;

      const newEntry: JournalEntry = {
        id: crypto.randomUUID(),
        text: text.trim(),
        authorId: userId,
        timestamp: new Date(),
        isPrivate: isPrivate,
      };

      setJournalEntries((prev) => [newEntry, ...prev]);
      showMessageModal(
        isPrivate
          ? "Private reflection saved locally."
          : "Shared moment saved locally!"
      );
    },
    [userId, showMessageModal]
  );

  const handleOnboardingStepComplete = useCallback(
    (stepIndex: number) => {
      const newStep = stepIndex + 1;
      const isComplete = newStep > 4;

      const newStatus: OnboardingStatus = {
        step: newStep,
        complete: isComplete,
        partnerSynced: onboardingStatus.partnerSynced,
      };

      setOnboardingStatus(newStatus);
      showMessageModal(
        isComplete
          ? "Onboarding Complete! Welcome to Blossom Pro."
          : `Step ${stepIndex} complete.`
      );
    },
    [onboardingStatus, showMessageModal]
  );

  const handleTaskCompletion = useCallback(
    (taskId: string) => {
      const taskToToggle = weeklyTasks.find((t) => t.id === taskId);
      if (!taskToToggle) return;

      const isCompleted = taskToToggle.completedBy.includes(userId);
      const newCompletedBy = isCompleted
        ? taskToToggle.completedBy.filter((id) => id !== userId)
        : [...taskToToggle.completedBy, userId];

      const updatedTasks = weeklyTasks.map((t) =>
        t.id === taskId ? { ...t, completedBy: newCompletedBy } : t
      );

      setWeeklyTasks(updatedTasks);

      // Locally update scores
      setCurrentScores((prev) => ({
        ...prev,
        connection: Math.min(100, prev.connection + (isCompleted ? -1 : 3)),
      }));

      showMessageModal(
        isCompleted
          ? "Task progress reverted."
          : "Task completed! Connection +3."
      );
    },
    [userId, weeklyTasks, showMessageModal]
  );

  const handlePauseAndBreathe = useCallback(() => {
    showMessageModal(
      "Initiating 'Pause & Breathe': Inhale for 4, Hold for 4, Exhale for 6. Focus on the calming effect of the warm colors.",
      8000
    );
  }, [showMessageModal]);

  // ====================================================================================================
  // THEMED UI COMPONENTS (Unchanged from V4, but simplified dependencies)
  // ====================================================================================================

  /** Displays a sunflower-themed gauge for relationship scores. */
  const ScoreGauge: React.FC<{
    score: number;
    label: string;
    color: string;
  }> = ({ score, label, color }) => {
    const circumference = 2 * Math.PI * 45;
    const dashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="flex flex-col items-center w-28 h-28 relative">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Petals (Track) */}
          <circle
            r="45"
            cx="50%"
            cy="50%"
            fill="transparent"
            stroke={CREAM_NEUTRAL}
            strokeWidth="8"
          ></circle>
          {/* Progress (Sunflower) */}
          <circle
            r="45"
            cx="50%"
            cy="50%"
            fill="transparent"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.15))" }}
          ></circle>
        </svg>
        <div className="absolute flex flex-col items-center justify-center h-full">
          <span className={`text-2xl font-black ${TEXT_PRIMARY}`}>
            {score}%
          </span>
          <span className={`text-xs mt-0.5 font-medium text-gray-600`}>
            {label}
          </span>
        </div>
      </div>
    );
  };

  /** Component for the mobile navigation tabs (Calming Look). */
  const NavItem: React.FC<{
    icon: string;
    label: string;
    tab: AppTab;
    currentTab: AppTab;
    setTab: (t: AppTab) => void;
  }> = ({ icon, label, tab, currentTab, setTab }) => {
    const isActive = currentTab === tab;
    const activeColor = isActive ? EARTH_BROWN : "gray-400";

    const getIcon = (name: string) => {
      const baseProps = `w-6 h-6 mx-auto transition-colors duration-200`;
      const strokeColor = activeColor;

      // Using clean, elegant Lucide-style SVG icons
      switch (name) {
        case "home":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={baseProps}
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          );
        case "check":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={baseProps}
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 2 2 4-4" />
            </svg>
          );
        case "coach":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={baseProps}
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3 3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" />
              <path d="M22 10s-2 1.5-2 3c0 2-4 3-4 3s-2-1.5-2-3c0-2 4-3 4-3ZM2 10s2 1.5 2 3c0 2 4 3 4 3s2-1.5 2-3c0-2-4-3-4-3Z" />
            </svg>
          );
        case "journal":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={baseProps}
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h.01" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M8 2v4" />
              <path d="M16 2v4" />
            </svg>
          );
        case "conflict":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={baseProps}
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          );
        case "settings":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={baseProps}
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.46a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.44a2 2 0 0 0 2 2v.18a2 2 0 0 1 1 1.73l.43.25a2 2 0 0 0 2 0l.15-.08a2 2 0 0 1 2.73.73l.78 1.46a2 2 0 0 0 .73 2.73l.15-.08a2 2 0 0 1 1-1.73v-.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 0 2 0l.15.08a2 2 0 0 1 2.73-.73l.78-1.46a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.73v-.44a2 2 0 0 0-2-2v-.18a2 2 0 0 1-1-1.73l-.43-.25a2 2 0 0 0 0-2l-.15-.08a2 2 0 0 1-1-1.73v-.44a2 2 0 0 0-2-2v-.18a2 2 0 0 1-1-1.73l-.43-.25a2 2 0 0 0-2 0l-.15.08A2 2 0 0 1 12.22 2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <button
        onClick={() => setTab(tab)}
        className={`flex flex-col items-center justify-center p-2 flex-1 transition-all duration-300 transform ${
          isActive ? "scale-105" : "hover:scale-105"
        }`}
      >
        {getIcon(icon)}
        <span
          className={`text-xs mt-0.5 font-medium transition-colors duration-200`}
          style={{ color: activeColor }}
        >
          {label}
        </span>
        {isActive && (
          <div
            className="h-1 w-6 absolute bottom-0 rounded-t-full"
            style={{ backgroundColor: SUNFLOWER_ACCENT }}
          ></div>
        )}
      </button>
    );
  };

  // ====================================================================================================
  // 1. DASHBOARD COMPONENT (Scores, Habits, Games)
  // ====================================================================================================

  const Dashboard = () => {
    const MOCK_HABITS = [
      { id: "h1", name: "Daily Check-in", streak: 14, committed: true },
      { id: "h2", name: "Morning Ritual", streak: 5, committed: false },
    ];

    const MOCK_GAME_CARD = ({
      title,
      icon,
    }: {
      title: string;
      icon: string;
    }) => (
      <div
        className={`${CARD_STYLE} flex flex-col items-center justify-center p-4 cursor-pointer text-center bg-white border-[${SUNFLOWER_ACCENT}]`}
        onClick={() => showMessageModal(`Starting game: ${title}`)}
      >
        <span className="text-3xl mb-2">{icon}</span>
        <span className={`text-sm font-semibold ${TEXT_PRIMARY}`}>{title}</span>
      </div>
    );

    return (
      <div className="p-5 space-y-8">
        <h2
          className={`text-3xl font-extrabold pb-3 ${TEXT_PRIMARY}`}
          style={{ borderBottom: `3px solid ${SUNFLOWER_ACCENT}` }}
        >
          Welcome Back
        </h2>

        {/* 9. Relationship Score Dashboard */}
        <div className={`${CARD_STYLE} bg-white border-[${SUNFLOWER_ACCENT}]`}>
          <h3
            className={`text-xl font-bold mb-6 ${TEXT_PRIMARY} flex items-center`}
          >
            <span className="text-2xl mr-2" style={{ color: LUSH_GREEN }}>
              🌱
            </span>{" "}
            Current Growth Metrics
          </h3>
          <div className="grid grid-cols-2 gap-y-6 justify-items-center">
            <ScoreGauge
              score={currentScores.communication}
              label="Communication"
              color={SUNFLOWER_ACCENT}
            />
            <ScoreGauge
              score={currentScores.connection}
              label="Connection"
              color={LUSH_GREEN}
            />
            <ScoreGauge
              score={currentScores.trust}
              label="Trust"
              color={EARTH_BROWN}
            />
            <ScoreGauge
              score={currentScores.emotionalIntimacy}
              label="Intimacy"
              color={WARM_SHADOW}
            />
          </div>
        </div>

        {/* 10. Habit Builder for Couples */}
        <div className={`${CARD_STYLE} bg-white border-[${LUSH_GREEN}]`}>
          <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
            Shared Habits & Streaks (Local)
          </h3>
          <div className="space-y-3">
            {MOCK_HABITS.map((h) => (
              <div
                key={h.id}
                className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-300 ${TEXT_PRIMARY}`}
                style={{
                  borderColor: h.committed ? LUSH_GREEN : SUNFLOWER_ACCENT,
                  backgroundColor: h.committed ? "#f5fff5" : CREAM_NEUTRAL,
                }}
              >
                <span className="font-semibold">{h.name}</span>
                <div className="flex items-center space-x-2">
                  <span
                    className="text-sm font-medium"
                    style={{ color: h.committed ? LUSH_GREEN : EARTH_BROWN }}
                  >
                    {h.committed ? "Committed" : "Pending"}
                  </span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: LUSH_GREEN }}
                  >
                    {h.streak} 🔥
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            className={`w-full mt-5 py-3 text-lg font-bold rounded-xl text-white transition hover:opacity-90 active:scale-[0.98]`}
            style={{ backgroundColor: EARTH_BROWN }}
            onClick={() =>
              showMessageModal("Feature not available in local mode.")
            }
          >
            <span className="text-2xl align-middle mr-1">+</span> Add New Ritual
          </button>
        </div>

        {/* 11. Games & Fun Features */}
        <div className={`${CARD_STYLE} bg-white border-[${WARM_SHADOW}]`}>
          <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
            Play & Connect
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <MOCK_GAME_CARD title="Partner Quiz" icon="🧠" />
            <MOCK_GAME_CARD title="Daily Cute" icon="💖" />
            <MOCK_GAME_CARD title="Compatibility" icon="💫" />
          </div>
        </div>
      </div>
    );
  };

  // ====================================================================================================
  // 2. CHECK-IN COMPONENT (Daily Check-ins, Weekly Tasks)
  // ====================================================================================================

  const CheckIn = () => {
    const [checkIn, setCheckIn] = useState<DailyCheckIn>({
      mood: "neutral",
      energyLevel: 3,
      wentWell: "",
      stressedBy: "",
      insights: "",
      timestamp: new Date(),
      userId: userId,
    });

    const MoodSelector = ({
      selected,
      onChange,
    }: {
      selected: string;
      onChange: (m: string) => void;
    }) => (
      <div className="flex justify-around mt-2">
        {["great", "good", "neutral", "bad", "terrible"].map((mood) => (
          <button
            key={mood}
            className={`p-3 rounded-2xl transition transform duration-200 active:scale-95 border-2 w-14 h-14 flex flex-col items-center justify-center text-xl shadow-md`}
            style={{
              borderColor: selected === mood ? EARTH_BROWN : CREAM_NEUTRAL,
              backgroundColor: selected === mood ? SUNFLOWER_ACCENT : "white",
              color: selected === mood ? EARTH_BROWN : "gray-400",
            }}
            onClick={() => onChange(mood)}
          >
            {mood === "great" && "😊"}
            {mood === "good" && "🙂"}
            {mood === "neutral" && "😐"}
            {mood === "bad" && "🙁"}
            {mood === "terrible" && "😠"}
            <span className="text-xs font-medium capitalize mt-1 hidden sm:inline">
              {mood}
            </span>
          </button>
        ))}
      </div>
    );

    const handleCheckInSubmit = () => {
      // In a real app, this would be saved to a 'checkins' collection.
      // Here, we just acknowledge it and reset the form.
      showMessageModal(
        `Check-in for mood '${checkIn.mood}' submitted locally!`
      );
      setCheckIn({
        mood: "neutral",
        energyLevel: 3,
        wentWell: "",
        stressedBy: "",
        insights: "",
        timestamp: new Date(),
        userId: userId,
      });

      // Mock score adjustment
      setCurrentScores((prev) => ({
        ...prev,
        communication: Math.min(100, prev.communication + 1),
      }));
    };

    return (
      <div className="p-5 space-y-8">
        <h2
          className={`text-3xl font-extrabold pb-3 ${TEXT_PRIMARY}`}
          style={{ borderBottom: `3px solid ${LUSH_GREEN}` }}
        >
          Daily Check-in
        </h2>

        {/* 2. Daily Relationship Check-ins */}
        <div
          className={`${CARD_STYLE} bg-white border-[${LUSH_GREEN}] space-y-4`}
        >
          <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
            How was your day?
          </h3>

          <label className="block text-sm font-medium text-gray-600">
            Mood Check-in
          </label>
          <MoodSelector
            selected={checkIn.mood}
            onChange={(m) =>
              setCheckIn((prev) => ({ ...prev, mood: m as any }))
            }
          />

          <label className="block text-sm font-medium text-gray-600 pt-3">
            Energy Level ({checkIn.energyLevel}/5 - How much capacity do you
            have for connecting?)
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={checkIn.energyLevel}
            onChange={(e) =>
              setCheckIn((prev) => ({
                ...prev,
                energyLevel: parseInt(e.target.value),
              }))
            }
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              backgroundColor: CREAM_NEUTRAL,
              accentColor: SUNFLOWER_ACCENT,
            }}
          />

          <label className="block text-sm font-medium text-gray-600 pt-3">
            What went well today?
          </label>
          <textarea
            value={checkIn.wentWell}
            onChange={(e) =>
              setCheckIn((prev) => ({ ...prev, wentWell: e.target.value }))
            }
            className={`w-full p-3 border rounded-xl focus:ring-2`}
            rows={2}
            style={{
              borderColor: CREAM_NEUTRAL,
              focusBorderColor: SUNFLOWER_ACCENT,
              color: EARTH_BROWN,
            }}
          ></textarea>

          <label className="block text-sm font-medium text-gray-600 pt-3">
            What stressed you today?
          </label>
          <textarea
            value={checkIn.stressedBy}
            onChange={(e) =>
              setCheckIn((prev) => ({ ...prev, stressedBy: e.target.value }))
            }
            className={`w-full p-3 border rounded-xl focus:ring-2`}
            rows={2}
            style={{
              borderColor: CREAM_NEUTRAL,
              focusBorderColor: SUNFLOWER_ACCENT,
              color: EARTH_BROWN,
            }}
          ></textarea>

          <button
            onClick={handleCheckInSubmit}
            className={`w-full py-3 text-lg font-bold rounded-xl text-white transition hover:opacity-90 active:scale-[0.98] mt-4`}
            style={{ backgroundColor: LUSH_GREEN }}
          >
            Submit & Grow 🌱
          </button>

          {/* Auto-generated insights */}
          <div
            className={`mt-4 p-4 rounded-xl border-l-4 border-r-4`}
            style={{
              backgroundColor: CREAM_NEUTRAL,
              borderColor: SUNFLOWER_ACCENT,
            }}
          >
            <p
              className="font-semibold text-sm mb-1"
              style={{ color: EARTH_BROWN }}
            >
              AI Insight:
            </p>
            <p className="text-sm text-gray-700">
              "Your current mood suggests a need for a relaxed evening. Remember
              to prioritize rest and communication."
            </p>
          </div>
        </div>

        {/* 4. Weekly Growth Tasks */}
        <div className={`${CARD_STYLE} bg-white border-[${LUSH_GREEN}]`}>
          <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
            Weekly Growth Tasks (Local)
          </h3>
          <div className="space-y-4">
            {weeklyTasks.map((task) => {
              const isCompletedByMe = task.completedBy.includes(userId);
              const completionCount = task.completedBy.length;

              return (
                <div
                  key={task.id}
                  className={`p-4 rounded-xl border transition duration-300 shadow-sm ${
                    isCompletedByMe ? "bg-[#f0fff0]" : "bg-gray-50"
                  }`}
                  style={{
                    borderColor: isCompletedByMe
                      ? LUSH_GREEN
                      : SUNFLOWER_ACCENT,
                  }}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-semibold" style={{ color: EARTH_BROWN }}>
                      {task.title}
                    </p>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: EARTH_BROWN }}
                    >
                      {completionCount}/2 (Mock)
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {task.description}
                  </p>
                  <button
                    onClick={() => handleTaskCompletion(task.id)}
                    className={`mt-3 w-full py-2 text-sm font-semibold rounded-lg transition hover:opacity-90 active:scale-[0.99]`}
                    style={{
                      backgroundColor: isCompletedByMe
                        ? LUSH_GREEN
                        : SUNFLOWER_ACCENT,
                      color: isCompletedByMe ? "white" : EARTH_BROWN,
                    }}
                  >
                    {isCompletedByMe
                      ? "Completed! 🎉 (Click to Undo)"
                      : "Mark as Complete"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // ====================================================================================================
  // 3. COACH COMPONENT (AI Coach, Resource Library)
  // ====================================================================================================

  const Coach = () => (
    <div className="p-5 space-y-8">
      <h2
        className={`text-3xl font-extrabold pb-3 ${TEXT_PRIMARY}`}
        style={{ borderBottom: `3px solid ${SUNFLOWER_ACCENT}` }}
      >
        AI Relationship Coach (Mock)
      </h2>

      {/* 3. AI Relationship Coach - Ask Blossom */}
      <div
        className={`${CARD_STYLE} bg-white border-[${SUNFLOWER_ACCENT}] space-y-4`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${TEXT_PRIMARY} flex items-center`}
        >
          <span className="text-2xl mr-2" style={{ color: SUNFLOWER_ACCENT }}>
            💡
          </span>{" "}
          Ask Blossom
        </h3>

        <div
          className={`p-4 rounded-xl shadow-inner`}
          style={{ backgroundColor: CREAM_NEUTRAL }}
        >
          <p className="text-sm text-gray-700 font-semibold mb-2">
            Blossom's Advice:
          </p>
          {isCoachLoading ? (
            <div className="text-center py-4">
              <div
                className="w-6 h-6 border-2 border-gray-300 border-t-transparent border-solid rounded-full animate-spin mx-auto"
                style={{ borderTopColor: SUNFLOWER_ACCENT }}
              ></div>
              <p className="text-sm text-gray-500 mt-2">
                Generating personalized, empathetic advice...
              </p>
            </div>
          ) : coachResponse ? (
            <div className="space-y-3">
              <p className="text-sm italic" style={{ color: EARTH_BROWN }}>
                {coachResponse.advice}
              </p>
              {coachResponse.starters.length > 0 && (
                <div
                  className="pt-2 border-t text-xs"
                  style={{ borderColor: SUNFLOWER_ACCENT }}
                >
                  <p className="font-medium text-gray-600">
                    Conversation Starters:
                  </p>
                  <ul className="list-disc list-inside mt-1 space-y-1 pl-2">
                    {coachResponse.starters.map((s, i) => (
                      <li key={i} className="text-gray-700">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              How can I assist your relationship today? Ask for personalized
              advice, conflict guidance, or conversation ideas.
            </p>
          )}
        </div>

        <textarea
          value={coachInput}
          onChange={(e) => setCoachInput(e.target.value)}
          className={`w-full p-4 border rounded-xl focus:ring-2`}
          rows={3}
          placeholder="E.g., How can we handle stress better as a team? Or, give us a fun prompt."
          style={{
            borderColor: CREAM_NEUTRAL,
            focusBorderColor: SUNFLOWER_ACCENT,
            color: EARTH_BROWN,
          }}
          disabled={isCoachLoading}
        ></textarea>

        <button
          onClick={handleCoachSubmit}
          disabled={isCoachLoading || !coachInput.trim()}
          className={`w-full py-3 text-lg font-bold rounded-xl text-white transition hover:brightness-110 active:scale-[0.98] disabled:opacity-50`}
          style={{ backgroundColor: SUNFLOWER_ACCENT, color: EARTH_BROWN }}
        >
          {isCoachLoading ? "Blossom is Thinking..." : "Ask Blossom"}
        </button>
      </div>

      {/* 12. Resource Library */}
      <div
        className={`${CARD_STYLE} bg-white border-[${LUSH_GREEN}] space-y-4`}
      >
        <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
          Resource Library (Videos & Articles)
        </h3>
        <div className="space-y-3">
          {MOCK_RESOURCES.map((res, index) => (
            <div
              key={index}
              className={`flex items-center p-3 rounded-lg border-l-4 bg-gray-50 transition hover:bg-gray-100`}
              style={{ borderColor: LUSH_GREEN }}
            >
              <div
                className="flex-shrink-0 text-3xl mr-3"
                style={{ color: SUNFLOWER_ACCENT }}
              >
                📚
              </div>
              <div className="flex-grow">
                <p
                  className="font-semibold text-sm"
                  style={{ color: EARTH_BROWN }}
                >
                  {res.title}
                </p>
                <p className="text-xs text-gray-500">
                  {res.category} • {res.duration}
                </p>
              </div>
              <button
                className="text-sm font-semibold px-3 py-1 rounded-full text-white transition active:scale-95"
                style={{ backgroundColor: EARTH_BROWN }}
                onClick={() =>
                  showMessageModal(`Opening resource: ${res.title}`)
                }
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ====================================================================================================
  // 4. JOURNAL COMPONENT (Journaling, Calendar)
  // ====================================================================================================

  const Journal = () => {
    const [viewMode, setViewMode] = useState<"private" | "shared">("shared");
    const [newEntryText, setNewEntryText] = useState("");

    const filteredEntries = journalEntries
      .filter((e) => e.isPrivate === (viewMode === "private"))
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    // 8. Shared Calendar (Mocked View)
    const CalendarView = () => (
      <div className={`${CARD_STYLE} bg-white border-[${EARTH_BROWN}]`}>
        <h3 className={`text-lg font-bold mb-3 ${TEXT_PRIMARY}`}>
          Shared Calendar & Milestones (Mock)
        </h3>
        <div
          className="text-center py-6 border-2 rounded-xl"
          style={{ borderColor: CREAM_NEUTRAL }}
        >
          <p className="text-3xl mb-2" style={{ color: LUSH_GREEN }}>
            🗓️
          </p>
          <p className="font-semibold text-gray-700">
            Next Date Night: Dec 12th
          </p>
          <p className="text-sm text-gray-500">
            Milestone: 1 Year Anniversary in 45 Days!
          </p>
        </div>
        <button
          className={`w-full mt-3 py-3 text-lg font-bold rounded-xl text-white transition hover:opacity-90 active:scale-[0.98]`}
          style={{ backgroundColor: SUNFLOWER_ACCENT, color: EARTH_BROWN }}
          onClick={() =>
            showMessageModal("Planning feature not active in local mode.")
          }
        >
          + Plan Date Night
        </button>
      </div>
    );

    const JournalEntryCard: React.FC<{ entry: JournalEntry }> = ({ entry }) => {
      const authorLabel =
        entry.authorId === userId ? "You (Me)" : "Partner (Them)";
      const borderColor = entry.isPrivate ? EARTH_BROWN : LUSH_GREEN;

      return (
        <div
          className={`bg-white p-4 rounded-xl shadow-md border-l-4 transition-all duration-300`}
          style={{ borderColor: borderColor }}
        >
          <div className="flex justify-between items-start mb-2">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white`}
              style={{
                backgroundColor: entry.isPrivate ? EARTH_BROWN : LUSH_GREEN,
              }}
            >
              {entry.isPrivate
                ? `Private by ${authorLabel}`
                : `Shared by ${authorLabel}`}
            </span>
            <span className="text-xs text-gray-400">
              {entry.timestamp.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <p className={`text-sm break-words text-gray-800`}>{entry.text}</p>
        </div>
      );
    };

    return (
      <div className="p-5 space-y-8">
        <h2
          className={`text-3xl font-extrabold pb-3 ${TEXT_PRIMARY}`}
          style={{ borderBottom: `3px solid ${EARTH_BROWN}` }}
        >
          Dual-View Journal (Local)
        </h2>

        <CalendarView />

        {/* 5. Journaling (Dual-View) - Input */}
        <div
          className={`${CARD_STYLE} bg-white border-[${LUSH_GREEN}] space-y-4`}
        >
          <h3 className={`text-lg font-bold ${TEXT_PRIMARY}`}>New Entry</h3>
          <div
            className="flex space-x-2 p-1 rounded-xl"
            style={{ backgroundColor: CREAM_NEUTRAL }}
          >
            <button
              className={`flex-1 py-2 rounded-xl text-sm font-semibold transition active:scale-95 ${
                viewMode === "private"
                  ? `bg-white shadow-md ${TEXT_PRIMARY}`
                  : "bg-transparent text-gray-600"
              }`}
              onClick={() => setViewMode("private")}
            >
              Private Reflection 🔒
            </button>
            <button
              className={`flex-1 py-2 rounded-xl text-sm font-semibold transition active:scale-95 ${
                viewMode === "shared"
                  ? `bg-white shadow-md ${TEXT_PRIMARY}`
                  : "bg-transparent text-gray-600"
              }`}
              onClick={() => setViewMode("shared")}
            >
              Shared Moment ✨
            </button>
          </div>
          <textarea
            value={newEntryText}
            onChange={(e) => setNewEntryText(e.target.value)}
            className={`w-full p-4 border rounded-xl focus:ring-2`}
            rows={4}
            placeholder={
              viewMode === "private"
                ? "What is an honest feeling you need to process?"
                : "What positive moment do you want to share with your partner?"
            }
            style={{
              borderColor: CREAM_NEUTRAL,
              focusBorderColor: SUNFLOWER_ACCENT,
              color: EARTH_BROWN,
            }}
          ></textarea>
          <button
            onClick={() => {
              handleJournalSubmit(newEntryText, viewMode === "private");
              setNewEntryText("");
            }}
            disabled={!newEntryText.trim()}
            className={`w-full py-3 text-lg font-bold rounded-xl text-white transition hover:opacity-90 active:scale-[0.98] disabled:opacity-50`}
            style={{ backgroundColor: LUSH_GREEN }}
          >
            {viewMode === "private" ? "Save Private Entry" : "Share Moment"}
          </button>
        </div>

        {/* 5. Journaling (Dual-View) - Timeline */}
        <div className="space-y-5 pt-4">
          <h3 className={`text-xl font-bold ${TEXT_PRIMARY}`}>
            {viewMode === "private"
              ? "Your Private Thoughts"
              : "Shared Moments Timeline"}
          </h3>
          {filteredEntries.length === 0 ? (
            <p className="text-center text-gray-500 pt-8 italic">
              No entries yet. Start writing!
            </p>
          ) : (
            filteredEntries.map((entry) => (
              <JournalEntryCard key={entry.id} entry={entry} />
            ))
          )}
        </div>
      </div>
    );
  };

  // ====================================================================================================
  // 5. CONFLICT COMPONENT (Repair System, Emergency Tools)
  // ====================================================================================================

  const Conflict = () => {
    const [repairStep, setRepairStep] = useState(1);
    const [repairLog, setRepairLog] = useState({
      trigger: "",
      unmetNeed: "",
      apology: "",
      actionPlan: "",
    });

    const handleRepairStepNext = () =>
      setRepairStep((prev) => Math.min(6, prev + 1));
    const handleRepairStepReset = () => {
      setRepairStep(1);
      setRepairLog({ trigger: "", unmetNeed: "", apology: "", actionPlan: "" });
      showMessageModal(
        "Conflict repair flow reset. Focus on repair, not winning."
      );
    };

    // 7. Conflict Repair System - Multi-step Flow
    const RepairFlow = () => {
      const steps = [
        {
          id: 1,
          title: "1. Pause & Ground",
          prompt:
            "Before writing, use the 'Pause & Breathe' tool below. Acknowledge your physical state.",
        },
        {
          id: 2,
          title: "2. Identify Trigger",
          prompt:
            "What specific event or word *triggered* your reaction? (Use 'I saw/heard...')",
        },
        {
          id: 3,
          title: "3. Name Unmet Need",
          prompt:
            "What underlying need (security, respect, connection, autonomy) wasn't met?",
        },
        {
          id: 4,
          title: "4. Draft Apology",
          prompt:
            "Acknowledge your impact, express regret, and take responsibility (e.g., 'I regret that I...')",
        },
        {
          id: 5,
          title: "5. Action Plan",
          prompt:
            "Write one concrete, forward-looking action to prevent this in the future.",
        },
        {
          id: 6,
          title: "6. Summary & Share",
          prompt: "Ready to share with your partner? Review the summary below.",
        },
      ];

      const currentStep = steps.find((s) => s.id === repairStep) || steps[0];
      const isLastStep = repairStep === 6;

      // This is a bit of a hack to ensure the correct state field is updated dynamically
      const updateLogField = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const fields = ["trigger", "unmetNeed", "apology", "actionPlan"];
        if (repairStep >= 2 && repairStep <= 5) {
          const fieldName = fields[repairStep - 2] as keyof typeof repairLog;
          setRepairLog({ ...repairLog, [fieldName]: e.target.value });
        }
      };

      return (
        <div
          className={`${CARD_STYLE} bg-white border-[${EARTH_BROWN}] space-y-4`}
        >
          <h3
            className={`text-xl font-bold mb-4 ${TEXT_PRIMARY} flex items-center`}
          >
            <span className="text-2xl mr-2" style={{ color: SUNFLOWER_ACCENT }}>
              🛠️
            </span>{" "}
            {currentStep.title}
          </h3>
          <p className="text-sm text-gray-700 italic mb-4">
            {currentStep.prompt}
          </p>

          {repairStep > 1 && repairStep < 6 && (
            <textarea
              value={
                (repairLog as any)[
                  ["trigger", "unmetNeed", "apology", "actionPlan"][
                    repairStep - 2
                  ]
                ]
              }
              onChange={updateLogField}
              className={`w-full p-4 border rounded-xl focus:ring-2`}
              rows={4}
              style={{
                borderColor: CREAM_NEUTRAL,
                focusBorderColor: SUNFLOWER_ACCENT,
                color: EARTH_BROWN,
              }}
              placeholder={`Your healing thoughts for Step ${repairStep}...`}
            ></textarea>
          )}

          {isLastStep && (
            <div
              className="p-4 rounded-xl border-2"
              style={{
                borderColor: SUNFLOWER_ACCENT,
                backgroundColor: CREAM_NEUTRAL,
              }}
            >
              <p
                className="font-bold text-base mb-2"
                style={{ color: EARTH_BROWN }}
              >
                Final Repair Summary (Local):
              </p>
              <p className="text-sm text-gray-700">
                **Trigger:** {repairLog.trigger || "N/A"}
              </p>
              <p className="text-sm text-gray-700">
                **Unmet Need:** {repairLog.unmetNeed || "N/A"}
              </p>
              <p className="text-sm text-gray-700">
                **Apology Draft:** {repairLog.apology || "N/A"}
              </p>
              <p className="text-sm text-gray-700">
                **Action Plan:** {repairLog.actionPlan || "N/A"}
              </p>
              <p className="text-xs pt-2 text-red-500">
                Note: In a real app, this would be saved and shared with your
                partner.
              </p>
            </div>
          )}

          <div className="flex space-x-2 pt-2">
            {isLastStep ? (
              <button
                onClick={handleRepairStepReset}
                className={`flex-1 py-3 text-lg font-bold rounded-xl text-white transition hover:opacity-90 active:scale-[0.98]`}
                style={{ backgroundColor: EARTH_BROWN }}
              >
                Archive & Start Fresh
              </button>
            ) : (
              <button
                onClick={handleRepairStepNext}
                className={`flex-1 py-3 text-lg font-bold rounded-xl text-white transition hover:opacity-90 active:scale-[0.98]`}
                style={{ backgroundColor: LUSH_GREEN }}
              >
                Next Step ({repairStep}/5)
              </button>
            )}
          </div>
        </div>
      );
    };

    return (
      <div className="p-5 space-y-8">
        <h2
          className={`text-3xl font-extrabold pb-3 ${TEXT_PRIMARY}`}
          style={{ borderBottom: `3px solid ${EARTH_BROWN}` }}
        >
          Conflict Resolution
        </h2>

        <RepairFlow />

        {/* 13. Emergency Tools */}
        <div
          className={`${CARD_STYLE} bg-white border-[${SUNFLOWER_ACCENT}] space-y-4`}
        >
          <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
            Emergency Protocols
          </h3>

          <button
            onClick={handlePauseAndBreathe}
            className={`w-full py-4 px-6 text-white text-lg font-bold rounded-xl shadow-lg transition transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus:ring-4 focus:ring-red-300`}
            style={{ backgroundColor: SUNFLOWER_ACCENT, color: EARTH_BROWN }}
          >
            <span className="text-2xl mr-2">🌼</span> PAUSE & BREATHE
          </button>

          <button
            onClick={() =>
              showMessageModal(
                "Timeout Protocol: Stop, separate for 20 mins, then agree to return non-critically. Your relationship is safe.",
                8000
              )
            }
            className={`w-full py-4 px-6 text-white text-lg font-bold rounded-xl shadow-lg transition transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus:ring-4 focus:ring-red-300`}
            style={{ backgroundColor: EARTH_BROWN }}
          >
            TIMEOUT PROTOCOL
          </button>
        </div>
      </div>
    );
  };

  // ====================================================================================================
  // 6. SETTINGS COMPONENT (Onboarding, Privacy, Monetization)
  // ====================================================================================================

  const Settings = () => {
    // 1. Couple Onboarding
    const OnboardingFlow = () => {
      const steps = [
        {
          id: 1,
          title: "Personality Assessment",
          description:
            "Complete the initial individual personality and attachment style test.",
        },
        {
          id: 2,
          title: "Relationship Style Test",
          description:
            "Determine your primary communication and conflict styles.",
        },
        {
          id: 3,
          title: "Love Language Test",
          description:
            "Take the test to identify your primary and secondary love languages.",
        },
        {
          id: 4,
          title: "Sync Profiles",
          description:
            "Share your Couple ID with your partner and input theirs to sync profiles.",
        },
      ];

      const currentStepIndex = onboardingStatus.step - 1;
      const isFinished = onboardingStatus.complete;

      return (
        <div
          className={`${CARD_STYLE} bg-white border-[${SUNFLOWER_ACCENT}] space-y-4`}
        >
          <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
            Onboarding Status (Local)
          </h3>

          <ol
            className="relative border-l-4 ml-2"
            style={{ borderColor: CREAM_NEUTRAL }}
          >
            {steps.map((step, index) => {
              const isDone = index < currentStepIndex || isFinished;
              const isCurrent = index === currentStepIndex && !isFinished;

              return (
                <li key={step.id} className="mb-6 ml-4">
                  <div
                    className={`absolute w-4 h-4 rounded-full mt-1.5 -left-2 border-2 ${
                      isDone ? BG_GROWTH : isCurrent ? BG_ACCENT : "bg-white"
                    }`}
                    style={{ borderColor: EARTH_BROWN }}
                  ></div>
                  <h4
                    className={`text-base font-bold ${
                      isDone
                        ? TEXT_GROWTH
                        : isCurrent
                        ? TEXT_PRIMARY
                        : "text-gray-500"
                    }`}
                  >
                    {isDone ? "✅" : isCurrent ? "▶️" : "⏳"} {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 ml-1">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>

          {!isFinished && (
            <button
              onClick={() =>
                handleOnboardingStepComplete(onboardingStatus.step)
              }
              disabled={onboardingStatus.step > steps.length}
              className={`w-full py-3 text-lg font-bold rounded-xl transition hover:brightness-110 active:scale-[0.98] disabled:opacity-50`}
              style={{ backgroundColor: SUNFLOWER_ACCENT, color: EARTH_BROWN }}
            >
              {onboardingStatus.step > steps.length
                ? "Onboarding Complete"
                : `Complete Step ${onboardingStatus.step}`}
            </button>
          )}
        </div>
      );
    };

    // 14. Privacy & Safety
    const PrivacySettings = () => (
      <div
        className={`${CARD_STYLE} bg-white border-[${EARTH_BROWN}] space-y-4`}
      >
        <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
          Account Info (Local)
        </h3>

        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-sm font-medium text-gray-700">User ID</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold font-mono text-white`}
            style={{ backgroundColor: EARTH_BROWN }}
          >
            {userId}
          </span>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <span className="text-sm font-medium text-gray-700">Status</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold text-white`}
            style={{ backgroundColor: LUSH_GREEN }}
          >
            Offline Simulation
          </span>
        </div>
        <p className="text-xs text-gray-500 pt-2">
          All data is currently stored in your browser's memory and will be lost
          on refresh.
        </p>
      </div>
    );

    // 15. Monetization
    const MonetizationInfo = () => (
      <div
        className={`${CARD_STYLE} bg-white border-[${LUSH_GREEN}] space-y-4`}
      >
        <h3 className={`text-xl font-bold mb-4 ${TEXT_PRIMARY}`}>
          Blossom Pro Status
        </h3>
        <div
          className="p-4 rounded-xl border-l-4 border-r-4"
          style={{
            borderColor: SUNFLOWER_ACCENT,
            backgroundColor: CREAM_NEUTRAL,
          }}
        >
          <p
            className="font-bold text-base mb-1"
            style={{ color: EARTH_BROWN }}
          >
            Current Tier: Free
          </p>
          <p className="text-sm text-gray-700">
            Includes basic check-ins and limited features.
          </p>
        </div>
        <button
          className={`w-full py-3 text-lg font-bold rounded-xl text-white transition hover:brightness-110 active:scale-[0.98]`}
          style={{ backgroundColor: LUSH_GREEN }}
          onClick={() =>
            showMessageModal("Pro features are mocked for this simulation.")
          }
        >
          Unlock Pro Features!
        </button>
      </div>
    );

    return (
      <div className="p-5 space-y-8">
        <h2
          className={`text-3xl font-extrabold pb-3 ${TEXT_PRIMARY}`}
          style={{ borderBottom: `3px solid ${SUNFLOWER_ACCENT}` }}
        >
          Account & Growth
        </h2>

        <OnboardingFlow />
        <PrivacySettings />
        <MonetizationInfo />
      </div>
    );
  };

  /** Helper for rendering the current tab content. */
  const RenderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "checkin":
        return <CheckIn />;
      case "coach":
        return <Coach />;
      case "journal":
        return <Journal />;
      case "conflict":
        return <Conflict />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  // ====================================================================================================
  // MAIN RENDER METHOD
  // ====================================================================================================

  return (
    <div
      className={`max-w-md mx-auto min-h-screen flex flex-col shadow-2xl font-sans`}
      style={{ backgroundColor: CREAM_NEUTRAL }}
    >
      {/* Header (Top Bar) - Warm and inviting */}
      <header
        className={`py-4 px-5 bg-white border-b shadow-md flex items-center justify-between sticky top-0 z-10`}
        style={{ borderBottomColor: WARM_SHADOW }}
      >
        <h1
          className={`text-3xl font-extrabold flex items-center`}
          style={{ color: EARTH_BROWN }}
        >
          <span className="text-3xl mr-1.5" style={{ color: SUNFLOWER_ACCENT }}>
            🌻
          </span>{" "}
          Blossom
        </h1>
        <div
          className={`text-xs font-semibold px-3 py-1 rounded-full text-white`}
          style={{ backgroundColor: LUSH_GREEN }}
        >
          <span className="mr-1">💖</span> {currentScores.emotionalIntimacy}%
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto pb-20">
        <RenderContent />
      </main>

      {/* Floating Modal for Alerts - Softly styled */}
      {isModalOpen && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 p-3 rounded-xl shadow-xl text-sm font-semibold transition-opacity duration-300 animate-fadeInOut`}
          style={{ backgroundColor: SUNFLOWER_ACCENT, color: EARTH_BROWN }}
        >
          {modalMessage}
        </div>
      )}

      {/* Mobile Navigation (Fixed Bottom) */}
      <nav
        className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t shadow-xl z-20`}
        style={{ borderColor: CREAM_NEUTRAL }}
      >
        <div className="flex justify-around h-16">
          <NavItem
            icon="home"
            label="Dash"
            tab="dashboard"
            currentTab={activeTab}
            setTab={setActiveTab}
          />
          <NavItem
            icon="check"
            label="Check-In"
            tab="checkin"
            currentTab={activeTab}
            setTab={setActiveTab}
          />
          <NavItem
            icon="coach"
            label="Coach"
            tab="coach"
            currentTab={activeTab}
            setTab={setActiveTab}
          />
          <NavItem
            icon="journal"
            label="Journal"
            tab="journal"
            currentTab={activeTab}
            setTab={setActiveTab}
          />
          <NavItem
            icon="conflict"
            label="Conflict"
            tab="conflict"
            currentTab={activeTab}
            setTab={setActiveTab}
          />
          <NavItem
            icon="settings"
            label="Settings"
            tab="settings"
            currentTab={activeTab}
            setTab={setActiveTab}
          />
        </div>
      </nav>
    </div>
  );
};

export default App;
