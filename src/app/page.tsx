import { getLastSubmission, getQuestions } from "./api";
import { Test } from "./components/Test";

interface HomeProps {
  searchParams: Promise<{ user: string }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const user = (await searchParams).user;
  const { questions } = await getQuestions(user);
  const { ok: userHasPreviousSumbission } = await getLastSubmission(user);

  return (
    <Test
      questions={questions}
      userHasPreviousSumbission={userHasPreviousSumbission}
      user={user}
    />
  );
};

export default Home;
