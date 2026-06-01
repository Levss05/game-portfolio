export type EvidenceType = "Video" | "Screenshot" | "Manual Test" | "No evidence";

export type BugReport = {
  title: string;
  game: string;
  platform: string;
  severity: string;
  frequency: string;
  description: string;
  expectedResult: string;
  actualResult: string;
  stepsToReproduce: string[];
  status: string;
  evidenceType?: EvidenceType;
  evidenceUrl?: string;
};

export const bugReports: BugReport[] = [
  {
    title: "Bug #001 - Nidalee receives self-healing when switching forms",
    game: "League of Legends",
    platform: "PC",
    severity: "High",
    frequency: "Consistent",
    description:
      "During an ARAM match in League of Legends, the champion Nidalee received a considerable amount of self-healing after using her R ability to switch forms.",
    expectedResult:
      "The R ability should only switch between human form and cougar form, without granting additional self-healing.",
    actualResult:
      "When using the R ability, the champion switched forms and received self-healing.",
    stepsToReproduce: [
      "Enter an ARAM match using the champion Nidalee.",
      "During the match, use the R ability to switch between forms.",
      "Observe the health bar immediately after switching forms.",
      "Repeat the process to verify if the self-healing occurs again.",
    ],
    status: "Documented / Completed",
    evidenceType: "Video",
    evidenceUrl: "/evidence/bug-videos/Nidalee-Bug-Aram.mp4",
  },
  {
    title: "Bug #002 - Snake Game overlays displayed at the same time",
    game: "Snake Game",
    platform: "PC",
    severity: "High",
    frequency: "Consistent",
    description:
      "The start screen, game over screen, and victory screen were displayed at the same time inside the game area.",
    expectedResult:
      "Only one overlay should be visible at a time depending on the current game state.",
    actualResult:
      "Multiple overlays appeared together, causing the interface to look broken and making the game state unclear.",
    stepsToReproduce: [
      "Open the Snake Game page.",
      "Start or reset the game.",
      "Observe the game area after the overlays are rendered.",
      "Verify whether more than one overlay appears at the same time.",
    ],
    status: "Documented / Fixed",
    evidenceType: "Screenshot",
    evidenceUrl: "/evidence/bug-images/SnakeGame-Bug.png",
  },
  {
    title: "Bug #003 - Mario Jump restart button does not work on mobile",
    game: "Mario Jump",
    platform: "Mobile",
    severity: "High",
    frequency: "Consistent",
    description:
      "After losing the game on mobile, tapping the restart button did not restart the game as expected.",
    expectedResult:
      "The restart button should reset the game state and immediately start a new attempt.",
    actualResult:
      "Tapping the restart button did not trigger the expected restart behavior on mobile devices.",
    stepsToReproduce: [
      "Open Mario Jump on a mobile viewport or device.",
      "Start the game and collide with the pipe.",
      "Wait for the Game Over screen to appear.",
      "Tap the 'Play Again' button.",
      "Observe whether the game restarts.",
    ],
    status: "Documented / Fixed",
    evidenceType: "Manual Test",
    evidenceUrl: "",
  },
  {
    title:
      "Bug #004 - Mario character scales incorrectly after starting the game on mobile",
    game: "Mario Jump",
    platform: "Mobile",
    severity: "Medium",
    frequency: "Consistent",
    description:
      "The Mario character appeared correctly sized before the game started, but became larger after starting the game on mobile.",
    expectedResult:
      "The Mario character should keep an appropriate mobile size before and after the game starts.",
    actualResult:
      "The character size was overwritten by JavaScript when the game started, causing it to appear too large on mobile.",
    stepsToReproduce: [
      "Open Mario Jump using a mobile viewport.",
      "Observe the Mario character before starting the game.",
      "Start the game.",
      "Observe the character size after the game begins.",
    ],
    status: "Documented / Fixed",
    evidenceType: "Manual Test",
    evidenceUrl: "",
  },
  {
    title: "Bug #005 - Game iframe creates unwanted page scrolling on mobile",
    game: "Portfolio Game Pages",
    platform: "Mobile",
    severity: "Medium",
    frequency: "Intermittent",
    description:
      "Some embedded game pages caused unwanted vertical scrolling on mobile due to iframe height and game layout sizing.",
    expectedResult:
      "Game pages should fit properly within the mobile viewport without creating excessive or unnecessary scrolling.",
    actualResult:
      "The game area sometimes exceeded the visible screen height, causing the page to scroll awkwardly.",
    stepsToReproduce: [
      "Open a game page on a mobile viewport.",
      "Observe the iframe and game area size.",
      "Scroll through the page.",
      "Check whether the game layout creates unnecessary vertical scrolling.",
    ],
    status: "Documented / Improved",
    evidenceType: "Manual Test",
    evidenceUrl: "",
  },
];