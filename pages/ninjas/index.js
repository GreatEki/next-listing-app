import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Head from "next/head";
import Link from "next/link";
import NinjaCSS from "./ninjas.module.css";

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res) throw new Error("Failed to get static props data");

    const data = await res.json();

    return {
      props: { theNinjas: data },
    };
  } catch (err) {
    console.log(err.message);
  }
};

const Ninjas = (props) => {
  const { authReady, user } = useContext(AuthContext);

  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        `/.netlify/functions/user`,
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok && !user) {
            throw new Error("You must  be authenticated");
          }

          if (!res.ok && user) {
            throw new Error("Failed to fetch data from cloud function");
          }

          return res.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <>
      <Head>
        <title> Ninja List | Ninjas </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      {!authReady && <div> Loading.... </div>}

      {error && (
        <div>
          <p className="error"> {error} </p>
        </div>
      )}

      {guides && (
        <>
          <div className="info">
            <p>
              {" "}
              Hey Ninjas. Your guide for this expedition is:{" "}
              <span> {guides[0]} </span>
            </p>
          </div>

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
      )}
    </>
  );
};

export default Ninjas;
