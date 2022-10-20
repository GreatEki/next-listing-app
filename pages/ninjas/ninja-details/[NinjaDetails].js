export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { NinjaDetails: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.NinjaDetails;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const NinjaDetails = (props) => {
  return (
    <div>
      <h1> {props.ninja.name} </h1>

      <p>{props.ninja.email}</p>
      <p>{props.ninja.website}</p>
      <p>{props.ninja.address?.city}</p>
    </div>
  );
};

export default NinjaDetails;
