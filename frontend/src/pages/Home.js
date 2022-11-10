export default function Home() {
  return (
    <div>
      <div>
        Welcome to quickpoll. Create a poll by selecting one of the above
        polling options.
      </div>
      <div>
        <b>Majority</b> will create a poll based on majority voting. The option
        with the most votes will be the winner.
      </div>
      <div>
        <b>Proportional</b> will create a poll based on proportional voting. An
        award value will be distributed proportionally to the number of votes
        each option receives.
      </div>
    </div>
  );
}
