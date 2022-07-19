export function initLocalStorage(props) {
  localStorage.setItem(
    "users",
    JSON.stringify([
      {
        username: "admin",
        email: "admin@admin.com",
      },
    ])
  );
  localStorage.setItem("Discussions", [
    {
      id: 1,
      title: "Title Discussion",
      body: "Example Discussion",
      author: "admins",
      created_at: "19/07/2022",
      replies: [
        {
          id: 1,
          author: "admin",
          comment: "Example Reply",
          replies: [
            {
              author: "admin",
              created_at: "19/07/2022",
              comment: "Example reply reply",
            },
          ],
        },
      ],
    },
  ]);
}
