"use client";

import Image from "next/image";
import { useState } from "react";
import { createSubmission } from "../api";
import { IconButton, type IconButtonProps } from "./IconButton";

interface TestProps {
  questions: { id: string; text: string }[];
  userHasPreviousSumbission: boolean;
  user: string;
}

const details = [
  {
    icon: "https://fhc-frontend.onrender.com/assets/stopwatch.svg",
    label: "2 minutes",
  },
  {
    icon: "https://fhc-frontend.onrender.com/assets/clipboard-question.svg",
    label: "24 questions",
  },
];

const scaleOptions = [
  "Strongly disagree",
  "Moderately disagree",
  "Somewhat disagree",
  "Neither agree or disagree",
  "Moderately agree",
  "Strongly agree",
];

export const Test = ({
  questions,
  userHasPreviousSumbission,
  user,
}: TestProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(null),
  );
  const [transition, setTransition] = useState("");
  const progressLabel = `Q${currentQuestionIndex + 1}/${questions.length}`;
  const progressPercentage = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

  const animate = (callback: () => void) => {
    setTransition("-translate-x-full");
    setTimeout(() => {
      callback();
      setTransition("translate-x-0");
    }, 300);
  };

  const nextQuestion = () => setCurrentQuestionIndex(currentQuestionIndex + 1);
  const prevQuestion = () => setCurrentQuestionIndex(currentQuestionIndex - 1);

  const updateAnswer = (scaleOptionIndex: number) => {
    setAnswers(
      answers.map((a, i) => (i == currentQuestionIndex ? scaleOptionIndex : a)),
    );
    animate(nextQuestion);
    if (currentQuestionIndex === questions.length - 1) {
      createSubmission(user);
    }
  };

  const startScreen = (
    <>
      <header className="bg-blue/20 bg-[url(https://fhc-frontend.onrender.com/assets/discover-journey-maze.svg)] bg-cover bg-right-bottom bg-no-repeat bg-blend-screen">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-prose p-6">
            <h1 className="mb-2">Career Path Test</h1>
            <p className="mb-3 text-lg">
              Discover careers that match your skills and personality and
              receive personalised advice to guide your next steps.
            </p>
            <div className="flex gap-4">
              {details.map(({ icon, label }) => (
                <div
                  key={label}
                  className="text-secondary flex items-center gap-2"
                >
                  <Image src={icon} alt={label} width={16} height={16} />
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                {...(!userHasPreviousSumbission && { onClick: nextQuestion })}
                className="transition-filters flex h-14 items-center justify-center gap-3 rounded-full bg-orange px-6 text-lg font-semibold duration-150 hover:brightness-95"
              >
                {userHasPreviousSumbission ? "See results" : "Take the test"}
              </button>
              {["Flag", "Share"].map((action) => (
                <IconButton
                  key={action}
                  title={action}
                  name={action.toLowerCase() as IconButtonProps["name"]}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl p-6">
        <h2 className="mb-2">About this test</h2>
        <p>
          We&apos;ve analysed data from thousands of our graduate members across
          a range of sectors to understand which personalities, skills, and
          values best fit each career path. Take this test to discover what
          career path you might be suited to and how to get started.
        </p>
      </main>
    </>
  );

  const endScreen = (
    <div className="-mt-10 flex h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="relative mb-4 aspect-[4/3] h-48 overflow-hidden rounded-full shadow-[20px_20px_40px_0_white_inset,-20px_-20px_40px_0_white_inset]">
        <Image
          src="https://fhc-frontend.onrender.com/assets/discover-journey-maze.svg"
          alt="Graduation"
          className="-z-10 ml-3 object-cover object-right"
          fill
        />
      </div>
      <h1>Building your career path...</h1>
      <p>
        Well done on completing your test. Please wait while we load your
        results.
      </p>
    </div>
  );

  if (currentQuestionIndex < 0) {
    return startScreen;
  } else if (currentQuestionIndex === questions.length - 1) {
    return endScreen;
  }

  return (
    <>
      <header className="mx-auto max-w-7xl p-6">
        <h1 className="mb-2 text-lg">Career Path Quiz</h1>
        <div className="flex items-center gap-4">
          {currentQuestionIndex > 0 && (
            <IconButton
              name="arrowLeft"
              title="Back"
              onClick={() => animate(prevQuestion)}
            />
          )}
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-black/10">
            <div
              className="transition-width h-full rounded-full bg-blue duration-150"
              style={{ width: progressPercentage }}
            />
          </div>
          <div className="text-secondary">{progressLabel}</div>
          <IconButton
            name="close"
            title="Close"
            onClick={() => setCurrentQuestionIndex(-1)}
          />
        </div>
      </header>
      <main>
        <div
          className={`p-6 pt-0 transition-transform duration-300 ${transition}`}
        >
          <div className="mx-auto max-w-xl lg:mt-4">
            <p>
              In a job, I would be motivated by...
              <span className="mt-4 block text-xl font-medium">
                {questions[currentQuestionIndex].text}
              </span>
            </p>
            <div className="mt-6 space-y-4">
              {scaleOptions.map((option, index) => (
                <label
                  key={option}
                  className="flex h-14 cursor-pointer items-center gap-3 rounded-lg border border-black/10 px-6 transition-colors duration-150 hover:bg-blue/5 has-[:checked]:border-blue has-[:checked]:bg-blue/5"
                >
                  <input
                    type="radio"
                    className="peer hidden"
                    name="scaleOptions"
                    onChange={() => updateAnswer(index)}
                    checked={answers[currentQuestionIndex] === index}
                  />
                  <div className="relative size-4 rounded-full border border-black/15 bg-white peer-checked:border-blue peer-checked:after:absolute peer-checked:after:size-full peer-checked:after:rounded-full peer-checked:after:border-2 peer-checked:after:border-white peer-checked:after:bg-blue" />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
