export async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`https://test.drwafaakamel.com${endpoint}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`فشل في جلب البيانات (${response.status})`);
    }

    const { data } = await response.json();
    return data || [];
  } catch (error) {
    console.error("❌ Error fetching awards:", error);
  }
}
