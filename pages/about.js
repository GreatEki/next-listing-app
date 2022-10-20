import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title> Ninja List | About </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1> About </h1>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
      </p>
    </div>
  );
};

export default About;
