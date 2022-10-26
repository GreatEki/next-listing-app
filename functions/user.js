exports.handler = async (event, context) => {
  const data = [{ name: "mario", age: 35, job: "plumber" }];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({ msg: `You aren't authenticated` }),
  };
};
