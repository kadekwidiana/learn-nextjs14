export const getData = async (url: string) => {
    const res = await fetch(url, {
        // const res = await fetch('http://localhost:3000/api/product', {
        // cache: 'force-cache',
        cache: 'no-store',
        next: {
            tags: ["product"]
            // revalidate: 30
        }
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}