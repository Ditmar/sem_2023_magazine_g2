export const fetchData = async (): Promise<Article[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
};

interface Article {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}