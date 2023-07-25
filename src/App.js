import "./styles.css";

function Item({ ischosen, name }) {
  return (
    <li className="item">
      {name} {ischosen ? "✔" : "❌"}
    </li>
  );
}
export default function Choice() {
  return (
    <section>
      <h1>daamn choices</h1>
      <ul>
        <Item ischosen={true} name="S.E" />
        <Item ischosen={true} name="AWS" />
        <Item ischosen={false} name="Literature" />
      </ul>
    </section>
  );
}
