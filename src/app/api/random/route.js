export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const max = parseInt(searchParams.get('max'), 10);
    const min = parseInt(searchParams.get('min'), 10);

    const value = Math.floor(Math.random() * (max - min) + min);

    return Response.json({ value });
}