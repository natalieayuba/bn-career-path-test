"use server";

const baseUrl = "https://fhc-api.onrender.com";

const fetchFromApi = async (
  url: string,
  user: string,
  method: string = "GET",
) => {
  const res = await fetch(`${baseUrl}/${url}?user=${user}`, { method });
  return res.json();
};

export const getQuestions = async (user: string) =>
  fetchFromApi("questions", user);

export const getLastSubmission = async (user: string) =>
  fetchFromApi("submissions", user);

export const createSubmission = async (user: string) =>
  fetchFromApi("submissions", user, "POST");
