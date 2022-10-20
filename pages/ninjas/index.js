import Head from "next/head";
import Link from "next/link";
import NinjaCSS from "./ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { theNinjas: data },
  };
};

const Ninjas = (props) => {
  return (
    <>
      <Head>
        <title> Ninja List | Ninjas </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1> Ninjas </h1>
        {props.theNinjas &&
          props.theNinjas.map((ninja, index) => (
            <Link href={`/ninjas/ninja-details/${ninja.id}`} key={index}>
              <a className={NinjaCSS.single}>
                <h3> {ninja.name}</h3>
              </a>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Ninjas;
