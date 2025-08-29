import Forum from "../components/Forum";

export default function ForumPage() {
  return (
    <Forum
      term="Welcome to the forum! Choose a category to start the discussion."
      inputPosition="top"
      theme="dark"
      reactionsEnabled="1"
      lang="en"
    />
  );
}
