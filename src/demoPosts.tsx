
export interface iPost {
    user: String;
    id: number; // hex??
    category: String;
    content: String;
    timestamp: String;
    stars: number;
}

const postData: any[] = [
    {
        user: 'jason',
        postId: '001',
        postCategory: 'idea',
        postContent: 'Whale Riding'
    },
    {
        user: 'jason',
        postId: '002',
        postCategory: 'concern',
        postContent: '40 people could be trying to attack me'
    },
    {
        user: 'jason',
        postId: '003',
        postCategory: 'idea',
        postContent: 'Taking boxes and giving them to children for play forts'
    },
    {
        user: 'sarah',
        postId: '004',
        postCategory: 'wish',
        postContent: 'Whales to live free from fear'
    },
    {
        user: 'sarah',
        postId: '005',
        postCategory: 'idea',
        postContent: 'Toasters which are food-safe'
    },
    {
        user: 'sarah',
        postId: '006',
        postCategory: 'wish',
        postContent: '80 pounds of tater tots'
    },
    {
        user: 'taylor',
        postId: '007',
        postCategory: 'concern',
        postContent: 'What if the world exploded?'
    },
    {
        user: 'sarah',
        postId: '008',
        postCategory: 'idea',
        postContent: 'Robots n Stuff'
    },
    {
        user: 'sarah',
        postId: '009',
        postCategory: 'wish',
        postContent: 'Food for the entire world'
    },
    {
        user: 'taylor',
        postId: '010',
        postCategory: 'concern',
        postContent: 'my pants...'
    },
    {
        user: 'sarah',
        postId: '011',
        postCategory: 'idea',
        postContent: 'The realm of possibility! dolphins, whales'
    },
    {
        user: 'sarah',
        postId: '012',
        postCategory: 'wish',
        postContent: 'life to be gooder'
    },
    {
        user: 'taylor',
        postId: '013',
        postCategory: 'concern',
        postContent: 'rhino-human hybrids'
    }
];

export default postData;