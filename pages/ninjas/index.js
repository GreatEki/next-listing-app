import Head from "next/head";

const Ninjas = () => {
  return (
    <>
      <Head>
        <title> Ninja List | Ninjas </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1> Ninjas Index Page </h1>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.{" "}
        </p>
      </div>
    </>
  );
};

export default Ninjas;
