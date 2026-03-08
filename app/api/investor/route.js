export async function POST(req) {

  const data = await req.json();

  console.log("Investor Interest:", data);

  return Response.json({
    message: "Investor data received"
  });

}