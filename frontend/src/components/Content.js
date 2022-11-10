import Home from '../pages/Home';
export default function Content(props) {
  let text;
  const id = props.id;
  if (id == null) {
    text = 'you are viewing home page';
  } else {
    text = <p>you are viewing poll number {id}</p>;
  }
  return (
    <div>
      <div>
        <Home />
      </div>
      {text}
    </div>
  );
}
