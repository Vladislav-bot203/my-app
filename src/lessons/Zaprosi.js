import Promises from "./Promises";

const Zaprosi = () => {
  const posts = getInquiry("https://jsonplaceholder.typicode.com/posts");
  console.log(posts);

  return <h1>Zaprosi</h1>;
};
function describe() {
  console.log(
    `title: ${this.title}, userid: ${this.userId}, body: ${this.body}, userName: ${this.authorName}`
  );
}

async function getInquiry(inquiry) {
  let posts = await fetch(inquiry);
  posts = await posts.json();

  posts = await Promise.all(posts.map(async (post) => {
    let user = await getUserById(post.userId);
    return { ...post, describe: describe, authorName: user.name};
  }))
  console.log(posts);

  // posts.forEach((post) => {
  //   post.describe();
  // });
  return posts;
}

async function getUserById(userId) {
  let user = await fetch(
    `http://jsonplaceholder.typicode.com/users/${userId}`
  );
  user = await user.json();
  return user;
}

export default Zaprosi;
